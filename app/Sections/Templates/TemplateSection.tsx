import { TemplatesAwareHover } from '@/app/components/ui/direction-aware-hover'
import React from 'react'

const TemplateSection = () => {
  return (
    <div className='mb-12'>
     <main className='flex justify-center items-center bg-[#F9F4EB] h-[550px]  md:h-[450px]'>
      <div className='flex justify-center items-center'>
        <h1 className='text-6xl font-bold uppercase text-center'>Templates</h1>
      </div>
     </main>

     <div>
      <h1 className='text-3xl font-bold p-12'> Templates Advocacia</h1>
         <div className='flex justify-center items-center mt-12'>
         <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-[1200px] gap-12'>
          <TemplatesAwareHover imageUrl='https://images.unsplash.com/photo-1526572728358-228f6b8ca29b?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
            <div className='flex flex-col gap-3'>
              <span className='text-lg font-semibold'>Template Advocacia</span>
              <button className='px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition'>
                Conferir Template
              </button>
            </div>
          </TemplatesAwareHover>
          <TemplatesAwareHover imageUrl='https://images.unsplash.com/photo-1526572728358-228f6b8ca29b?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
            <div className='flex flex-col gap-3'>
              <span className='text-lg font-semibold'>Template Advocacia</span>
              <button className='px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition'>
                Conferir Template
              </button>
            </div>
          </TemplatesAwareHover>
          <TemplatesAwareHover imageUrl='https://images.unsplash.com/photo-1526572728358-228f6b8ca29b?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
            <div className='flex flex-col gap-3'>
              <span className='text-lg font-semibold'>Template Advocacia</span>
              <button className='px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition'>
                Conferir Template
              </button>
            </div>
          </TemplatesAwareHover>
         </section> 
         </div>
     </div>
    </div>
  )
}

export default TemplateSection