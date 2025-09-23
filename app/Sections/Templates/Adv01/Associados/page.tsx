import React from 'react'
import NavbarAdv01 from '../blocks/NavbarAdv01'
import AssociadosHero from './blocks/AssociadosHero'
import AssociadosPage from '../blocks/AssociadosPage'
import FooterAdv from '../blocks/FooterAdv'
import MiniBanner from '../blocks/MiniBanner'

const AssociadosSection = () => {
  return (
    <>
    <MiniBanner />
     <NavbarAdv01 />
     <AssociadosHero />
     <AssociadosPage />
    <FooterAdv />
    </>
  )
}

export default AssociadosSection