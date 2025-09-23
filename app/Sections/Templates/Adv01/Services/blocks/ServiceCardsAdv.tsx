'use client'
import React from 'react'
import { HoverEffect } from "@/app/components/ui/cardAdv";
const ServiceCardsAdv = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 mt-24">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-black">Áreas de atuação</h2>
        
      </div>
      <HoverEffect
        items={projects}
        className="py-6"
        cardClassName="  bg-[#071629] rounded-md shadow-xl border-2 border-gray-100"
        overlayClassName="hidden"
        titleClassName="text-white font-semibold tracking-tight"
        descriptionClassName="text-neutral-200 tracking-normal leading-relaxed"
      />
    </div>
  )
}

export const projects = [
  {
    title: "Direito Civil",
    description:
      "Ações de responsabilidade civil, cobranças, indenizações, contratos e proteção de direitos.",
    link: "#direito-civil",
  },
  {
    title: "Direito Trabalhista",
    description:
      "Reclamações trabalhistas, verbas rescisórias, assédio, horas extras e consultoria para empresas.",
    link: "#direito-trabalhista",
  },
  {
    title: "Direito Penal",
    description:
      "Defesa em inquéritos e processos criminais, medidas cautelares e habeas corpus.",
    link: "#direito-penal",
  },
  {
    title: "Direito Empresarial",
    description:
      "Constituição de empresas, contratos societários, consultoria e solução de conflitos comerciais.",
    link: "#direito-empresarial",
  },
  {
    title: "Direito Tributário",
    description:
      "Planejamento tributário, defesas administrativas e judiciais, recuperação de créditos fiscais.",
    link: "#direito-tributario",
  },
  {
    title: "Direito de Família",
    description:
      "Divórcio, guarda, pensão alimentícia, regulamentação de visitas e inventários.",
    link: "#direito-de-familia",
  },
];

export default ServiceCardsAdv