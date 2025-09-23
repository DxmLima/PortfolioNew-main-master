import NavbarWhite from "@/app/components/NavbarWhite";
import React from "react";
import MatrixEffect from "./MatrixEffect";
import HeroBanner from "./HeroBanner";
import ProjectsCards from "./ProjectsCards";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";
const SelectWorks = () => {
  return (
    <div className="">
      <Navbar />
      <MatrixEffect />
      <HeroBanner />
      <ProjectsCards />
      <section className="flex justify-center intens-center mb-12">
          <Link className="flex gap-4 px-5 py-3 bg-black hover:bg-[#0b1215] text-white " href='https://api.whatsapp.com/send?phone=5519982668985' target="_blank"> Entrar em Contato <IconBrandWhatsapp /></Link>
          </section>
      <Footer />
      
    </div>
  );
};

export default SelectWorks;
