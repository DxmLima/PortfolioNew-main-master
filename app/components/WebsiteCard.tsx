import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link'
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import WorksGif from '@/app/public/Works/worksgif.gif'
function WebsiteCard() {
  return (
    <div className=' mt-12 w-auto md:w-[800px] border-none'>
      <Card className='hover:bg-[#f7f7f7] border-none'>
    <CardHeader>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-40 mt-6">
            {/* Lista centralizada em dispositivos móveis */}
            <ol className='text-[14px] w-full lg:w-auto font-semibold mx-auto text-center lg:text-left'>
                <li className='flex items-center justify-center lg:justify-start mt-2'>
                    - Idealização do Projeto
                </li>
                <li className='flex items-center justify-center lg:justify-start mt-2'>
                    - Design
                </li>
                <li className='flex items-center justify-center lg:justify-start mt-2'>
                    - Código Front-End
                </li>
                <li className='flex items-center justify-center lg:justify-start mt-2'>
                    - Testes Automatizados
                </li>
                <li className='flex items-center justify-center lg:justify-start mt-2'>
                    - Lançamento em Produção
                </li>
            </ol>

            {/* Imagem à direita */}
            <div className='flex justify-center'>
                <Image 
                    src={WorksGif}
                    alt='Trabalho'
                    className='h-auto w-auto max-w-[350px] max-h-[250px]'
                />
            </div>
        </div>
    </CardHeader>
    <CardContent>
        {/* Conteúdo adicional */}
    </CardContent>
    <CardFooter>
        <div className="btn flex justify-center items-center">
            <Link href='/Trabalhos' className='bg-black hover:bg-[#222] text-white text-[14px]
             p-2 ml-12 rounded-md font-normal'>
                Ver Coleção
            </Link>
        </div>
    </CardFooter>
</Card>


    </div>
  )
}

export default WebsiteCard