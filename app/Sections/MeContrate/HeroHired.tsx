import Image from "next/image";
import React from "react";
import ProfileImg from "@/public/HireMe/HireMe.png";
import Link from "next/link";

const HeroHired = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="Image m-20">
            <Image
              src={ProfileImg}
              alt="Profile-Img"
              width={300}
              className="rounded-md"
            />
          </div>

          <div className="mt-20 m-4  tracking-wider">
            <h1 className="text-3xl font-bold text-rose-800"> Me Contrate !</h1>
            <h2 className="w-[500px] mt-4">
              <span className="font-semibold text-indigo-500 mt-4 mb-4">
                {" "}
                💻 Sou Desenvolvedor Full-Stack
              </span>{" "}
              <br />
            </h2>

            <p className="   w-[420px] mt-4 text-[15px] md:text-[17px]">
              {" "}
              Atualmente atuo como freelancer no desenvolvimento de sites
              responsivos, personalizados e de alto desempenho.
            </p>

            <p className="w-[410px] md:w-[450px] mt-4 text-[15px] md:text-[17px]">
              {" "}
              Tenho experiência na criação de{" "}
              <span className="font-semibold text-indigo-500">
                sites corporativos, pessoais e lojas virtuais (E-commerce){" "}
              </span>
              , sempre com foco em performance, usabilidade e design moderno.{" "}
              <br />
            </p>

            <p className="mt-4  w-[400px] text-[15px] md:text-[17px]">
              Se você procura um profissional que aprende rápido, gosta de
              desafios e entrega soluções sob medida, posso ajudar a transformar
              seu projeto em realidade.
            </p>

            {/* Links Buttons */}
            <div className="mt-12 mb-20 flex gap-10">
              <Link
                className="px-5 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md"
                href="https://api.whatsapp.com/send?phone=5519982668985" target="_blank"
              >
                Contato
              </Link>

              <Link
                className="px-5 py-3 bg-rose-700 hover:bg-rose-800 text-white rounded-md"
                href="/CVMathDev.pdf" download target="_blank"
              >
                Baixar CV{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHired;
