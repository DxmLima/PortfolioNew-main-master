import React from "react";
import { Montserrat, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import OfficeImg from '@/public/Template/Adv01/Office.jpg'
import { Mail, MapPin, Phone } from 'lucide-react';

const mont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const NossaLocaliza = () => {
  return (
    <div className={mont.className}>
      <section className="relative bg-gray-50 py-24 md:py-32">
        {/* Swiss design grid container */}
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section header - Swiss typography */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-4xl font-light leading-tight tracking-tight text-black mb-4">
              Nossa Localização
            </h2>
            <div className="w-16 h-px bg-black"></div>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Office image - Swiss clean presentation */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden">
                <Image 
                  alt="Escritório de Advocacia" 
                  src={OfficeImg} 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                {/* Subtle overlay for Swiss aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>

            {/* Contact information - Swiss minimal design */}
            <div className="order-1 lg:order-2 space-y-12">
              
              {/* Contact methods */}
              <div className="space-y-8">
                
                {/* Email contact */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className={cn(inter.className, "text-xs font-medium text-blue-600 uppercase tracking-wider")}>
                      E-mail
                    </p>
                  </div>
                  <p className="text-base text-gray-900 font-normal">
                    contato@advocacia.com.br
                  </p>
                </div>

                {/* Phone contact */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className={cn(inter.className, "text-xs font-medium text-blue-600 uppercase tracking-wider")}>
                      Telefone
                    </p>
                  </div>
                  <p className="text-base text-gray-900 font-normal">
                    (11) 99999-9999
                  </p>
                </div>

                {/* Address section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className={cn(inter.className, "text-xs font-medium text-blue-600 uppercase tracking-wider")}>
                      Endereços
                    </p>
                  </div>
                  
                  {/* Address grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Brazil office */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                        Brasil
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Avenida Brasil, 123<br />
                        São Paulo - SP<br />
                        CEP: 01234-567
                      </p>
                    </div>

                    {/* Chile office */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                        Chile
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Camino Santa Teresa, 456<br />
                        Lampa - RM<br />
                        Santiago
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Swiss design divider */}
              <div className="pt-8 border-t border-gray-100">
                <div className="space-y-4">
                  <p className={cn(inter.className, "text-xs font-medium text-gray-400 uppercase tracking-wider")}>
                    Horário de Funcionamento
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Segunda a Sexta: 8h às 18h
                    </p>
                    <p className="text-sm text-gray-600">
                      Sábado: 8h às 12h
                    </p>
                    <p className="text-sm text-gray-600">
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NossaLocaliza;
