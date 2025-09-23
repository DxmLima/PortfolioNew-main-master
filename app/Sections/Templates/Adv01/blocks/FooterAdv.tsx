"use client"
import React from 'react'
import { Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'

const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const FooterAdv = () => {
  return (
    <footer className={cn(mont.className, 'w-full bg-[#071629] text-white')} aria-label='Rodapé do site'>
      <div className='mx-auto max-w-6xl px-6 py-12'>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-10'>
          <div className='space-y-2'>
            <h2 className='text-xl md:text-2xl font-semibold tracking-tight'>
            Legality Advocacia
            </h2>
            <p className='text-sm/6 text-white/70 max-w-md'>
              Estratégia, ética e excelência na defesa dos seus direitos.
            </p>
          </div>

          <nav aria-label='Navegação do rodapé'>
            <ul className='grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 text-sm n'>
              <li>
                <a className='transition hover:opacity-80 no-underline hover:underline' href='/Sections/Templates/Adv01'>Home</a>
              </li>
              <li> 
                <a className='transition hover:opacity-80 no-underline hover:underline' href='/Sections/Templates/Adv01/Services'>Serviços</a>
              </li>
              <li>
                <a className='transition hover:opacity-80 no-underline hover:underline' href='/Sections/Templates/Adv01/About'>Sobre</a>
              </li>
           
              <li>
                <a className='transition hover:opacity-80 no-underline hover:underline' href='/Sections/Templates/Adv01/Associados'>Associados</a>
              </li>
              <li>
                <a className='transition hover:opacity-80 no-underline hover:underline' href='/Sections/Templates/Adv01/Contato'>Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <div className='mx-auto max-w-6xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/70'>
            <p>
              Desenvolvido por <span className='font-bold'>mateuslima.dev</span>
            </p>
            <p>
            © {new Date().getFullYear()} Template Legality Advocacia. Todos os direitos reservados.
          </p>
          <div className='flex items-center gap-6'>
            <a className='transition font-black hover:opacity-80' href='https://api.whatsapp.com/send?phone=5519982668985'>Garantir Template</a>
        
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterAdv


