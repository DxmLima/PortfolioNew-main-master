
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SvgIcon from '@/public/Template/Icon.svg'
function HeroTemplate() {
  return (
    <div className="bg-BgTemplates h-[800px] w-full bg-cover">
      <section className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <h1 className="text-black font-semibold text-6xl  tracking-wider w-[850px] ml-60 pt-[250px]">
                Acelere Seu <br /> Crescimento com um <br />
                <span className="text-red-600">Site Profissional</span>
                <p className="text-[20px] font-light mt-8 tracking-wide w-[650px]">
                    Tenha um site profissional, responsivo e otimizado para atrair mais
                    clientes e aumentar suas vendas. Templates 
                    personalizáveis e feitos para converter visitantes em
                    clientes fiéis. Escolha o seu e comece agora mesmo!
                </p>
                </h1>
                <div className=" ml-[240px] mt-10 flex gap-8">
                    <Link href='#' className="text-white font-bold bg-red-600 px-3 py-3">Explorar Templates</Link>
                    <Link href='#' className="text-black font-bold bg-none border-2 border-red-600 px-3 py-3">Entrar em Contato</Link>
                </div>
            
            </div>


            <div>
                <Image
                className="mt-32 ml-12"
                src={SvgIcon}
                height={500}
                width={500}
                alt="Icon"
                >

                </Image>
            </div>
      </section>
    </div>
  );
}

export default HeroTemplate;
