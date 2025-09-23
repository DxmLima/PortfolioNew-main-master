"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function HeroAppleCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Projetos Recentes
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    title: "Eliana Nakakubo",
    src:  '/HeroPage/Card01.svg',
    content: '/Portfolio/ElianaNakakubo',
    category: "Personal",
  },
  {
    title: "AutoPlacas.net",
    src: "/HeroPage/Card02.svg",
    content: '/Portfolio/ElianaNakakubo',
    category: "Business",
  },
  {
    title: "Ansiedade Soluções",
    src: "/HeroPage/Card03.svg",
    content: '/Portfolio/ElianaNakakubo',
    category: "Health",
  },
];
