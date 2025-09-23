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
import Test from '@/app/public/Works/WK1.png'

function SistemasCard() {
  return (
    <div className=' mt-12 w-[800px] border-none'>
      <Card className='hover:bg-[#f7f7f7] border-none'>
    <CardHeader>
        <div>
            {/* Lista centralizada em dispositivos móveis */}
                <h1 className='flex justify-center items-center font-bold text-[30px]'>Em Breve... 👀</h1>
        </div>
    </CardHeader>
 
 
</Card>


    </div>
  )
}

export default SistemasCard