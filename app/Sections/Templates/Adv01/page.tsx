'use client'
import React, { useEffect } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'
import NavbarAdv01 from './blocks/NavbarAdv01'
import HeroAdv01 from './blocks/HeroAdv01'
import MarqueeLaw from './blocks/Marquee'
import SobreHero from './blocks/SobreHero'
import AssociadosPage from './blocks/AssociadosPage'
import FooterAdv from './blocks/FooterAdv'
import TestimonialSC from './blocks/TestimonialSC'
import NossaLocaliza from './blocks/NossaLocaliza'
import CTASection from './blocks/CTASection'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import MiniBanner from './blocks/MiniBanner'
MiniBanner
const Av01Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 1, smoothWheel: true }}>
      <>
        <MiniBanner />
        <NavbarAdv01 />
        <HeroAdv01 />
        <MarqueeLaw />
        <SobreHero />
        <AssociadosPage />
        <TestimonialSC />
        <NossaLocaliza />
        <CTASection />
        <FooterAdv />
      </>
    </ReactLenis>
  ) 
}

export default Av01Page