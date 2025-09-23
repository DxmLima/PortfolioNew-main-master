import * as React from "react"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import WEBSITE from '@/app/public/Works/WEBSITE.png'
import BOLT from '@/app/public/Works/BOLT.png'
import DESIGN from '@/app/public/Works/DESIGN.png'
import SYSTEM from '@/app/public/Works/SYSTEM.png'
import GEAR from '@/app/public/Works/GEAR.png'
import TARGET from '@/app/public/Works/TARGET.png'
import Link from "next/link";

export function TemplateCards() {
  return (
  <div className="list grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 mb-12">
        <Card className="w-[300px] bg-none bg-[#181818] border-none">
        <CardContent className="flex justify-center items-center">
        <Image
                src={WEBSITE}
                width={200}
                height={300}
                alt="Picture of the author"
                className=' m-2 '
                />
       </CardContent>
      <CardHeader>
        <CardTitle className="font-bold text-red-500 text-[20px]">Desenvolvimento de Sites</CardTitle>
            <p className="text-white pt-2 font-serif">Construção de sites do zero, seja para empresas, profissionais 
              autônomos ou outras organizações. <br /> </p>
      </CardHeader> 
      <CardFooter>
          <Link href='/Servicos/Website' className="bg-[#fff] text-black p-3 font-semibold  text-[13px]"> Mais Informações</Link>
      </CardFooter>
     
    </Card>

    <Card className="w-[300px] bg-none bg-[#181818] border-none">
        <CardContent className="flex justify-center items-center">
        <Image
                src={DESIGN}
                width={200}
                height={300}
                alt="Picture of the author"
                className=' m-2 '
                />
       </CardContent>
      <CardHeader>
        <CardTitle className="font-bold text-red-500 text-[20px]">Atualizações de Design</CardTitle>
            <p className="text-white pt-2 font-serif">Revisão e melhoria do design de sites existentes para torná-los mais modernos, atraentes e funcionais.</p>
      </CardHeader> 
      <CardFooter>
          <Link href='/Servicos/Design' className="bg-[#fff] text-black p-3 font-semibold  text-[13px]"> Mais Informações</Link>
      </CardFooter>
    </Card>

    <Card className="w-[300px] bg-none bg-[#181818] border-none">
        <CardContent className="flex justify-center items-center">
        <Image
                src={BOLT}
                width={200}
                height={300}
                alt="Picture of the author"
                className=' m-2 '
                />
       </CardContent>
      <CardHeader>
        <CardTitle className="font-bold text-red-500 text-[20px]">Otimização de SEO</CardTitle>
            <p className="text-white pt-2 font-serif">Melhorias no site para aumentar a visibilidade em motores de busca como o Google.</p>
      </CardHeader> 
      <CardFooter>
          <Link href='/Servicos/SEO' className="bg-[#fff] text-black p-3 font-semibold  text-[13px]"> Mais Informações</Link>
      </CardFooter>
    </Card>

    <Card className="w-[300px] bg-none bg-[#181818] border-none">
        <CardContent className="flex justify-center items-center">
        <Image
                src={SYSTEM}
                width={200}
                height={300}
                alt="Picture of the author"
                className=' m-2 '
                />
       </CardContent>
      <CardHeader>
        <CardTitle className="font-bold text-red-500 text-[20px]">Criação de Sistemas</CardTitle>
            <p className="text-white pt-2 font-serif">Desenvolvimento de sistemas web customizados, atendendo os 
              requisitos do cliente</p>
      </CardHeader> 
      <CardFooter>
          <Link href='/Servicos/Sistemas' className="bg-[#fff] text-black p-3 font-semibold  text-[13px]"> Mais Informações</Link>
      </CardFooter>
    </Card>

    <Card className="w-[300px] bg-none bg-[#181818] border-none">
        <CardContent className="flex justify-center items-center">
        <Image
                src={GEAR}
                width={200}
                height={300}
                alt="Picture of the author"
                className=' m-2 '
                />
       </CardContent>
      <CardHeader>
        <CardTitle className="font-bold text-red-500 text-[20px]">Manutenção de Sites</CardTitle>
            <p className="text-white pt-2 font-serif">Manutenção contínua de sites, garantindo que eles estejam 
              sempre atualizados e protegidos contra falhas ou ataques.</p>
      </CardHeader> 
      <CardFooter>
          <Link href='/Servicos/Manutencao' className="bg-[#fff] text-black p-3 font-semibold  text-[13px]"> Mais Informações</Link>
      </CardFooter>
    </Card>

    <Card className="w-[300px] bg-none bg-[#181818] border-none">
        <CardContent className="flex justify-center items-center">
        <Image
                src={TARGET}
                width={200}
                height={300}
                alt="Picture of the author"
                className=' m-2 '
                />
       </CardContent>
      <CardHeader>
        <CardTitle className="font-bold text-red-500 text-[20px]">Auditoria de Sites</CardTitle>
            <p className="text-white pt-2 font-serif">Análise detalhada de um site para identificar problemas técnicos, de design, performance e SEO.</p>
      </CardHeader> 
      <CardFooter>
          <Link href='/Servicos/Auditoria' className="bg-[#fff] text-black p-3 font-semibold  text-[13px]"> Mais Informações</Link>
      </CardFooter>
    </Card>

    
  </div>
  )
}
