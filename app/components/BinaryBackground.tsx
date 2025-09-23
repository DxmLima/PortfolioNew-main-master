"use client";

import React, { useEffect, useMemo, useRef } from "react";

type BinaryBackgroundProps = {
  intensity?: number; // number of columns
  speed?: number; // fall speed multiplier
  className?: string;
  opacity?: number; // 0..1 overlay opacity
  variant?: "global" | "local"; // global: fixed viewport; local: fits parent
  zIndexClass?: string; // override z-index utility
};

// Lightweight canvas-based binary rain inspired by Matrix effect
export default function BinaryBackground({
  intensity = 80,
  speed = 1,
  className = "",
  opacity = 0.08,
  variant = "global",
  zIndexClass = "-z-10",
}: BinaryBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const characters = useMemo(() => "01".split(""), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const setSize = () => {
      if (variant === "global") {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      } else {
        if (!container) return;
        const rect = container.getBoundingClientRect();
        width = canvas.width = Math.max(1, Math.floor(rect.width));
        height = canvas.height = Math.max(1, Math.floor(rect.height));
      }
    };
    setSize();

    const fontSize = Math.max(12, Math.floor(width / Math.max(40, intensity)));
    const columns = Math.ceil(width / fontSize);
    const drops: number[] = new Array(columns).fill(0).map(() => Math.random() * -50);

    const onResize = () => {
      setSize();
    };
    let resizeObserver: ResizeObserver | null = null;
    if (variant === "global") {
      window.addEventListener("resize", onResize);
    } else if (container && "ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => setSize());
      resizeObserver.observe(container);
    }

    const draw = () => {
      // fade the canvas slightly to create trail
      ctx.fillStyle = `rgba(0,0,0,${Math.min(0.15 * speed, 0.3)})`;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        // subtle green
        ctx.fillStyle = `rgba(74, 222, 128, ${Math.min(0.9, 0.6 + Math.random() * 0.4)})`; // emerald-400
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i] += 0.9 * speed;
        }
      }
      animationRef.current = requestAnimationFrame(draw);
    };

    // initialize background so it is not fully black initially
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (variant === "global") {
        window.removeEventListener("resize", onResize);
      } else if (resizeObserver && container) {
        resizeObserver.unobserve(container);
      }
    };
  }, [characters, intensity, speed, variant]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none ${variant === "global" ? "fixed inset-0" : "absolute inset-0"} ${zIndexClass} ${className}`}
      style={{ opacity }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </div>
  );
}


