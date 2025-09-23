import React from "react";
import BinaryBackground from "./BinaryBackground";
import Link from "next/link";

const HeroServices = () => {
  return (
    <div className="bg-[#0D0D0D] h-[950px]">
      <header className="mb-8 md:mb-12">
        <h1 className=" font-black uppercase text-white text-2xl md:text-3xl tracking-wide ml-2 pt-12 md:ml-[220px]">
          Serviços Prestados
        </h1>
      </header>
      <section className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 m-12 gap-8">
          <div className="relative md:h-[50vh] w-[35vh] md:sticky md:top-20 rounded-xl bg-black overflow-hidden border border-white/10">
            <BinaryBackground
              variant="local"
              opacity={0.12}
              speed={1}
              intensity={60}
              zIndexClass="-z-10"
            />
            <div className="relative z-10 p-6">
              <h1 className="bg-gradient-to-r from-green-500 via-emerald-800-500 to-green-800 text-transparent bg-clip-text inline-block  text-5xl font-bold uppercase ">Dev</h1>
              <p className="text-gray-200 mt-[100px] m-8 tracking-wider">
                Desenvolvimento completo de sites, sistemas e aplicativos com
                código limpo, organizado e escalável. Aplicamos as melhores
                práticas e recursos para garantir desempenho, segurança e
                sucesso do seu projeto.
              </p>
            </div>
          </div>
          <div className="relative md:h=[50vh] w-[35vh] md:sticky md:top-20 rounded-xl bg-black overflow-hidden border border-white/10">
            <BinaryBackground
              variant="local"
              opacity={0.12}
              speed={1}
              intensity={60}
              zIndexClass="-z-10"
            />
            <div className="relative z-10 p-6">
              <h1 className="bg-gradient-to-r from-green-500 via-emerald-800-500 to-green-800 text-transparent bg-clip-text inline-block text-5xl font-bold uppercase">
                Design
              </h1>
              <p className="text-gray-200 mt-[100px] m-8 tracking-wider">
                Design moderno e funcional: criação de interfaces, landing pages
                e conteúdos visuais para redes sociais. Fortaleça sua presença
                digital e dê mais identidade à sua marca
              </p>
            </div>
          </div>
          <div className="relative md:h-[50vh] w-[35vh] md:sticky md:top-20 rounded-xl bg-black overflow-hidden border border-white/10">
            <BinaryBackground
              variant="local"
              opacity={0.12}
              speed={1}
              intensity={60}
              zIndexClass="-z-10"
            />
            <div className="relative z-10 p-6">
              <h1 className="bg-gradient-to-r from-green-500 via-emerald-800-500 to-green-800 text-transparent bg-clip-text inline-block  text-5xl font-bold uppercase">
                TEMPLATES
              </h1>
              <p className="text-gray-200 mt-[100px] m-8 tracking-wider">
                Biblioteca de templates profissionais para diferentes nichos.
                Sites completos, totalmente personalizáveis e prontos para se
                adaptar à identidade da sua marca.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center gap-8 pt-8">
        <Link
          href="https://api.whatsapp.com/send?phone=5519982668985"
          className="px-3 py-3 bg-white text-black rounded-md"
        >
          Entrar em Contato
        </Link>

        <Link href="#" className="px-3 py-3 bg-black text-white rounded-md">
          {" "}
          Adquirir Templates
        </Link>
      </div>
    </div>
  );
};

export default HeroServices;
