import React from 'react'

const Marketing = () => {
  return (
    <div className='bg-gradient-to-r from-white via-[#f3f3f3] to-[#fefefe] py-16 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#0b1215] mb-4'>
            Template <span className='text-[#071629]'>Legality</span> Advocacia
          </h1>
          <p className='text-xl text-black mb-8 max-w-3xl mx-auto'>
            Eleve seu escritório de advocacia com um template profissional e moderno
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
            <div className='w-12 h-12 bg-[#071629] rounded-lg flex items-center justify-center mb-4'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-black mb-2'>Design Profissional</h3>
            <p className='text-[#222]'>Interface moderna e elegante que transmite confiança e credibilidade</p>
          </div>

          <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
            <div className='w-12 h-12 bg-[#071629] rounded-lg flex items-center justify-center mb-4'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-black mb-2'>Totalmente Responsivo</h3>
            <p className='text-[#222]'>Funciona perfeitamente em todos os dispositivos e tamanhos de tela</p>
          </div>

          <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'>
            <div className='w-12 h-12 bg-[#071629] rounded-lg flex items-center justify-center mb-4'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-black mb-2'>Fácil Personalização</h3>
            <p className='text-[#222]'>Código limpo e documentado para facilitar customizações</p>
          </div>
        </div>

        <div className='text-center'>
          <div className='bg-gradient-to-r from-[#071629] to-[#07182e] rounded-xl p-8 mb-8'>
            <h2 className='text-2xl font-bold text-white mb-4'>
              Pronto para impressionar seus clientes?
            </h2>
            <p className='text-blue-100 mb-6 text-lg'>
              Template desenvolvido especialmente para advogados e escritórios de advocacia. 
              Fortaleça sua presença online e conquiste mais clientes.
            </p>
            <a 
              href='https://api.whatsapp.com/send?phone=5519982668985' 
              target='_blank' 
              rel='noopener noreferrer'
              className='inline-flex items-center px-8 py-4 bg-white text-[#3b82f6] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg'
            >
              <span>Garantir meu template</span>
              <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
              </svg>
            </a>
          </div>
          
          <p className='text-gray-400 text-sm'>
            Desenvolvido por <span className='text-[#3b82f6] font-semibold'>Mateus Lima</span> - Desenvolvedor Frontend
          </p>
        </div>
      </div>
    </div>
  )
}

export default Marketing