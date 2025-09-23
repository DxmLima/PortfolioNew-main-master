import React from 'react'
import { MobileProject } from './FeatureSection'


const PersonalProjects = () => {
  return (
    <div id='Projetos' className=" h-[800px] mt-[600px] overflow-visible">
      <div className="flex gap-72 text-center ml-12 md:ml-28">
        <h1 className="font-bold text-4xl md:text-6xl justify-start " id="">
          Projetos Pessoais
        </h1>
      </div>
      <hr />
      <MobileProject />
      </div>
  )
}

export default PersonalProjects