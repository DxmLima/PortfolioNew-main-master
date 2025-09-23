import React from "react";
import { Check } from "lucide-react";

const PricePag = () => {
  return (
    <div>
      <div className="mt-8 ml-12 md:ml-[100px]   ">
        <div className="flex gap-72">
          <h1 className="font-bold text-4xl md:text-7xl justify-start" id="">
            Prices
          </h1>
        </div>
        <hr />
        <h2 className="text-center text-2xl font-semibold mt-12 ">
          Design, Code, Deploy
        </h2>
      </div>

      <div className="flex justify-center items-center px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Starter Pack */}
          <div className="w-full max-w-xs mx-auto h-auto border-2 border-[#324DD8] rounded-md shadow-lg p-4">
            <h1 className="font-black text-[#161616] text-2xl mb-4 tracking-wider">
              Starter Pack
            </h1>

            <h1 className="font-bold text-4xl text-center pt-4">$500</h1>
            <p className="text-center text-sm text-gray-600">
              by website/project
            </p>

            <div className="mt-6 space-y-4 text-[18px]">
              <div className="flex items-center gap-3">
                <Check color="#324DD8" /> <p>1 Website</p>
              </div>
              <div className="flex items-center gap-3">
                <Check color="#324DD8" /> <p>SSL Protection</p>
              </div>
              <div className="flex items-center gap-3">
                <Check color="#324DD8" /> <p>Up to 12 Pages</p>
              </div>
            </div>
          </div>

          {/* Enterprise */}
          <div className="w-full max-w-xs mx-auto h-auto bg-[#324DD8] rounded-md p-4 hover:scale-105 transition-transform">
            <h1 className="font-bold text-2xl text-white mb-2 tracking-wider">
              Enterprise
            </h1>
            <p className="text-gray-100 font-light text-sm mb-6">
              Premium Services for premium customers, custom pages, SEO
              Avançado, Google Ads and more
            </p>

            <h2 className="text-white font-semibold text-center text-xl mt-8">
              Custom Solutions, Custom Prices
            </h2>

            <div className="flex justify-center items-center mt-6">
              <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePag;
