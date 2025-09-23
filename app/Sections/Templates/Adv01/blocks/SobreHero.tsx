"use client";

import Image from "next/image";
import React from "react";
import AboutUsHero from "@/public/Template/Adv01/AboutPage.jpg";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";
import {  Montserrat } from 'next/font/google'
import {cn} from '@/lib/utils'

const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})


const imageUrl = (AboutUsHero)


const SobreHero = () => {
  return (
    <div className={mont.className}>
      <div className=" bg-gray-50">
      <div className="mb-16 ml-8 md:ml-[280px]">
            <h2 className="text-2xl pt-12 md:text-4xl font-light leading-tight tracking-tight text-black mb-4">
              Legality Advocacia
            </h2>
            <div className="w-16 h-px bg-black"></div>
          </div>
    
        <section className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <DirectionAwareHover className="w-[320px] md:w-[620px] md:mt-16  rounded-sm mt-12 m-4" imageUrl={imageUrl}>
                
               
                </DirectionAwareHover>
            </div>

            <div className="mt-8">
              <h2 className={cn(mont.className, 'w-[325px] md:w-[450px] mt-8 m-4 -tracking-tight text-1xl  font-medium')}>
                Na Legality Advocacia, acreditamos que a advocacia vai além da
                atuação em processos. Nosso compromisso é construir soluções
                jurídicas estratégicas, capazes de proteger direitos, prevenir
                conflitos e gerar resultados duradouros. <br /> <br /> Com uma equipe de
                profissionais experientes e especializados em diferentes áreas
                do Direito, unimos tradição, ética e inovação para atender tanto
                pessoas físicas quanto empresas. Cada caso é tratado com atenção
                personalizada, porque sabemos que por trás de cada demanda
                existe uma história única. <br /> <br /> Nosso propósito é ser mais do que
                advogados: somos parceiros de confiança, dedicados a orientar,
                defender e representar nossos clientes com excelência e
                transparência em todas as etapas.
              </h2>

              <div className="mt-10 ml-3 pb-8">
                <Link href='/Sections/Templates/Adv01/About' className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-3  font-medium text-white hover:text-white transition hover:bg-[#071629] dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 text-[15px] "> Mais Informações</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SobreHero;
