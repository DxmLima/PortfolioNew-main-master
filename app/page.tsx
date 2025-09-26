"use client";
import { Karla } from "next/font/google";
import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import HeroPage from "./components/Hero";
import Lenis from "lenis";
import Footer from "./components/Footer";
import StacksPage from "./Sections/Stacks/page";
import PersonalProjects from "./Sections/PersonalProjects/page";
import HeroBanner from "./Sections/SelectedWorks/HeroBanner";
import ProjectsCards from "./Sections/SelectedWorks/ProjectsCards";

import BinaryBackground from "./components/BinaryBackground";
import HeroServices from "./components/HeroServices";
import HeroAbout from "./components/HeroAbout";


const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Page() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <main className={karla.className}>
      <div className="overflow-x-hidden">
        <Navbar />
        <HeroPage />
        <HeroBanner />
        <HeroServices />
        <HeroAbout />
        <Footer />
        
      </div>
    </main>
  );
}

export default Page;
