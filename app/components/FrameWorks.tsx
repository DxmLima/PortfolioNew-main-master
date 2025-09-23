import React from 'react'
import NextJS from '@/app/public/Brands/nextjs.svg'
import ReactJS from '@/app/public/Brands/react.svg'
import TypeScript from '@/app/public/Brands/TypeScript.svg'
import Tailwind from '@/app/public/Brands/tailwind.svg'
import Node from '@/app/public/Brands/Node.svg'
import MySQL from '@/app/public/Brands/MySQL.svg'
import Cypress from '@/app/public/Brands/cypress.svg'

import {
    Card,
    CardContent,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'


  
function FrameWorks() {
  return (
    <>
        <div className=" flex justify-center items-center mt-12 mb-12   ">
              <div className=" m-4 grid grid-cols-2 gap-4 md:grid-cols-4">
              <Card className='h-[120px] w-[150px]'>
                <CardContent className='flex justify-center items-center mt-4'>
                <Image
                        src={NextJS}
                        height={50}
                        alt='Image Of Design'
                        
                 
                    />
                </CardContent>
                <CardTitle className='text-center'> NextJS</CardTitle>
              </Card>

              <Card className='h-[120px] w-[150px]'>
                <CardContent className='flex justify-center items-center mt-4'>
                <Image
                        src={ReactJS}
                        height={50}
                        alt='Image Of Design'
                    />
                </CardContent>
                <CardTitle className='text-center'> ReactJS</CardTitle>
              </Card>

              <Card className='h-[120px] w-[150px]'>
                <CardContent className='flex justify-center items-center mt-4'>
                <Image
                        src={TypeScript}
                        height={50}
                        alt='Image Of Design'
                    />
                </CardContent>
                <CardTitle className='text-center'>TypeScript</CardTitle>
              </Card>

              <Card className='h-[120px] w-[150px]'>
                <CardContent className='flex justify-center items-center mt-4'>
                <Image
                        src={Tailwind}
                        height={50}
                        alt='Image Of Design'
                    />
                </CardContent>
                <CardTitle className='text-center'>Tailwindcss</CardTitle>
              </Card>

              <Card className='h-[120px] w-[150px]'>
                <CardContent className='flex justify-center items-center mt-4'>
                <Image
                        src={Node}
                        height={50}
                        alt='Image Of Design'
                    />
                </CardContent>
                <CardTitle className='text-center'>NodeJS</CardTitle>
              </Card>

              <Card className='h-[120px] w-[150px]'>
                <CardContent className='flex justify-center items-center mt-4'>
                <Image
                        src={MySQL}
                        height={50}
                        alt='Image Of Design'
                    />
                </CardContent>
                <CardTitle className='text-center'>MySQL</CardTitle>
              </Card>

              <Card className='h-[120px] w-[150px]'>
                <CardContent className='flex justify-center items-center mt-4'>
                <Image
                        src={Cypress}
                        height={40}
                        alt='Image Of Design'
                    />
                </CardContent>
                <CardTitle className='text-center'>CyPress</CardTitle>
              </Card>


              <Card className='h-[120px] w-[150px]'>
                <CardContent className='flex justify-center items-center mt-4'>
                    <h1 className='font-extrabold text-[25px]'>GSAP</h1>
                </CardContent>
                <CardTitle className='text-center'>GSAP</CardTitle>
              </Card>

              </div>
          </div>
    </>
  )
}

export default FrameWorks