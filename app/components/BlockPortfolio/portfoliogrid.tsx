import { FocusCards } from "@/components/ui/focus-cards";

export function PortfolioGrid() {
  const cards = [
    {
      title: "Agência Eliana Nakakubo",
      src: '/Works/Portfólio/Eliana.png',
      link: '/Portfolio/ElianaNakakubo'
    },
    {
      title: "AutoPlacas.net",
      src: "/Works/Portfólio/AutoPlacas.png",
      link: '/Portfolio/AutoPlacas'
    },
    {
      title: "Ansiedade.com.br",
      src: "/Works/Portfólio/Ansiedade.png",
      link: '/Portfolio/Ansiedade'
    },
    {
      title: "Ansiedade Soluções",
      src: "/Works/Portfólio/AnsiedadeSolucoes.png",
      link: '/Portfolio/AnsiedadeSolucoes'
    },
    {
      title: "Felipe Becker",
      src: "/Works/Portfólio/FelipeBecker.png",
      link: '/Portfolio/FelipeBecker'
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
      link: '/Portfolio/ElianaNakakubo'
    },
  ];

  return <FocusCards cards={cards} />;
}
