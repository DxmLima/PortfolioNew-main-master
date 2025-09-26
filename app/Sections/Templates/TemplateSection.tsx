import { TemplatesAwareHover } from "@/app/components/ui/direction-aware-hover";
import Image from "next/image";
import React from "react";

const TemplateSection = () => {
  return (
    <div className="mb-12">
      <main className="flex justify-center items-center bg-black h-[700px] ">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-20">
            <div>
              <h1 className="text-white text-4xl font-bold">Templates Prontos</h1>
              <p className="w-[400px] text-gray-300  tracking-wider mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                laudantium ipsam animi neque repellendus. Necessitatibus vitae
                aliquam sint unde culpa! Autem velit consequatur quod ea culpa
                eum neque porro maxime.
              </p>
              <p className="w-[400px] text-gray-300  tracking-wider mt-12">
                Lorem ipsum dolor sit amet consectetur Necessitatibus vitae
                aliquam sint unde culpa! Autem velit consequatur quod ea culpa
                eum neque porro maxime.
              </p>
            </div>

            <div className="w-full max-w-6xl rounded-lg border border-neutral-800 bg-black/80 shadow-2xl backdrop-blur">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/80 rounded-t-lg">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <div className="ml-3 text-xs text-neutral-400 select-none">mateus@templates: ~</div>
          </div>

          {/* Terminal body */}
          <div className="relative px-6 py-8 md:px-10 md:py-10">
            {/* subtle scanlines */}
            <div className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(transparent_0px,transparent_2px,rgba(255,255,255,0.02)_3px,transparent_4px)] rounded-b-lg" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left: copy in mono/terminal style */}
              <div className="text-green-400/90 font-mono leading-7">
                <div className="text-sm md:text-base text-green-400/90 leading-7 min-h-[120px]">
                
                </div>

      

           
              </div>

              {/* Right: profile visual inside terminal */}
       
            </div>
          </div>
        </div>
          </div>
        </div>
      </main>

      <div>
        <h1 className="text-3xl font-bold p-12"> Templates Advocacia</h1>
        <div className="flex justify-center items-center mt-12">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-[1200px] gap-12">
            <TemplatesAwareHover imageUrl="https://images.unsplash.com/photo-1526572728358-228f6b8ca29b?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
              <div className="flex flex-col gap-3">
                <span className="text-lg font-semibold">
                  Template Advocacia
                </span>
                <button className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition">
                  Conferir Template
                </button>
              </div>
            </TemplatesAwareHover>
            <TemplatesAwareHover imageUrl="https://images.unsplash.com/photo-1526572728358-228f6b8ca29b?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
              <div className="flex flex-col gap-3">
                <span className="text-lg font-semibold">
                  Template Advocacia
                </span>
                <button className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition">
                  Conferir Template
                </button>
              </div>
            </TemplatesAwareHover>
            <TemplatesAwareHover imageUrl="https://images.unsplash.com/photo-1526572728358-228f6b8ca29b?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
              <div className="flex flex-col gap-3">
                <span className="text-lg font-semibold">
                  Template Advocacia
                </span>
                <button className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition">
                  Conferir Template
                </button>
              </div>
            </TemplatesAwareHover>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TemplateSection;
