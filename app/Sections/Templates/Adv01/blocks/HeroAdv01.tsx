'use client'
import React from 'react'
import { Sura, Montserrat } from 'next/font/google'
import {cn} from '@/lib/utils'


const sura = Sura({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})


const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})


const HeroAdv01 = () => {
  return (
    <div className={sura.className}>
    <section className='relative  w-full h-[920px md:h-[800px] flex justify-center items-center overflow-hidden py-24 md:py-32 bg-gradient-to-br from-slate-50 to-white'>
        {/* subtle background gradient */}
        <div className='absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white to-transparent' aria-hidden='true' />
        <div className='pointer-events-none absolute -left-24 -top-24 h-[36rem] w-[36rem] rounded-full bg-white-z-10' aria-hidden='true' />
        <div className='pointer-events-none absolute -right-24 -bottom-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-white via-slate-200 to-slate-100 blur-3xl -z-10' aria-hidden='true' />

        <main className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20 px-6'>
              <div className='space-y-6'>
                  <h1 data-aos="fade-right" className='text-4xl md:text-6xl font-light leading-[1.1] tracking-tight text-black'>
                    Experiência, ética e resultados em advocacia
                  </h1>
                  <p  className={cn(mont.className, 'mt-4 max-w-xl text-base md:text-lg text-neutral-600 dark:text-neutral-300')}>
                    Atuamos com foco no cliente, transparência e estratégias jurídicas eficazes para proteger seus direitos e alcançar os melhores resultados.
                  </p>
                  <div className='flex flex-col  sm:flex-row gap-8 pt-2'>
                    <a href='/Sections/Templates/Adv01/Contato' className={cn(mont.className, 'inline-flex items-center justify-center rounded-lg bg-black text-white px-5 py-3 text-sm font-medium shadow-lg transition hover:scale-[1.02] hover:shadow-xl dark:bg-white dark:text-black')}>
                      Solicitar Atendimento
                    </a>
                    <a href='/Sections/Templates/Adv01/Services' className={cn(mont.className, 'inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-3 text-sm font-medium text-blue-800 hover:text-white transition hover:bg-[#071629] dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800')}>
                      Conheça nossos serviços
                    </a>
                  </div>
              </div>

              <div className='w-full grid place-items-center gap-12 '>
                <div className='relative w-full max-w-[560px]  mb-[100px] md:mb-[0px]  md:h-[40rem] rounded-2xl'>
                  <div className='pointer-events-none absolute -inset-4 -z-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-2xl opacity-20' aria-hidden='true' />
                  <img
                    src='/Template/Adv01/Statue.png'
                    alt='Ilustração representando serviços de advocacia'
                    className='relative z-10 h-full w-full object-cover shadow-2xl ring-1 md:ml-12 ring-black/5 dark:ring-white/10'
                  />
                </div>
              </div>
        </main>
    </section>
    </div>
  )
}

export default HeroAdv01