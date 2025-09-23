"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Instagram, Github, Linkedin, Phone } from "lucide-react"; // Importando os ícones
import Image from "next/image";
import Logo from "@/public/Logo.svg";
export default function NavbarWhite() {
  const [state, setState] = React.useState(false);

  const firstMenus = [
    { title: "Select Works", path: "/Sections/SelectedWorks" },
    { title: "About Me", path: "/Sobre" },
  ];

  return (
    <nav className=" flex justify-center items-center bg-white border-b border-red-600 md:border-0">
      <Link href="/">
        <Image
          className="absolute ml-60 mb-32 hidden lg:block"
          src={Logo}
          alt="Logo"
          height={30}
        ></Image>
      </Link>
      <div className=" px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center  py-3 md:py-5 w-full">
          {/* Links do início */}
          <div className="hidden md:flex md:space-x-6">
            {firstMenus.map((item, idx) => (
              <Link
                target=""
                key={idx}
                href={item.path}
                className="text-black  tracking-wide gap-4 hover:text-red-600 uppercase font-semibold text-[12px]  "
              >
                {item.title}
              </Link>
            ))}
          </div>

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
          </ul>
        </div>
      </div>
    </nav>
  );
}
