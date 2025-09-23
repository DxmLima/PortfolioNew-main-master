"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Globe } from "lucide-react"; // Importando os ícones
import Image from "next/image"
import Logo from "@/public/Template/Adv01/Logo.png";
import {  Montserrat } from 'next/font/google'

const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})




export default function NavbarAdv01() {
  const [state, setState] = React.useState(false);

  const firstMenus = [
    { title: "Home", path: "/Sections/Templates/Adv01" },
    { title: "Serviços", path: "/Sections/Templates/Adv01/Services" },
    { title: "Sobre", path: "/Sections/Templates/Adv01/About" },
    { title: "Associados", path: "/Sections/Templates/Adv01/Associados" },
    
   
  ];

  return (
    <main className={mont.className}>
      <nav className="flex py-3 justify-center items-center bg-white border-b border-solid border-[#071629]  ">
      <Link href='/Sections/Templates/Adv01'>
        <Image
          className="absolute ml-60 pb-12  hidden lg:block"
          src={Logo}
          alt="Logo"
          height={30}
        ></Image>
      </Link>
      <div className="px-4 max-w-screen-xl mx-auto md:flex md:px-8 w-full">
        <div className="flex items-center py-3 md:py-5 w-full relative">
          {/* Center - Navigation links with absolute positioning */}
          <div className="hidden md:flex md:space-x-6 absolute mt-8 left-1/2 transform -translate-x-1/2">
            {firstMenus.map((item, idx) => (
              <Link
                target=""
                key={idx}
                href={item.path}
                className="text-black hover:text-blue-800  tracking-wide gap-4 uppercase font-medium hover:font-semibold text-[14px]  "
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Right side - Dropdown Menu and Mobile button */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Link de Contato (desktop) */}
            <Link
              href="/Sections/Templates/Adv01/Contato"
              className="hidden md:inline-block mt-8 bg-[#071629] hover:bg-blue-800 text-white px-3 py-3 rounded-sm tracking-wide hover:text-white uppercase font-medium  text-[14px]"
            >
              Contato
            </Link>
            {/* Botão de menu no mobile */}
            <div className="md:hidden">
              <button
                className="text-black outline-none p-2 rounded-md focus:border-gray-300 focus:border"
                onClick={() => setState(!state)}
              >
                <Menu />
              </button>
            </div>

          
          </div>
        </div>

        {/* Menu colapsado no mobile */}
        <div
          className={`md:hidden flex-1 justify-self-center pb-3 mt-8 md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-8">
            {firstMenus.map((item, idx) => (
              <li
                key={idx}
                className="text-black font-medium text-[18px] hover:text-red-600"
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            {/* Contato extra no mobile */}
            <li className="text-black font-medium text-[18px] hover:text-red-600">
              <Link href="/Sections/Templates/Adv01/Contato">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </main>
  );
}
