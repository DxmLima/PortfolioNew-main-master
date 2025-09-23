"use client";

import { Tabs } from "./ui/tabs";

export function BlogsTab() {
  const tabs = [
    {
      title: "Front-End",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <FrontEndPosts />
        </div>
      ),
    },
    {
      title: "Data Science",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-100 to-white ">
          <h1 className="text-gray-800">Data Science</h1>
          <DataSciencePosts />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const FrontEndPosts = () => {
  return (
    <div>
      <h1>teste</h1>
    </div>
  );
};

const DataSciencePosts = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="border-2 border-black rounded-sm h-[250px] w-[250px]">
            <h1 className="text-black text-[20px] m-4">Teste</h1>
          </div>

          <div className="border-2 border-black rounded-sm h-[250px] w-[250px]">
            <h1 className="text-black text-[20px] m-4">Teste</h1>
          </div>

          <div className="border-2 border-black rounded-sm h-[250px] w-[250px]">
            <h1 className="text-black text-[20px] m-4">Teste</h1>
          </div>
        </div>
      </div>
    </>
  );
};
