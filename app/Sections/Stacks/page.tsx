import React from 'react'

import StacksGrid from './StacksGrid'

const StacksPage = () => {
  return (
    <div id='Stacks' className=" h-[1750px] md:h-[500px] overflow-visible">
      <div className="flex gap-72 text-center ml-28">
        <h1 className="font-bold text-3xl mr-28 md:mr-0 md:text-6xl justify-start " id="">
          Stacks e Habilidades
        </h1>
      </div>
      <hr />

      <div className="mt-20">
        <StacksGrid />
      </div>

 
    </div>
  )
}

export default StacksPage