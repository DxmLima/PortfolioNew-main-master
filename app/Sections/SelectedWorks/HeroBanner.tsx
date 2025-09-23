"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

type ProjectItem = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  link?: string;
};

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Once visible, we can unobserve to avoid re-renders
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15, ...options }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView } as const;
}

const projectsSeed: ProjectItem[] = [
  {
    id: "autoplacas",
    title: "AutoPlacas.net",
    subtitle: "E-commerce de placas veiculares",
    imageSrc: "/Demos/AutoPlacasCard.png",
    link: 'www.autoplacas.net'
  },
  {
    id: "ansiedade-solucoes",
    title: "Ansiedade Soluções",
    subtitle: "Galeria e detalhes de produtos",
    imageSrc: "/Demos/AnsiedadesCard.png",
    link: 'www.ansiedadesoluções.com.br'
  },
  {
    id: "eliana-nakakubo",
    title: "Eliana Nakakubo",
    subtitle: "Portfólio de Agência",
    imageSrc: "/Demos/BellaToyoCard.png",
    link: 'www.eliananakakubo.com.br'
  },

  {
    id: "ansiedade.com",
    title: "Ansiedade.com",
    subtitle: "Portfólio de Agência",
    imageSrc: "/Demos/IssacEfraimCard.png",
    link: 'www.ansiedade.com.br'
  },

  {
    id: "portalneuro",
    title: "Portal Neurodivergentes",
    subtitle: "Portfólio de Agência",
    imageSrc: "/Demos/PortalNeuroCard.png",
    link: 'www.portaldosneurodivergentes.com.br'
  },

];

const HeroBanner = () => {
  const projects = useMemo(() => projectsSeed, []);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="px-4 md:px-8 bg-black">
      <div className="w-full max-w-6xl mx-auto py-12 md:py-20">
        <header className="mb-8 md:mb-12">
          <h1 className="text-white font-black uppercase text-2xl md:text-3xl tracking-wide">
            Selecione Projetos
          </h1>
       
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Left: scrollable list with reveal-on-scroll */}
          <div className="space-y-4 md:space-y-6">
            {projects.map((item, index) => (
              <RevealRow
                key={item.id}
                index={index}
                title={item.title}
                subtitle={item.subtitle}
                link={item.link}
                onHover={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                isActive={activeIndex === index}
              />
            ))}
            {/* Add spacer so we can scroll past sticky preview */}
            <div className="h-32" />
          </div>

          {/* Right: sticky preview that changes on hover */}
          <div className="relative md:h-[70vh] md:sticky md:top-20 rounded-xl overflow-hidden border border-white/10 bg-white/5">
            {projects.map((item, index) => (
              <picture
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Using img for simplicity; Next/Image optional */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </picture>
            ))}

            {/* Caption overlay */}
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
              <div className="text-white">
                <div className="text-sm uppercase tracking-wider text-white/70">Prévia</div>
                <div className="font-semibold text-lg md:text-xl">{projects[activeIndex]?.title}</div>
                <div className="text-white/70 text-sm">{projects[activeIndex]?.subtitle}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function RevealRow({
  index,
  title,
  subtitle,
  link,
  onHover,
  onFocus,
  isActive,
}: {
  index: number;
  title: string;
  subtitle: string;
  link?: string;
  onHover: () => void;
  onFocus: () => void;
  isActive: boolean;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const href = link ? (link.startsWith("http") ? link : `https://${link}`) : undefined;

  return (
    <div
      ref={ref}
      className={`group rounded-xl border border-white/10 bg-white/5 p-4 md:p-5 transition-all duration-500 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${isActive ? "ring-1 ring-white/40" : "hover:bg-white/10"}`}
      onMouseEnter={onHover}
      onFocus={onFocus}
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      onClick={() => {
        if (href) window.open(href, "_blank", "noopener,noreferrer");
      }}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && href) {
          e.preventDefault();
          window.open(href, "_blank", "noopener,noreferrer");
        }
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-white font-semibold tracking-wide">{title}</div>
          <div className="text-white/60 text-sm">{subtitle}</div>
        </div>
        <span
          className={`mt-1 inline-flex h-2 w-2 rounded-full ${
            isActive ? "bg-white" : "bg-white/30 group-hover:bg-white/60"
          }`}
        />
      </div>
    </div>
  );
}

export default HeroBanner;
