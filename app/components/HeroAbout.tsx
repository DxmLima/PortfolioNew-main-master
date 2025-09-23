import React from 'react'

const HeroAbout = () => {
  return (
    <div className='bg-white h-[700px] '>
                <header className="mb-8 md:mb-12">
        <h1 className="text-black font-black uppercase text-5xl md:text-3xl tracking-wide ml-2 pt-12 md:ml-[220px]">
          Sobre mim
        </h1>
      </header>

      <div>
         
      <section className="flex justify-center items-center p-6  ">
        <div className="w-full max-w-5xl rounded-lg border w-[700px] border-neutral-800 bg-black/80 shadow-2xl backdrop-blur">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/80 rounded-t-lg">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <div className="ml-3 text-xs text-neutral-400 select-none">mateus@portfolio: ~</div>
          </div>

          {/* Terminal body */}
          <div className="relative px-6 py-8 md:px-10 md:py-10">
            {/* subtle scanlines */}
            <div className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(transparent_0px,transparent_2px,rgba(255,255,255,0.02)_3px,transparent_4px)] rounded-b-lg"></div>

            <div className="relative space-y-6 font-mono">
         

              <div className="text-neutral-100">
               
                <div className="mt-4 text-sm md:text-lg text-neutral-300 leading-7">
                  User: <span className="text-white">Mateus Lima</span><br />
                  Role: <span className="text-white">FullStack Developer & Designer</span><br />
                  Location: <span className="text-white">Earth [PT-BR]</span><br />
                  Text: <span className="text-green-400">Desenvolvedor de Software desde 2019, atuando como Freelancer, criando sites corporativos incríveis, destacando os propósitos dos meus clientes.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default HeroAbout