"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import ArchImg from '@/public/Template/Arch.png';

const cardData = [
  {
    title: "Template Arquitetura",
    imageUrl: ArchImg,
    link: "/Templates/Arquitetura",
  },
  {
    title: "Template Agência",
    description: "CSS transforms can create amazing depth effects.",
    imageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/Templates/Agencia",
  },

  {
    title: "Template Portfólio",
    description: "CSS transforms can create amazing depth effects.",
    imageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/Templates/Portfolio",
  },
];

export function CardTemplate() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      {cardData.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className=" bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[400px]  h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-red-600  "
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-800 text-sm max-w-sm mt-2 "
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.imageUrl}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href={card.link}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Demonstração 
              </CardItem>
          
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}