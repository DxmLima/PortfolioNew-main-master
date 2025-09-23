import React from "react";
import { Montserrat, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

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

const CTASection = () => {
  return (
    <div className={mont.className}>
      <section className="relative bg-white py-24 md:py-32">
        {/* Swiss design grid container */}
        <div className="max-w-4xl mx-auto px-6">
          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            
            {/* Text content - Swiss typography hierarchy */}
            <div className="md:col-span-7 space-y-8">
              {/* Primary heading - Swiss bold typography */}
              <h2 className="text-2xl md:text-4xl font-light leading-tight tracking-tight text-black">
                Precisa de ajuda para lidar com burocrâcias legais?
              </h2>
              
              {/* Secondary text - clean and minimal */}
              <p className={cn(inter.className, "text-base md:text-lg font-normal leading-relaxed text-gray-600 max-w-lg")}>
                Entre em contato conosco. Agendaremos uma reunião com nossos profissionais especializados para resolver todos os seus conflitos jurídicos de forma eficiente e transparente.
              </p>
            </div>

            {/* CTA section - Swiss minimal design */}
            <div className="md:col-span-5 flex flex-col items-start md:items-end space-y-6">
              
              {/* Primary CTA button - Swiss design principles */}
              <a 
                href="/Sections/Templates/Adv01/Contato" 
                className={cn(
                  "group relative inline-flex items-center justify-center",
                  "px-8 py-4 text-sm font-medium tracking-wide uppercase",
                  "bg-black text-white border border-black",
                  "transition-all duration-200 ease-in-out",
                  "hover:bg-white hover:text-black",
                  "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
                  "min-w-[200px]"
                )}
              >
                <span className="relative z-10">Solicitar Atendimento</span>
                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left"></div>
              </a>

              {/* Secondary CTA - minimal link style */}
              <a 
                href="tel:+5511999999999" 
                className={cn(
                  inter.className,
                  "text-sm font-normal text-gray-500 hover:text-black",
                  "transition-colors duration-200 ease-in-out",
                  "border-b border-transparent hover:border-gray-300"
                )}
              >
                Ou ligue: (11) 99999-9999
              </a>
            </div>
          </div>

          {/* Swiss design divider line */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="space-y-2">
                <p className={cn(inter.className, "text-xs font-medium text-blue-600 uppercase tracking-wider")}>
                  Garantia de Qualidade
                </p>
                <p className="text-sm text-gray-600">
                  Mais de 15 anos de experiência em advocacia
                </p>
              </div>
              
              <div className="space-y-2">
                <p className={cn(inter.className, "text-xs font-medium text-blue-600 uppercase tracking-wider")}>
                  Atendimento Personalizado
                </p>
                <p className="text-sm text-gray-600">
                  Consultoria jurídica especializada
                </p>
              </div>
              
              <div className="space-y-2">
                <p className={cn(inter.className, "text-xs font-medium text-blue-600 uppercase tracking-wider")}>
                  Transparência Total
                </p>
                <p className="text-sm text-gray-600">
                  Sem custos ocultos ou surpresas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
