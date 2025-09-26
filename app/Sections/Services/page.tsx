'use client'
import Navbar from '@/app/components/navbar'
import React from 'react'
import Footer from '@/app/components/Footer'
import ServiceHero from './BlocksService/ServiceHero'

const ServicePage = () => {
  return (
    <>
      <Navbar />
      <ServiceHero />
      <Footer />
    </>
  )
}

export default ServicePage