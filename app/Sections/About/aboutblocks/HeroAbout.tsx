"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Profile from '@/public/profileblackwhite.png'
import BinaryBackground from '@/app/components/BinaryBackground'

const terminalLines = [
  "\u25B6 Initializing about module...",
  "\u25B6 Loading profile: Mateus Lima",
  "\u25B6 Loading skills... ",
  "\u25B6 Ready. Welcome!"
];

const HeroAbout = () => {

  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const currentLine = terminalLines[currentLineIndex];
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= currentLine.length) {
          setDisplayedText(prev => {
            const newText = terminalLines.slice(0, currentLineIndex).join('\n') +
              (currentLineIndex > 0 ? '\n' : '') +
              currentLine.slice(0, charIndex);
            return newText;
          });
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLineIndex(prev => prev + 1);
          }, 250);
        }
      }, currentLineIndex === 2 ? 50 : 80);

      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(false);
    }
  }, [currentLineIndex]);

  useEffect(() => {
    if (currentLineIndex === 2) {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(progressInterval);
    }
  }, [currentLineIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const renderProgressBar = () => {
    if (currentLineIndex !== 2) return "";
    const bars = Math.floor(progress / 10);
    const progressBar = "█".repeat(bars) + "░".repeat(10 - bars);
    return `${progressBar} ${progress}%`;
  };
  return (
    <div className="bg-[#0A0A0A] relative overflow-hidden">
      <BinaryBackground />
      <section className="flex justify-center items-center min-h-[600px] py-16 px-6 sm:px-8 lg:px-12">
        <div className="w-full max-w-6xl rounded-lg border border-neutral-800 bg-black/80 shadow-2xl backdrop-blur">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/80 rounded-t-lg">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <div className="ml-3 text-xs text-neutral-400 select-none">mateus@about: ~</div>
          </div>

          {/* Terminal body */}
          <div className="relative px-6 py-8 md:px-10 md:py-10">
            {/* subtle scanlines */}
            <div className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(transparent_0px,transparent_2px,rgba(255,255,255,0.02)_3px,transparent_4px)] rounded-b-lg" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left: copy in mono/terminal style */}
              <div className="text-green-400/90 font-mono leading-7">
                <div className="text-sm md:text-base text-green-400/90 leading-7 min-h-[120px]">
                  <div className="whitespace-pre-line">
                    {displayedText}
                    {currentLineIndex === 2 && renderProgressBar()}
                    {isTyping && showCursor && <span className="text-green-400">█</span>}
                  </div>
                </div>

                <div className="mt-8 text-neutral-200">
                  <div className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-100 mb-2">
                    &#x276F; about
                  </div>
                  <p className="text-sm md:text-base text-neutral-300 max-w-xl">
                    Crio experiências digitais performáticas e acessíveis, com foco em design polido,
                    animações sutis e código limpo. Trabalho com React, Next.js, TypeScript e Tailwind
                    para construir interfaces escaláveis e responsivas.
                  </p>
                </div>

                <div className="mt-6 text-xs md:text-sm text-green-300/90">
                  <div className="mb-2">$ skills --list</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded border border-green-900/60 bg-black/60">React.js</span>
                    <span className="px-2 py-1 rounded border border-green-900/60 bg-black/60">Next.js</span>
                    <span className="px-2 py-1 rounded border border-green-900/60 bg-black/60">TypeScript</span>
                    <span className="px-2 py-1 rounded border border-green-900/60 bg-black/60">Node.js</span>
                    <span className="px-2 py-1 rounded border border-green-900/60 bg-black/60">Python</span>
                    <span className="px-2 py-1 rounded border border-green-900/60 bg-black/60">UI/UX</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#projects" className="px-4 py-2 rounded border border-green-700 text-green-300 hover:bg-green-950/40 transition font-mono text-sm">
                    $ open projects
                  </a>
                  <a href="#contact" className="px-4 py-2 rounded border border-green-700 text-green-300 hover:bg-green-950/40 transition font-mono text-sm">
                    $ contact
                  </a>
                </div>
              </div>

              {/* Right: profile visual inside terminal */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-sm overflow-hidden ring-2 ring-green-900/60 shadow-[0_0_80px_rgba(16,185,129,0.25)]">
                      <Image src={Profile} alt="Foto de perfil" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroAbout;
