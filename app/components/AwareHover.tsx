"use client";

import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";

export function AwareHover() {
   const cards = [
      {name: "In the mountains", 
       description: "$1299 / night", 
       imageUrl: "https://images.unsplash.com/photo-1526572728358-228f6b8ca29b?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

      {name: "In the mountains", 
       description: "$1299 / night", 
       imageUrl: "https://images.unsplash.com/photo-1526572728358-228f6b8ca29b?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

      {name: "In the mountains", 
       description: "$1299 / night", 
       imageUrl: "https://images.unsplash.com/photo-1526572728358-228f6b8ca29b?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
   ];
 
   return (
      <section>
         <h1 className="ml-[350px] text-4xl font-semibold mt-4sssss">Projetos Recentes</h1>
         <div className="h-[40rem] relative flex items-center justify-center gap-8">
            {cards.map((card, index) => (
               <DirectionAwareHover key={index} imageUrl={card.imageUrl}>
                  <p className="font-bold text-xl">{card.name}</p>
                  <p className="font-normal text-sm">{card.description}</p>
               </DirectionAwareHover>
            ))}
         </div>
      </section>
   );
}
