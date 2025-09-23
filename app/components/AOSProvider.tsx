'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

type AOSProviderProps = {
  children: React.ReactNode
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 0,
    })
    AOS.refresh()
  }, [])

  return <>{children}</>
}


