"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Globe } from "lucide-react"; // Importando os ícones
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { US } from "country-flag-icons/react/3x2";
import { BR } from "country-flag-icons/react/3x2";
import { Archivo_Narrow} from "next/font/google";

const arch = Archivo_Narrow({
  subsets: ["latin"],
});





export default function Navbar() {
  const [state, setState] = React.useState(false);

  const firstMenus = [
    { title: "[HOME]", path: "/" },
    { title: "[SOBRE]", path: "/Sections/About" },
    { title: "[PROJETOS]", path: "/Sections/SelectedWorks" },
    { title: "[SERVIÇOS]", path: "/Sections/Services" },
    { title: "[TEMPLATES]", path: "/Sections/Services" },
    { title: "[CONTATO]", path: "/Sections/Services" },
   
  ];

  return (
    <div className={arch.className}>
      <nav className="flex justify-center items-center bg-[#0A0A0A] border-b border-neutral-800">
 
      <div className="px-4 max-w-screen-xl mx-auto md:flex md:px-8 w-full">
        <div className="flex items-center py-3 md:py-5 w-full relative">
          {/* Center - Navigation links with absolute positioning */}
          <div className="hidden md:flex md:space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {firstMenus.map((item, idx) => (
              <Link
                target=""
                key={idx}
                href={item.path}
                className="text-neutral-300 tracking-wide gap-4 hover:text-white uppercase font-black text-[14px]"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Right side - Dropdown Menu and Mobile button */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Botão de menu no mobile */}
            <div className="md:hidden">
              <button
                className="text-neutral-300 outline-none p-2 rounded-md focus:border-neutral-700 focus:border"
                onClick={() => setState(!state)}
              >
                <Menu />
              </button>
            </div>

            {/* Dropdown Menu - Posicionado à direita */}
            <div className="hidden md:block">
              <div className="flex gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-neutral-300 hover:text-white">
                    <Globe />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px] border-neutral-800 bg-neutral-900 text-neutral-200">
                    <DropdownMenuLabel>Idiomas</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center justify-between">
                      <Link className="flex items-center gap-2" href="/US">
                        <span>PT-BR</span>
                        <BR title="Brasil" className="w-4 h-4" />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center justify-between">
                      <Link className="flex items-center gap-2" href="/US">
                        <span>EN-US</span>
                        <US title="United States" className="w-4 h-4" />
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  href="https://api.whatsapp.com/send?phone=5519982668985"
                  target="_blank"
                className="text-neutral-300 hover:text-white"
                >
                  <IconBrandWhatsapp stroke={2} />
                </Link>

                <Link
                  href="https://github.com/DxmLima"
                  target="_blank"
                className="text-neutral-300 hover:text-white"
                >
                  <IconBrandGithub stroke={2} />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/devmateuslima/"
                  target="_blank"
                className="text-neutral-300 hover:text-white"
                >
                  <IconBrandLinkedin stroke={2} />
                </Link>
              </div>
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
                className="text-neutral-200 font-medium text-[18px] hover:text-white"
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
