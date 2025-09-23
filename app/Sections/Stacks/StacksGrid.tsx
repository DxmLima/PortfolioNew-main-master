import React from "react";
import { EvervaultCard, Icon } from "../../components/ui/evervault-card";

const StacksGrid = () => {
  return (
    <div className="flex justify-center items-center mt-8 md:mr-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 gap-y-16">
        <div>
          <div className="border border-black/[0.2] rounded-md dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[15rem] w-[15rem]">
     

            <EvervaultCard text="React" />
          </div>
        </div>

        <div>
          <div className="border border-black/[0.2] rounded-md dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[15rem] w-[15rem]">
            <EvervaultCard text="React Native" />
          </div>
        </div>

        <div>
          <div className="border border-black/[0.2] rounded-md dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[15rem] w-[15rem]">
            <EvervaultCard text="NextJS" />
          </div>
        </div>

        <div>
          <div className="border border-black/[0.2] rounded-md dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[15rem] w-[15rem]">
            <EvervaultCard text="Tailwind" />
          </div>
        </div>

        <div>
          <div className="border border-black/[0.2] rounded-md dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[15rem] w-[15rem]">
            <EvervaultCard text="Bootstrap 5" />
          </div>
        </div>

        <div>
          <div className="border border-black/[0.2] rounded-md dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[15rem] w-[15rem]">
            <EvervaultCard text="NodeJS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StacksGrid;
