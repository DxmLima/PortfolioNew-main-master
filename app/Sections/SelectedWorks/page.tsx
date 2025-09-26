import NavbarWhite from "@/app/components/NavbarWhite";
import React from "react";
import MatrixEffect from "./MatrixEffect";
import HeroBanner from "./HeroBanner";
import ProjectsCards from "./ProjectsCards";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { BentoGridImages } from "./Bentogrid";

const SelectWorks = () => {
  return (
    <div className="">
      <Navbar />
      <HeroBanner />
      <BentoGridImages />
      <Footer />
      
    </div>
  );
};

export default SelectWorks;
