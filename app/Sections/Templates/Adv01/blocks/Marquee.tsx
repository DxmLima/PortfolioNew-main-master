"use client";
import React from 'react'
import Marquee from "react-fast-marquee";
import { Montserrat } from 'next/font/google'
import {cn} from '@/lib/utils'


const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})


const AREAS = [
  "Direito Civil",
  "Direito Trabalhista",
  "Direito Penal",
  "Direito Empresarial",
  "Direito Tributário",
  "Direito Previdenciário",
  "Direito de Família",
  "Direito Imobiliário",
  "Direito do Consumidor",
  "Direito Ambiental",
  "Contratos e Compliance",
  "LGPD e Privacidade",
  "Propriedade Intelectual"
];

const MarqueeLaw = () => {
  return (
      <section className={cn(mont.className, 'text-1xl bg-[#071629] h-[100px] flex items-center')} aria-label='Áreas de atuação em advocacia'>
         <div className='w-full flex items-center'>
           <Marquee className='w-full' gradient={false} pauseOnHover={true} speed={50}>
              {AREAS.map((area, idx) => (
                 <span key={idx} className='mx-8 whitespace-nowrap text-white leading-none'>{area}</span>
              ))}
           </Marquee>
         </div>
      </section>
  )
}

export default MarqueeLaw