import { Section } from 'lucide-react'
import React from 'react'
import NavbarAdv01 from '../blocks/NavbarAdv01'
import AboutAdvHero from './blocks/AboutAdvHero'
import TextAbout from './blocks/TextAbout'
import FooterAdv from '../blocks/FooterAdv'
import MiniBanner from '../blocks/MiniBanner'

const AboutAdvPage = () => {
  return (
    <> 
      <MiniBanner />
      <NavbarAdv01 />
      <AboutAdvHero />
      <TextAbout />
      <FooterAdv />
    </>
  )
}

export default AboutAdvPage