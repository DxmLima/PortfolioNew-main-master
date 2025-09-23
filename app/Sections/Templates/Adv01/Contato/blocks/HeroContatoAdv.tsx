'use client'
import React from 'react'
import { Sura } from 'next/font/google'
import { cn } from '@/lib/utils'

const sura = Sura({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const HeroContatoAdv = () => {
  return (
    <section className="bg-white text-black mb-[100px] h-[600px]">
      <main className="flex justify-center items-center mt-20 md:mt-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 gap-12 w-full">
          {/* Texto */}
          <div className="order-2 md:order-1">
            <h1 className={cn(sura.className, 'text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-black')}>
              Fale com a Legality Advocacia
            </h1>
            <p className="text-neutral-700 max-w-xl leading-relaxed mt-4">
              Atuamos em litígios e consultoria para casos comerciais complexos. Resposta ágil, estratégia clara e execução precisa.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="https://api.whatsapp.com/send?phone=5519982668985" target='_blank' className="inline-flex items-center justify-center rounded-lg bg-black text-white px-6 py-4 text-sm font-medium shadow-lg transition hover:scale-[1.02] hover:shadow-xl dark:bg-white dark:text-black">
                Enviar mensagem
              </a>
              <a href="mailto:contact@layerfirm.com" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-medium rounded-lg transition-all duration-200">
              contato@advocacia.com.br
              </a>
            </div>
          </div>

          {/* Card de Contato + Formulário */}
          <div className="order-1 md:order-2">
            <div className="border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm bg-white">
              <div className="flex items-center justify-between text-xs tracking-wider uppercase">
                <span className="font-medium">Informações</span>
                <span className="text-neutral-500">Retorno em até 24h</span>
              </div>

              <div className="mt-6 space-y-5 text-sm">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-neutral-600">Telefone</span>
                  <a href="tel:+12125550123" className="font-medium underline decoration-gray-300 underline-offset-4 hover:decoration-gray-700">
                  (11) 99999-9999
                  </a>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <span className="text-neutral-600">E-mail</span>
                  <a href="mailto:contact@layerfirm.com" className="font-medium underline decoration-gray-300 underline-offset-4 hover:decoration-gray-700">
                  contato@advocacia.com.br
                  </a>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <span className="text-neutral-600">Endereço</span>
                  <span className="max-w-[12rem] text-right font-medium">
                  Avenida Brasil, 123
                    <br /> São Paulo - SP
                  </span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <span className="text-neutral-600">Horário</span>
                  <span className="text-right font-medium">Seg–Sex, 8:00–18:00 (ET)</span>
                </div>
              </div>

      
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default HeroContatoAdv


