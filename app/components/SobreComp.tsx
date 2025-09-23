"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin, ScrollTrigger } from "gsap/all";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Me from "@/app/public/Me/mepic03.jpg";
import FrameWorks from "./FrameWorks";

import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({
  subsets: ["latin"],
});

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function SobreComp() {
  useGSAP(() => {
    gsap.to(".sobretext", {
      scrollTrigger: {
        trigger: ".sobretext",
      },
      delay: 1,
      duration: 1,
      text: "Sobre",
      color: "#000",
    });
  });

  return (
    <div className={noto.className}>
      <main className=" h-full w-auto  ">
        <h1
          className=" sobretext uppercase font-bold p-20 text-red-600
               text-center text-4xl "
        >
          {" "}
          About me{" "}
        </h1>
        <div>
          <div className="flex justify-center items-center">
            <Card className="hover:bg-[#f7f7f7] border-none">
              <CardHeader className="w-auto md:w-[800px]">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-40 mt-6">
                  <Image
                    src={Me}
                    alt="Trabalho"
                    className="h-auto w-auto max-w-[350px] max-h-[250px]"
                  />
                  <div>
                    <h1>
                      {" "}
                      Trabalho com desenvolvimento web há mais de três anos, o
                      que me proporcionou a realização de grandes desafios e
                      contribuiu para minha evolução como desenvolvedor. Crio
                      sites corporativos utilizando as tecnologias mais modernas
                      do mercado, garantindo qualidade e um código limpo,
                      aumentando assim a visibilidade dos meus clientes e suas
                      vendas.
                    </h1>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div>
            <h1 className="text-center font-bold text-[20px] mt-12">
              {" "}
              Minhas Habilidades
            </h1>
            <FrameWorks />
          </div>
        </div>
      </main>
    </div>
  );
}

export default SobreComp;
