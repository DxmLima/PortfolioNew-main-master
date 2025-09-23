import React from 'react'

const MiniBanner = () => {
  return (
    <div className='bg-gradient-to-r from-[#071629] to-[#07182e] py-3 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center'>
              <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <div>
              <h3 className='text-white font-semibold text-sm sm:text-base'>
                Template <span className='text-blue-300'>Legality</span> Advocacia
              </h3>
              <p className='text-gray-300 text-xs sm:text-sm'>
                Design profissional para escritórios de advocacia
              </p>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='hidden sm:flex items-center gap-4 text-xs text-gray-300'>
              <span className='flex items-center gap-1'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
                Responsivo
              </span>
              <span className='flex items-center gap-1'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
                Personalizável
              </span>
            </div>
            
            <a 
              href='https://api.whatsapp.com/send?phone=5519982668985' 
              target='_blank' 
              rel='noopener noreferrer'
              className='inline-flex items-center px-4 py-2 bg-white text-[#071629] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm'
            >
              <span>Garantir</span>
              <svg className='w-4 h-4 ml-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniBanner
