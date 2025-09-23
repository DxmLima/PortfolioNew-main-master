"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import Profile from "@/public/FastLinks/profile.jpg";
import Link from "next/link";

export function BackgroundEffect() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center mb-[80px]  px-4"
      >
        <div>
          <Image
            src={Profile}
            width={300}
            alt="ProfileImg"
            className="rounded-md mt-20 "
          />
        </div>

        <div>
          <ol className="mt-8">
            <li className="py-3">
              <Link
                href={"https://whatsa.me/5519982668985"}
                className="w-40 h-12 flex items-center justify-center font-bold border-2 border-black dark:border-white uppercase bg-white  text-black hover:text-indigo-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
              >
                Contato
              </Link>
            </li>
            <li className="py-3">
              <Link
                href={`https://www.mateuslima.dev/`}
                className="w-40 h-12 flex items-center justify-center font-bold border-2 border-black dark:border-white uppercase bg-white text-black hover:text-indigo-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
              >
                Portfólio
              </Link>
            </li>
            <li className="py-3">
              <button className="w-40 h-12 flex items-center justify-center font-bold border-2 border-black dark:border-white uppercase bg-white text-black  hover:text-indigo-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                Baixar CV
              </button>
            </li>
            <li className="py-3">
              <Link
                href={`https://www.linkedin.com/in/devmateuslima/`}
                className="w-40 h-12 flex items-center justify-center font-bold border-2 border-black dark:border-white uppercase bg-white text-black  hover:text-indigo-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
              >
                Linkedin
              </Link>
            </li>
            <li className="py-3">
              <Link
                href={`https://www.instagram.com/mateuslima.dev/`}
                className="w-40 h-12 flex items-center justify-center font-bold border-2 border-black dark:border-white uppercase bg-white text-black  hover:text-indigo-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
              >
                Instagram
              </Link>
            </li>
          </ol>
        </div>
        <div className="mt-8 font-bold text-indigo-700">
          <Link href="https://www.mateuslima.dev/">www.mateuslima.dev</Link>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
