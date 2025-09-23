'use client'
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin, ScrollTrigger } from 'gsap/all';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';


gsap.registerPlugin(TextPlugin, ScrollTrigger)

function Servicos() {

  useGSAP(
    () => {
      gsap.to(".templatetext", {
        scrollTrigger: {
            trigger: ".templatetext",
        },
        delay:1,
        duration: 1,
        text: "Serviços",
        color: "#000"
    })
    },)


  return (
    <>
        <main className=' h-full w-auto  '>
                <h1 className=' templatetext uppercase font-bold p-20 text-red-600
               text-center '> Services </h1>
            <div className='bg-gradient-to-r from-slate-100 to-gray-200 h-[500px] '>
                <h1 className='text-black text-[25px] text-center uppercase 
                pt-12 font-black tracking-normal'> Planos de Desenvolvimento Web <br /> a partir de R$ 450,00:  
                </h1>

                  <div className='flex justify-center items-center'>
                  <Card className='hover:bg-[#f7f7f7] border-none w-[450px] m-6'>
                 <CardHeader>
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-40 mt-6">

                    

             
                   
                </div>
            </CardHeader>
            <CardContent className='font-semibold text-[16px]'>
                Descubra  planos  de desenvolvimento web,   <br /> 
                Ideais para pequenas empresas, profissionais autônomos e empreendedores 
            </CardContent>
            <CardFooter>
                <div className=" flex justify-center items-center text-center">
                    <Link href='/Servicos' className='bg-black hover:bg-[#222] text-white text-[14px]
                    p-2  rounded-md font-normal'>
                        Ver Planos
                    </Link>
                </div>
            </CardFooter>
        </Card>
                  </div>
                
            </div>
                
        </main>
    </>
  )
}

export default Servicos