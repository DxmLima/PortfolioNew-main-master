"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const mont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});




const testimonials = [
  {
    quote:
      "A equipe da Legality sempre me atendeu com muita dedicação e profissionalismo. Resolvi meu problema jurídico de forma rápida e tranquila.",
    name: "Mariana Silva",
    title: "Cliente satisfeita",
  },
  {
    quote:
      "Fiquei impressionado com o nível de conhecimento e atenção aos detalhes. A Legality me deu segurança em cada etapa do processo.",
    name: "Ricardo Almeida",
    title: "Empresário",
  },
  {
    quote:
      "Além de competência técnica, encontrei na Legality empatia e transparência. Recomendo a todos que precisam de assessoria jurídica de confiança.",
    name: "Fernanda Costa",
    title: "Empreendedora",
  },
  {
    quote:
      "A Legality me ajudou em uma situação delicada com agilidade e humanidade. Hoje me sinto muito mais tranquilo com o suporte deles.",
    name: "João Pereira",
    title: "Cliente pessoa física",
  },
  {
    quote:
      "Com a Legality, tive orientação clara e objetiva para estruturar minha empresa de forma legal e segura. Parceiros indispensáveis.",
    name: "Carla Mendes",
    title: "Gestora de negócios",
  },
];




const TestimonialSC = () => {
  return (
    <div className={mont.className}>
          <div className="mb-16 mt-20  md:mt-[100px] ml-8 md:ml-[280px]">
            <h2 className="text-2xl  md:text-4xl font-light leading-tight tracking-tight text-black mb-4">
              FeedBack de Clientes
            </h2>
            <div className="w-16 h-px bg-black"></div>
          </div>

        <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  )
}

export default TestimonialSC