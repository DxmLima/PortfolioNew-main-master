import Navbar from '@/app/components/navbar'
import React from 'react'
import HeroAbout from './aboutblocks/HeroAbout'
import { AnimateInputRender } from './aboutblocks/AnimeteInput'
import ChatbotPage from '../Chatbot/page'
import Footer from '@/app/components/Footer'

const AboutPage = () => {
  return (
    <>
        <Navbar />
        <HeroAbout/>
        <ChatbotPage />
        <Footer />
    </>
  )
}

export default AboutPage