"use client";

import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quanto custa para fazer um site com você?",
    answer:
      "O valor varia de acordo com a complexidade. Sites em Wix começam a partir de R$750, e sites profissionais com Next.js vão de R$1.200 até R$2.500, dependendo das funcionalidades desejadas.",
  },
  {
    question: "Qual a diferença entre um site em Wix e um com Next.js?",
    answer:
      "Wix é ideal para sites simples, rápidos e acessíveis. Next.js é mais profissional e permite maior personalização, performance e SEO técnico, ideal para empresas ou projetos maiores.",
  },
  {
    question: "O que está incluso no pacote de site?",
    answer:
      "Design responsivo, Formulário de contato ,Integração com WhatsApp, SEO básico, [Hospedagem e domínio não estão inclusos (mas posso orientar ou contratar à parte)]",
  },
  {
    question: "Você faz manutenção ou atualizações depois do site entregue?",
    answer: "Sim, ofereço pacotes de manutenção mensal ou por demanda.",
  },
];

function CodePrices() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-black h-[800px] overflow-visible">
      <h1 className="text-white font-bold uppercase text-[50px] md:text-[90px] ml-4 pt-6 md:ml-28">
        Prices
      </h1>

      <div>
        <section className="max-w-3xl mx-auto py-16 px-4">
          <h2 className="text-3xl  text-white font-bold text-center mb-10">
            Web Developer
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border bg-white text-black border-gray-200 rounded-2xl p-4 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="mt-3 text-gray-600 transition-all duration-300">
                    {faq.answer} <br /> <br />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CodePrices;
