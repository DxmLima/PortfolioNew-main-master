'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import WorksMenu from './WorksMenu';

gsap.registerPlugin(TextPlugin, ScrollTrigger)

const images = [
  'https://i.postimg.cc/XJhttvHh/WK1.png',
  'https://i.postimg.cc/25jpZMLH/WK2.png',
  'https://i.postimg.cc/DZmtCGgL/WK3.png'
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };


  useGSAP(
    () => {
      gsap.to('.worktext', {
        scrollTrigger: {
          trigger: ".worktext",
        },
        delay: 1,
        duration: 2,
        text: "Meus Trabalhos",
        color: "#000",
        ease: "power1.out",
      })
    },)

  return (
    
    <main>
      <div className=" worktext  font-bold   bg-[#fff] flex justify-center text-center   mt-20">
        My Works
      </div>
        <div className='mt-12 mb-12'> 
            <div className='text-center'>
                <h1 className='text-[32px] font-bold bg-gradient-to-r from-zinc-900 to-neutral-700 bg-clip-text text-transparent'>Desenvolvimento Web Completo.  <br /></h1>
           
            </div>
        </div>

        <div className='mt-12 mb-12 flex justify-center items-center'>
            <WorksMenu />
        </div>


    </main>
  );
};

export default ImageCarousel;
