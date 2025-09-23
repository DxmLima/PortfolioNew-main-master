'use client'
import Navbar from '@/app/components/navbar'
import React from 'react'
import MatrixEffect from '../SelectedWorks/MatrixEffect'
import { ServiceCards } from './ServiceCards'
import ServiceInfo from './ServiceInfo'
import Footer from '@/app/components/Footer'
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from 'next/link'

const ServicePage = () => {
  return (
    <>
      <Navbar />
      <MatrixEffect />
      <ServiceInfo />
      <section className="flex justify-center intens-center mb-12">
          <Link className="flex gap-4 px-5 py-3 bg-black hover:bg-[#0b1215] text-white " href='https://api.whatsapp.com/send?phone=5519982668985' target="_blank"> Entrar em Contato <IconBrandWhatsapp /></Link>
          </section>
      <Footer />
    </>
  )
}

export default ServicePage