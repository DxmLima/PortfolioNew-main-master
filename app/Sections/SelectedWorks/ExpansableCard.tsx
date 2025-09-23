"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Img01 from "../../../public/Demos/AutoPlacas.png";
import Img02 from "../../../public/Demos/ElianaN.png";
import Img03 from "../../../public/Demos/Ansiedade.png";
import Img04 from "../../../public/Demos/Portal.png";
import type { StaticImageData } from "next/image";

interface Card {
  title: string;
  description: string;
  src: StaticImageData;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
}

export function ExpandableCardDemo() {
  const [active, setActive] = useState<Card | null>(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: { key: string }) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center  z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-[#DB7B65] text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4 border-2 border-gray-100 p-12 rounded-sm">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-[#F9F4EB] dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-[#DB7B65] hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards: Card[] = [
  {
    description: "Website",
    title: "Autoplacas.net",
    src: Img01,
    ctaText: "Play",
    ctaLink: "https://autoplacas.net",
    content: () => {
      return (
        <p>
          Responsável pela reformulação completa do website da empresa
          Autoplacas, com foco na modernização do design e na melhoria da
          experiência do usuário. O projeto incluiu a implementação de
          funcionalidades avançadas, como sistema de busca por lojas, seções de
          produtos com preços atualizados, área de FAQ para atendimento de
          dúvidas frequentes e filtro com autocomplete para localização de lojas
          com base na cidade informada pelo cliente.
        </p>
      );
    },
  },
  {
    description: "Website",
    title: "Eliana Nakakubo",
    src: Img02,
    ctaText: "Play",
    ctaLink: "https://eliananakakubo.com.br",
    content: () => {
      return (
        <p>
          Desenvolvimento completo do website da Eliana Nakakubo, da agência
          Bella Toyo, com aplicação de conceitos de design visualmente atrativos
          e estratégicos, voltados para destacar a presença da marca nas redes
          sociais, apresentar projetos recentes e reforçar a identidade de uma
          agência especializada em Marketing. O site também conta com seções
          para feedbacks de clientes, portfólio de trabalhos realizados e
          conteúdos que refletem as boas práticas adotadas pela empresa
        </p>
      );
    },
  },

  {
    description: "Website",
    title: "Ansiedade.com.br",
    src: Img03,
    ctaText: "Play",
    ctaLink: "https://ansiedade.com.br",
    content: () => {
      return (
        <p>
          Criação de um novo design e desenvolvimento completo do website do Dr.
          Isaac Efraim, palestrante da Record TV. O projeto foi guiado por boas
          práticas de usabilidade e comunicação, com o objetivo de informar e
          transmitir conteúdos sobre psicologia e saúde mental. O design limpo,
          sereno e acolhedor foi cuidadosamente planejado para refletir a
          personalidade do Dr. Isaac, transmitindo confiança e empatia. Todo o
          conceito visual foi desenvolvido com base nesses valores
        </p>
      );
    },
  },
  {
    description: "Website",
    title: "Portal dos Neurodivergentes",
    src: Img04,
    ctaText: "Play",
    ctaLink: "https://portaldosneurodivergentes.com.br",
    content: () => {
      return (
        <p>
          Desenvolvimento completo de um portal de notícias voltado para temas
          relacionados à neurodivergência, com estrutura robusta e
          funcionalidades administrativas. O projeto incluiu áreas de
          gerenciamento de conteúdo, sistema de publicação e edição de matérias,
          além de integração de métricas para acompanhamento de desempenho. O
          objetivo principal foi viabilizar a divulgação contínua de informações
          relevantes sobre neurodivergência, promovendo conscientização e
          acessibilidade ao público-alvo.
        </p>
      );
    },
  },
];
