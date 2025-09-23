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
import { CircleCheck, CircleX } from 'lucide-react';

  
function LandingPage() {
  return (
    <>
        <main className='mt-12 mb-12 '>
            <div className=" mt-12 flex justify-center items-center">
                <h1 className='font-semibold text-[45px] mt-12 mb-12 m-4'>Encontramos os melhores valores <br />
                     para o seu tipo de négocio</h1>
            </div>

             <div className='flex justify-center items-center'>
             <div className=' mt-12 grid grid-cols-1 gap-6 md:grid-cols-3'>
            <Card className='w-auto hover:bg-[#f7f7f7]'>
                <CardHeader>
                    <CardTitle className='text-[18px]'>Landing Page</CardTitle>
                    <CardTitle className='mt-2 text-[35px] font-bold'>R$ 550,00</CardTitle>
                    <CardDescription className='text-[15px]'>Por aplicação</CardDescription>
                    <CardDescription className='text-[15px] font-medium'>Desenvolvimento Web De 
                        Landing Pages</CardDescription>
                </CardHeader>
                    <CardContent>
                        <ol className='text-[17px] w-auto font-bold'>
                        <li className='flex items-center '>
                            <CircleCheck color='#097969' className='mr-2 ' /> Briefing e Planejamento
                        </li>
                        <li className='flex items-center'>
                            <CircleCheck color='#097969' className='mr-2 ' /> Desenvolvimento Front-end
                        </li>
                        <li className='flex items-center'>
                            <CircleCheck color='#097969' className='mr-2 ' /> Testes e Revisões
                        </li>
                        <li className='flex items-center'>
                            <CircleCheck color='#097969' className='mr-2 ' /> Deploy do Conteúdo
                        </li>
                        <li className='flex items-center'>
                            <CircleX color='#FF0000' className='mr-2 ' /> Domínio + Hospedagem 
                        </li>
                        </ol>
                    </CardContent>
                        <CardFooter>
                        <div className="btn flex justify-center items-center">
                                        <Link href='#' className='bg-black hover:bg-[#222]
                                         text-white text-[15px] p-2 rounded-md  font-semibold '>Entrar em Contato</Link>
                                    </div>
                        </CardFooter>
                    </Card>

                    <Card className='w-auto bg-[#181818] hover:bg-black'>
                <CardHeader>
                    <CardTitle className='text-[18px] text-green-400'>Web Básico 
                         <span className='bg-white text-black m-8 p-2 rounded-md text-[13px] font-semibold'>+ Vendas</span> </CardTitle>
                    <CardTitle className='mt-2 text-[35px] font-bold text-white'>R$ 850,00</CardTitle>
                    <CardDescription className='text-[15px]'>Por aplicação</CardDescription>
                    <CardDescription className='text-[15px] font-medium'>Desenvolvimento Web Básico sem <br />
                        integrações de sistemas API </CardDescription>
                </CardHeader>
                    <CardContent>
                        <ol className='text-[17px] w-auto font-bold text-green-400'>
                        <li className='flex items-center '>
                            <CircleCheck color='#fff' className='mr-2 ' /> Tudo do  Landing Page  +
                        </li>
                        <li className='flex items-center'>
                            <CircleCheck color='#fff' className='mr-2 ' /> Integração com Google Analytics
                        </li>
                       
                        <li className='flex items-center'>
                            <CircleCheck color='#fff' className='mr-2 ' /> Otimização SEO Básica
                        </li>
                        <li className='flex items-center'>
                            <CircleCheck color='#fff' className='mr-2 ' /> Domínio Grátis
                        </li>

                        </ol>
                    </CardContent>
                        <CardFooter>
                        <div className="btn flex justify-center items-center ">
                                        <Link href='#' className='bg-white hover:bg-[#fefefe]
                                         text-black text-[15px] p-2 rounded-md  font-semibold'>Entrar em Contato</Link>
                                    </div>
                        </CardFooter>
                    </Card>

                    <Card className='w-auto  hover:bg-[#f7f7f7]'>
                <CardHeader>
                    <CardTitle className='text-[18px]'>Web Premium</CardTitle>
                    <CardTitle className='mt-2 text-[35px] font-bold'>R$ 1500,00</CardTitle>
                    <CardDescription className='text-[15px]'>Por aplicação</CardDescription>
                    <CardDescription className='text-[15px] font-medium'>Desenvolvimento Web Completo com  Integrações <br />
                        API e Banco de Dados  </CardDescription>
                </CardHeader>
                    <CardContent>
                        <ol className='text-[17px] w-auto font-bold'>
                        <li className='flex items-center '>
                            <CircleCheck color='#097969' className='mr-2 ' /> Tudo do Web Básico 
                        </li>

                        <li className='flex items-center '>
                            <CircleCheck color='#097969' className='mr-2 ' /> Integrações API 
                        </li>

                        <li className='flex items-center '>
                            <CircleCheck color='#097969' className='mr-2 ' /> Banco de Dados 
                        </li>
                        <li className='flex items-center '>
                            <CircleCheck color='#097969' className='mr-2 ' /> Hospedagem AWS 
                        </li>
                       
                       
                        </ol>
                    </CardContent>
                        <CardFooter>
                        <div className="btn flex justify-center items-center">
                                        <Link href='#' className='bg-black hover:bg-[#222]
                                         text-white text-[15px] p-2 rounded-md  font-semibold'>Entrar em Contato</Link>
                                    </div>
                        </CardFooter>
                    </Card>
            </div>
             </div>

            
        </main>
    </>
  )
}

export default LandingPage