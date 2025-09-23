"Use Client";

// components/CardFlip.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import AceCard from "../../../public/HeroPage/AceCard.svg"; // ajuste o caminho se necessário

interface CardFlipProps {
  frontText: string;
  backText: any;

  initial?: { x: number; y: number; rotate: number };
  hover?: { x?: number; y?: number; rotate?: number; scale?: number };
  zIndex?: string;
  delay?: number;
}

const CardFlip: React.FC<CardFlipProps> = ({
  frontText,
  backText,
  initial = { x: 0, y: 0, rotate: 0 },
  hover = {},
  zIndex = "z-50",
  delay = 0,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ x: 0, y: 0, rotate: 0 }}
      animate={{ ...initial }}
      whileHover={{
        rotate: hover.rotate ?? 0,
        x: hover.x ?? initial.x,
        y: hover.y ?? initial.y,
        scale: hover.scale ?? 1.05,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: delay / 1000,
        },
      }}
      onClick={() => setFlipped((prev) => !prev)}
      className={`w-[200px] h-[325px] absolute top-0 left-1/2 -translate-x-1/2 ${zIndex} shadow-2xl perspective cursor-pointer`}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Frente */}
        <div className="absolute w-full h-full backface-hidden">
          <Image
            alt="Ace Card"
            src={AceCard}
            fill
            className="object-cover rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent font-bold text-2xl uppercase ">
              {frontText}
            </p>
          </div>
        </div>

        {/* Verso */}
        <div className="absolute w-full h-full backface-hidden rotateY-180 bg-white rounded-md flex items-center justify-center">
          <p className="text-black font-bold text-xl">{backText}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardFlip;
