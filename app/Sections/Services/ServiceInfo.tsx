import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceInfo = () => {
  return (
    <>
      <section className="flex justify-center items-center mb-20 mt-12 m-5">
        <Accordion type="single" collapsible className="w-[400px] md:w-[550px]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl">Websites</AccordionTrigger>
            <AccordionContent className="text-[15px] md:text-[16px]  tracking-wider">
              Desenvolvimento Completo de Sites Corporativos, traduzindo a visão
              do seu negócio em um projeto digital. Arquitetura limpa e
              organizada, com base nos princípios de um bom código. <br />{" "}
              <br /> Construímos sites que geram vendas, atraem visitas e captam
              leads. O desenvolvimento é realizado em conjunto com o cliente,
              garantindo que tudo esteja da melhor forma possível e com a
              identidade da sua empresa.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl">E-Commerce</AccordionTrigger>
            <AccordionContent className="text-[15px] md:text-[16px]  tracking-wider">
              Desenvolvimento Completo de Lojas Online para a venda de produtos,
              com integração a plataformas de pagamento como Mercado Pago e
              Stripe, além de transferências via PIX e cartões de crédito.{" "}
              <br /> <br />
              Tenha total controle sobre a forma como cada produto é exibido,
              incluindo informações detalhadas e atualizações de prazos de
              entrega.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl">
              Aplicativos
            </AccordionTrigger>
            <AccordionContent className="text-[15px] md:text-[16px]  tracking-wider">
              Desenvolvemos aplicativos exclusivos para atender às necessidades
              da sua empresa e oferecer mais praticidade aos seus clientes.{" "}
              <br /> <br /> Com soluções sob medida, criamos apps funcionais,
              intuitivos e integrados, que fortalecem a presença digital do seu
              negócio e facilitam o dia a dia dos usuários.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-2xl">Manutenção</AccordionTrigger>
            <AccordionContent className="text-[15px] md:text-[16px]  tracking-wider">
              Oferecemos planos de manutenção que garantem atualizações
              constantes, correções rápidas e proteção reforçada. <br /> <br />
              Assim, seu site permanece seguro, estável e sempre no ar, sem
              dores de cabeça para a sua empresa.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-2xl">Gestão SEO</AccordionTrigger>
            <AccordionContent className="text-[15px] md:text-[16px]  tracking-wider">
              Atualização de conteúdos, análise de métricas e aplicação
              estratégica de tags para impulsionar o seu negócio no Google.{" "}
              <br /> <br />
              Colocamos sua empresa em destaque nos resultados de pesquisa,
              atraindo mais visitantes e potenciais clientes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-2xl">Design</AccordionTrigger>
            <AccordionContent className="text-[15px] md:text-[16px]  tracking-wider">
              Design & Conteúdo, Criamos logotipos e materiais visuais que
              traduzem a identidade da sua empresa. Oferecemos planos de criação
              de conteúdos para redes sociais, com posts personalizados baseados
              no propósito e nos valores do seu negócio. <br /> <br />Além disso, otimizamos
              cada peça para gerar engajamento e fortalecer a presença da sua
              marca no digital.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
};

export default ServiceInfo;
