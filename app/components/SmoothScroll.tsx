"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    // Evita rodar no SSR
    if (typeof window === "undefined") return;

    let ctx = gsap.context(() => {
      // Setup básico do ScrollTrigger
      ScrollTrigger.defaults({
        markers: false,
      });

      // Exemplo de smooth scroll fake (usando transform)
      let scrollContainer = document.querySelector(".scroll-container") as HTMLElement;

      if (scrollContainer) {
        gsap.to(scrollContainer, {
          y: () => -(scrollContainer.scrollHeight - document.documentElement.clientHeight),
          ease: "none",
          scrollTrigger: {
            trigger: scrollContainer,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
