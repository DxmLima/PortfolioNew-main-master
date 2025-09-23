"use client";

import React, { useState, useEffect } from "react";
import { Archivo_Narrow} from "next/font/google";
import BinaryBackground from "./BinaryBackground";

const arch = Archivo_Narrow({
  subsets: ["latin"],
});

const terminalLines = [
  "▶ Initializing portfolio system...",
  "▶ Loading user: Mateus Lima",
  "▶ Status: Creative Developer [OK]",
  "▶ Fetching projects... ",
  "▶ Boot complete. Welcome!"
];

function HeroPage() {
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
          }, 300);
        }
      }, currentLineIndex === 3 ? 50 : 80); // Faster typing for progress line

      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(false);
    }
  }, [currentLineIndex]);

  useEffect(() => {
    if (currentLineIndex === 3) {
      // Animate progress bar
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

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Restart animation after completion
  useEffect(() => {
    if (!isTyping) {
      const restartTimeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentLineIndex(0);
        setIsTyping(true);
        setProgress(0);
      }, 3000);
      
      return () => clearTimeout(restartTimeout);
    }
  }, [isTyping]);

  const renderProgressBar = () => {
    if (currentLineIndex !== 3) return "";
    
    const bars = Math.floor(progress / 10);
    const progressBar = "█".repeat(bars) + "░".repeat(10 - bars);
    return `${progressBar} ${progress}%`;
  };

  return (
    <div className={arch.className}>
          <BinaryBackground />
      <section className="flex justify-center items-center bg-[#0A0A0A] min-h-[700px] p-6">
        <div className="w-full max-w-5xl rounded-lg border border-neutral-800 bg-black/80 shadow-2xl backdrop-blur">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/80 rounded-t-lg">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <div className="ml-3 text-xs text-neutral-400 select-none">mateus@portfolio: ~</div>
          </div>

          {/* Terminal body */}
          <div className="relative px-6 py-8 md:px-10 md:py-10">
            {/* subtle scanlines */}
            <div className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(transparent_0px,transparent_2px,rgba(255,255,255,0.02)_3px,transparent_4px)] rounded-b-lg"></div>

            <div className="relative space-y-6 font-mono">
              <div className="text-sm md:text-base text-green-400/90 leading-7 min-h-[120px]">
                <div className="whitespace-pre-line">
                  {displayedText}
                  {currentLineIndex === 3 && renderProgressBar()}
                  {isTyping && showCursor && <span className="text-green-400">█</span>}
                </div>
              </div>

              <div className="text-neutral-100">
                <div className="text-2xl md:text-4xl font-bold tracking-tight">
                  &#x276F; whoami
                </div>
                <div className="mt-4 text-sm md:text-lg text-neutral-300 leading-7">
                  User: <span className="text-white">Mateus Lima</span><br />
                  Role: <span className="text-white">FullStack Developer & Designer</span><br />
                  Location: <span className="text-white">Earth [PT-BR]</span><br />
                  Status: <span className="text-green-400 ">Online</span><span className="ml-2 inline-block h-2 w-2 rounded-full bg-green-400 align-middle animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroPage;

// Button code
