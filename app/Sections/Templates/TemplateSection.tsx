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
              <h1 className="bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent uppercase text-3xl font-bold">Templates Prontos</h1>
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

 
    </div>
  );
};

export default TemplateSection;
