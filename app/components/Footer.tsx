import Link from "next/link";
import React from "react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
function Footer() {
  return (
    <>
      <main>
        <div className=" h-full w-auto bg-black  ">
          <div className="listfooter    pl-[40px] lg:pl-[300px] pt-[50px] text-white  ">
            <h1 className="logo text-2xl font-semibol ">mateuslima.dev</h1>
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mt-2 px-4  ">
              <div className="link mt-8 mb-8 list-none   text-1xl ">
              <li className="hover:underline">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/Sections/SelectedWorks">Trabalhos</Link>
                </li>
             
                <li className="hover:underline">
                  <Link href="/Section/Services">Serviços</Link>
                </li>
              
              </div>

              <div className="link mt-8  list-none  text-1xl ">
                <li>
                <Link
                  href="https://api.whatsapp.com/send?phone=5519982668985"
                  target="_blank"
                >
                  {" "}
                  <IconBrandWhatsapp stroke={2} />
                </Link>
                </li>
                <li>
                <Link
                  href="https://github.com/DxmLima"
                  target="_blank"
                >
                  {" "}
                  <IconBrandGithub stroke={2} />
                </Link>
                </li>
                <li>
                <Link
                  href="https://www.linkedin.com/in/devmateuslima/"
                  target="_blank"
                >
                  {" "}
                  <IconBrandLinkedin stroke={2} />
                </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright bg-black flex justify-center">
          <h1 className="text-white  font-medium  mb-4">
            {" "}
            Todos os direitos reservados{" "}
            <span className=" text-black font-bold">mateuslima.dev</span>
          </h1>
        </div>
      </main>
    </>
  );
}

export default Footer;
