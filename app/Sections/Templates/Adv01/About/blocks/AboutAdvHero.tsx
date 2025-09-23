import Image from "next/image";
import React from "react";
import AboutImg from "@/public/Template/Adv01/Nellie.jpg";
import { Montserrat,Sura } from 'next/font/google';
import {cn} from '@/lib/utils'

const sura = Sura({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})





const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600']
});

const AboutAdvHero = () => {
  return (
    <section className={`${mont.className} w-full relative overflow-hidden bg-gradient-to-br from-slate-50 to-white`}>
      {/* Background decorative elements */}

      
      <div className=" md:ml-[200px] md:m-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
       
              
              <h1 className={cn(sura.className,'text-4xl md:text-5xl font-light leading-[1.1] tracking-tight text-black')}>
                <span className="block font-medium text-black">Legality Advocacia:</span>
                <span className="block mt-2 text-gray-700">tradição, ética e inovação</span>
                <span className="block mt-2 text-gray-600">em soluções jurídicas</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Mais de uma década de excelência jurídica, combinando a tradição do Direito 
                com inovação tecnológica para oferecer soluções personalizadas e eficazes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-black hover:bg-[#0b1215] text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-900/25">
                Conheça Nossa Equipe
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-medium rounded-lg transition-all duration-200">
                Nossos Serviços
              </button>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-4">
                <Image
                  alt="Livros de Direito em estante em ambiente de escritório, referência à tradição jurídica"
                  src={AboutImg}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                  width={600}
                  height={400}
                />
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">500+</p>
                    <p className="text-xs text-gray-500">Casos Resolvidos</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">15+</p>
                    <p className="text-xs text-gray-500">Anos de Experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAdvHero;
