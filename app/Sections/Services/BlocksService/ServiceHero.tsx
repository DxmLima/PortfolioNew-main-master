"use client"
import React, { useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

type Slide = {
  id: string
  title: string
  lines: string[]
}

const slidesData: Slide[] = [
  {
    id: 'code',
    title: 'CODE',
    lines: [
      'init> compiling modules... OK',
      'build> tree-shaking, minify, bundle',
      'deploy> zero-downtime, edge-ready',
      'stack> Next.js / React / Node / Tailwind',
    ],
  },
  {
    id: 'design',
    title: 'DESIGN',
    lines: [
      'ui> grids, rhythm, hierarchy',
      'ux> flows, clarity, motion',
      'brand> identity, color, typography',
      'export> responsive, accessible, fast',
    ],
  },
  {
    id: 'templates',
    title: 'TEMPLATES',
    lines: [
      'store> ready-to-ship sites',
      'types> landing, portfolio, blog',
      'extras> SEO, analytics, CMS',
      'buy> fast delivery, support included',
    ],
  },
]

const Cursor: React.FC<{ active?: boolean }> = ({ active = true }) => {
  return (
    <span className={`ml-1 inline-block h-[1.1em] w-[0.55ch] align-middle bg-[#00ff88] ${active ? 'animate-blink' : ''}`} />
  )
}

const ServiceHero: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y', loop: true, duration: 22 })
  const [activeIndex, setActiveIndex] = useState(0)

  // Atualiza estado quando o carrossel muda
  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi])

  // Handler para sidebar
  const handleSidebarClick = (index: number) => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
  }

  return (
    <section className="relative mx-auto w-full p-8 bg-black py-16 ">
      <div className="relative overflow-hidden rounded-lg border border-[#00ff88]/40 bg-black shadow-[0_0_0_1px_#003b24_inset,0_0_32px_#00ff8840]">
        {/* Header estilo terminal */}
        <div className="flex items-center justify-between border-b border-[#00ff88]/30 bg-[#00170d] px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff3b30]" />
            <span className="h-3 w-3 rounded-full bg-[#ffcc00]" />
            <span className="h-3 w-3 rounded-full bg-[#28cd41]" />
          </div>
          <p className="select-none font-mono text-xs uppercase tracking-widest text-[#00ff88]">Services.exe</p>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-[280px_1fr]">   
          {/* Sidebar */}
          <aside className="hidden h-[70vh] border-r border-[#00ff88]/20 bg-[#00140c] p-4 md:block">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#00ff88]/80">index</p>
         
          </aside>

          {/* Conteúdo principal */}
          <div className="relative">
            <div className="h-[70vh] overflow-hidden" ref={emblaRef}>
              <div className="flex h-full flex-col">
                {slidesData.map((slide) => (
                  <div key={slide.id} className="min-h-0 flex-1">
                    <div className="flex h-full flex-col gap-6 p-6 md:p-10">
                     
                      <div className="font-mono text-sm text-[#00ff88]/80 md:text-base">
                        {slide.lines.map((ln, idx) => (
                          <p key={idx} className="leading-7">
                            <span className="text-[#00ff88]">$</span> {ln}
                          </p>
                        ))}
                      </div>

                      <div className="mt-auto grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="rounded border border-[#00ff88]/30 bg-[#001a10] p-4">
                          <p className="font-mono text-xs uppercase tracking-widest text-[#00ff88]/80">latency</p>
                          <p className="font-mono text-2xl text-[#00ff88]">~30ms</p>
                        </div>
                        <div className="rounded border border-[#00ff88]/30 bg-[#001a10] p-4">
                          <p className="font-mono text-xs uppercase tracking-widest text-[#00ff88]/80">rating</p>
                          <p className="font-mono text-2xl text-[#00ff88]">★★★★★</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll hints */}
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0">
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-blink { animation: blink 1s steps(2, start) infinite; }
        @keyframes blink { to { visibility: hidden; } }
      `}</style>
    </section>
  )
}

export default ServiceHero
