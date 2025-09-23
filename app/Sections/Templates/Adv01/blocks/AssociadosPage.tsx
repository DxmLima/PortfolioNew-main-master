import Image from "next/image";
import React from "react";
import Pro01 from "@/public/Template/Adv01/Team/nussbaum-law-1qJPdNWQSC8-unsplash.jpg";
import Pro02 from "@/public/Template/Adv01/Team/nussbaum-law-ea3STzN7Lw8-unsplash.jpg";
import Pro03 from "@/public/Template/Adv01/Team/nussbaum-law-T4w6f2JrnAM-unsplash.jpg";
import Pro04 from "@/public/Template/Adv01/Team/nussbaum-law-xJNnd1CjQoM-unsplash.jpg";

import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const mont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const AssociadosPage = () => {
  return (
    <div className={mont.className}>
      <section className="relative bg-[#071629] py-24 md:py-32">
        <main>
          <div className="mb-16 ml-8 md:ml-[280px]">
            <h2 className="text-2xl  md:text-4xl font-light leading-tight tracking-tight text-white mb-4">
              Profissionais
            </h2>
            <div className="w-16 h-px bg-white"></div>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-4 ">
              {[
                { img: Pro01, name: "Eduardo Maluf" },
                { img: Pro02, name: "Roberta Duartte" },
                { img: Pro03, name: "Diantonos S.P" },
                { img: Pro04, name: "Elisa Karami" },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-60 h-60 md:w-64 md:h-64 rounded-md overflow-hidden shadow-md">
                    <Image
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm md:text-base text-gray-50 font-semibold tracking-wide">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="pt-12 ml-3 ">
              <Link
                href="/Sections/Templates/Adv01/Associados"
                className="inline-flex items-center justify-center rounded-lg bg-gray-100 px-5 py-3  font-medium text-black hover:text-black transition hover:bg-white dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 text-[15px] "
              >
                {" "}
                Conhecer Associados
              </Link>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default AssociadosPage;
