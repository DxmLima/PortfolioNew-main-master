import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Law from '@/public/Template/Adv01/Law.jpg'

import { Sura } from 'next/font/google'
import {cn} from '@/lib/utils'


const sura = Sura({   
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})



const ServiceHero = () => {
  return (
    <>
      <section className='relative  mb-12 w-full h-[920px] flex justify-center items-center overflow-hidden py-24 md:py-32 bg-gradient-to-br from-slate-50 to-white  '>
          <main className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 gap-12'>
                <div id='TEXT'>
                      <h1 className={cn(sura.className,'text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-black')}>Ofereçemos serviços especializados para lidar com burocracias legais</h1>

                        <p className='text-neutral-700 max-w-xl leading-relaxed mt-4'>Servindo em diversas áreas de atuação, garantimos um comprometimento com trabalho de excelência e estruturado.</p>
                      <div className='mt-10'>
                        <Link href='/Sections/Templates/Adv01/Contato' className='inline-flex items-center justify-center rounded-lg bg-black text-white px-6 py-4 text-sm font-medium shadow-lg transition hover:scale-[1.02] hover:shadow-xl dark:bg-white dark:text-black'>Entrar em contato</Link>
                      </div>
                </div>

                <div id='IMAGE' className='flex md:justify-end'>
                    <Image alt='Law' src={Law} className='w-full max-w-[520px] object-cover rounded-md'/>
                </div>
          </main>
      </section>
    </>
  )
}

export default ServiceHero