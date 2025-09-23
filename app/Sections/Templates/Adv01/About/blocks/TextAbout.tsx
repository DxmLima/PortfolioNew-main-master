import React from "react";
import { Montserrat } from 'next/font/google';

const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600']
});

const TextAbout = () => {
  return (
    <section className={`${mont.className} py-20 lg:py-32 bg-white`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Nossa <span className="font-medium text-blue-900">Filosofia</span> de Atuação
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Na Legality Advocacia, entendemos que o Direito não se limita aos tribunais. 
                Nosso papel é oferecer soluções jurídicas inteligentes e personalizadas, que 
                assegurem proteção, previnam litígios e promovam resultados sólidos e duradouros.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Contamos com uma equipe multidisciplinar, formada por profissionais experientes 
                em diversas áreas do Direito, que unem tradição, ética e inovação no atendimento 
                a pessoas físicas e empresas.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Cada demanda é analisada com cuidado e sensibilidade, pois sabemos que, além dos 
                aspectos legais, existem histórias e interesses únicos a serem respeitados.
              </p>
            </div>
            
            {/* Key values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Excelência</h3>
                  <p className="text-sm text-gray-600">Compromisso com a qualidade em cada processo jurídico.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Dedicação</h3>
                  <p className="text-sm text-gray-600">Atendimento personalizado e focado no cliente.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Inovação</h3>
                  <p className="text-sm text-gray-600">Uso de tecnologia para soluções mais eficientes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Confiança</h3>
                  <p className="text-sm text-gray-600">Transparência e ética em todas as relações.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Mission card */}
            <div className="bg-[#071629] rounded-2xl p-8 border border-blue-200">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white">Nossa Missão</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ser parceiros estratégicos de nossos clientes, atuando com clareza, 
                  responsabilidade e dedicação em cada etapa da jornada jurídica.
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="space-y-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Casos Resolvidos</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Taxa de Sucesso</div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-black rounded-2xl p-8 text-white">
              <h3 className="text-xl font-medium mb-4">Pronto para começar?</h3>
              <p className="text-gray-300 mb-6">
                Entre em contato conosco e descubra como podemos ajudar com sua demanda jurídica.
              </p>
              <button className="w-full bg-white text-black font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextAbout;
