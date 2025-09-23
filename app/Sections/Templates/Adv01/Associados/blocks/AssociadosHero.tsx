import Link from 'next/link'
import React from 'react'
import { Sura } from 'next/font/google'
import {cn} from '@/lib/utils'


const sura = Sura({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const AssociadosHero = () => {
  return (
    <div className=' flex justify-center items-center overflow-hidden py-24 md:py-32 bg-gradient-to-br from-slate-50 to-white'>
       <section className=' grid grid-cols-1 md:grid-cols-2  mt-20 md:mt-32 w-[1200px]'>
          <main className='   px-4 md:px-8 '>
                <div id='TEXT' className='md:col-span-7'>
                      <h1 className={cn(sura.className,'text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-black')}>Equipe Jurídica
                        <span className='block text-neutral-600'>ética, precisa e multidisciplinar</span>
                      </h1>

                      <p className='text-neutral-700 max-w-xl leading-relaxed mt-5'>Conheça os profissionais que conduzem cada caso com rigor técnico, clareza e foco em resultados. Relacionamento direto, comunicação objetiva e responsabilidade em cada etapa.</p>

                      <div className='mt-10'>
                        <Link href='/FastLinks' className='inline-flex items-center justify-center rounded-none bg-black text-white px-7 py-4 text-sm font-medium tracking-wide transition hover:opacity-90'>Fale com nossa equipe</Link>
                      </div>
                </div>

              
          </main>

          <div className='w-[500px] mx-auto px-4 md:px-8 mt-10'>
             <div className='h-px w-full bg-black'></div>
             <div className='mt-4 grid   grid-cols1  md:grid-cols-2  gap-6 text-xs uppercase tracking-widest text-neutral-500'>
               <div>
                 <p>Áreas</p>
                 <p className='mt-1 text-neutral-800'>Cível • Empresarial • Tributário • Trabalhista</p>
               </div>
               <div>
                 <p>Atuação</p>
                 <p className='mt-1 text-neutral-800'>Consultivo e Contencioso</p>
               </div>
               <div>
                 <p>Abordagem</p>
                 <p className='mt-1 text-neutral-800'>Precisa, objetiva, orientada a dados</p>
               </div>
               <div>
                 <p>Atendimento</p>
                 <p className='mt-1 text-neutral-800'>Brasil e internacional</p>
               </div>
             </div>
          </div>
      </section>
    </div>
  )
}

export default AssociadosHero