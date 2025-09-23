import React from 'react'
import NavbarAdv01 from '../blocks/NavbarAdv01'
import ServiceHero from './blocks/ServiceHero'
import ServiceCardsAdv from './blocks/ServiceCardsAdv'
import FooterAdv from '../blocks/FooterAdv'
import Link from 'next/link'
import MiniBanner from '../blocks/MiniBanner'

const ServiceAdvPage = () => {
  return (
    <>
      <MiniBanner />
      <NavbarAdv01 />
      <ServiceHero />
      <ServiceCardsAdv />
      <section className='max-w-6xl mx-auto px-4 md:px-8 my-24 '>
        <div className='border-t border-black'></div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pt-8'>
          <h3 className='text-2xl md:text-3xl font-light tracking-tight text-black md:col-span-2'>Vamos conversar sobre o seu caso.</h3>
          <div className='md:text-right'>
            <Link href='/Sections/Templates/Adv01/Contato' className='inline-flex items-center justify-center rounded-lg bg-black text-white px-6 py-4 text-sm font-medium shadow-lg transition hover:scale-[1.02] hover:shadow-xl dark:bg-white dark:text-black'>Entrar em contato</Link>
          </div>
        </div>
      </section>
      <FooterAdv />
    </>
  )
}

export default ServiceAdvPage