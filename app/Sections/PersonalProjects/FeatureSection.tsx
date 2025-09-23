"use client";

import React from "react";

import Image from "next/image";
import MobileProjectImg from "@/public/Features/FeatureMobile.png";

export const MobileProject = () => {
  return (
    <>
      <section className="flex justify-center itens-center">
        <div className="grid grid-cols 1 md:grid-cols-2 gap-2">
          <div>
            <Image
              src={MobileProjectImg}
              alt="header"
              className="rounded-md h-[300px] md:h-[400px] w-[350px] md:w-[550px] m-8 mr-4 md:ml-[100px] "
            />
          </div>


          <div>
        <h2 className="text-2xl font-semibold m-8 mt-12">
          {" "}
          Aplicativo SecretGarden
        </h2>
        <p className="m-8 md:w-[400px] md:text-[17px]">
          {" "}
          Uma forma de manter suas senhas do ambiente digital em único lugar de
          forma segura. Com as melhores práticas de Criptográfia <br /> <br />
          Menu interativo do qual é possível visualizar seu Jardim Secreto, suas
          Senhas e Anotações Seguras{" "}
        </p>
      </div>
        
        </div>
      </section>
  
    </>
  );
};
