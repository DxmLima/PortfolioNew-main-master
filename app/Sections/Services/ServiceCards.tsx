import Link from "next/link";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import { IconBrandWhatsapp } from "@tabler/icons-react";
export function ServiceCards() {
  return (
    <div className="max-w-5xl mx-auto m-4 px-8">
      <HoverEffect items={projects} />
          <section className=" mt-4  mb-4 flex justify-center intens-center">
          <Link className="flex gap-4 px-5 py-3 bg-black hover:bg-[#0b1215] text-white " href='https://api.whatsapp.com/send?phone=5519982668985' target="_blank"> Entrar em Contato <IconBrandWhatsapp /></Link>
          </section>
    </div>
  );
}
export const projects = [
    {
      title: "Websites",
      description:
        "Desenvolvimento de sites modernos, completos e responsivos, alinhados aos objetivos do seu negócio.",
    },
    {
      title: "E-commerce",
      description:
        "Criação de lojas virtuais personalizadas para vender seus produtos online com segurança e praticidade.",
    },
    {
      title: "Aplicativos",
      description:
        "Desenvolvimento de aplicativos sob medida para atender às necessidades da sua empresa e dos seus clientes.",
    },
    {
      title: "Manutenção",
      description:
        "Planos de manutenção com suporte contínuo, proteção contra ameaças e atualizações constantes.",
    },
    {
      title: "Gestão de SEO",
      description:
        "Otimização para motores de busca (SEO) a fim de aumentar sua visibilidade online e atrair mais clientes.",
    },
    {
      title: "Design",
      description:
        "Criação de identidades visuais, logotipos e artes para redes sociais, fortalecendo a presença da sua marca.",
    },
  ];
  
