'use client'
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin} from 'gsap/all';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button"


import WK1 from '@/app/public/Works/WK1.png'
import WK2 from '@/app/public/Works/WK2.png'
import WK3 from '@/app/public/Works/WK3.png'


         
gsap.registerPlugin(TextPlugin)


function WorkPage() {

 
useGSAP(
    () => {
        gsap.to('.AN1', {
            delay: 1,
            duration: 1,
            text: "Trabalhos",
            ease: "none",
          })


                gsap.to('.box', {
                scrollTrigger: '.box',
                delay: 1,
                pin: true,
                start: 'top top',
                scrub: 1,
                duration: 1.5, // start the animation when ".box" enters the viewport (once)
                x: 400,
                ease: 'power1.inOut'
        });

        gsap.to('.textswift', {
            scrollTrigger: '.textswift',
            delay: 1,
            pin: true,
            start: 'top top',
            scrub: 1,
            duration: 1.5, // start the animation when ".box" enters the viewport (once)
            x: 15,
            ease: 'power1.inOut'
    });


        gsap.to('.box2', {
            scrollTrigger: '.box',
            pin: true,
            delay: 1.5,
            start: 'top top',
            scrub: 1,
            duration: 1.5, // start the animation when ".box" enters the viewport (once)
            x: -400,
            ease: 'power1.inOut'
    });

    gsap.to('.textswift2', {
        scrollTrigger: '.textswift2',
        delay: 1.5,
        pin: true,
        start: 'top top',
        scrub: 1,
        duration: 1.5, // start the animation when ".box" enters the viewport (once)
        x: 15,
        ease: 'power1.inOut'
});

    
    gsap.to('.box3', {
        scrollTrigger: '.box',
        pin: true,
        delay: 1.5,
        start: 'top top',
        scrub: 1,
        duration: 1.5, // start the animation when ".box" enters the viewport (once)
        x: 400,
        ease: 'power1.inOut'
});


    },)

  


  return (
    <main className='flex justify-center  h-max w-auto bg-[#0b1215]  '> 
       <div className="worktext">
         <h1 className='AN1  flex justify-center'>Works</h1>  
           <div className="trabalhos pt-[100px] hidden lg:block">
            <div className='box'> 
                <div className=" h-[400px] lg:w-[650px]  bg-[#181818] flex justify-center items-center ">
                <Image
                src={WK2}
                width={600}
                height={100}
                alt="Picture of the author"
                className='m-8 rounded-md'
                />
                </div>
                <div className="textswift">
                    <Link href='#' className='no-underline hover:underline decoration-red-600'> WireFrame Components</Link>
                </div>   
            </div>

           <div className="box2">
            <div className=' mt-4 mb-4 h-[400px] w-[650px] bg-[#181818] flex justify-center items-center '>
            <Image
                src={WK1}
                width={600}
                height={100}
                alt="Picture of the author"
                className='m-8 rounded-md'
                />
            </div>
                <div className="textswift2">
                        <Link href='#'  className='no-underline hover:underline decoration-red-600' > AutoPlacas.Net</Link>
                </div> 
           </div>

           <div className="box3">
            <div className=' mt-4 mb-4 h-[400px] w-[650px] bg-[#181818] flex justify-center items-center '>
            <Image
                src={WK3}
                width={600}
                height={100}
                alt="Picture of the author"
                className='m-8 rounded-md'
                />
            </div>
                <div className="textswift">
                        <Link href='#' className='no-underline hover:underline decoration-red-600'> Ativa Emplacamentos</Link>
                </div> 
           </div>
           </div>

            <div>
                <p className='herop font-medium mt-20 mb-20 flex justify-center '>
                Durante o desenvolvimento dos meus projetos, sempre me empenho em atender todos os requisitos dos clientes, <br />  garantindo que sua aplicação esteja em conformidade com o mais alto padrão de qualidade
                </p>

                    <div className="btn flex justify-center m-12 ">
                        <Button asChild className='text-white text-[15px]   tracking-wide hover:bg-red-600 '>
                             <Link href="/Trabalhos">Explorar Trabalhos</Link>
                        </Button>
                    </div>

            </div>

        </div>

            
    </main>
  )
}

export default WorkPage