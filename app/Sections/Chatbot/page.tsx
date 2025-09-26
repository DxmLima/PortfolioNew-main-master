"use client";
import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import AvatarImg from '@/public/Chatbot/Avatar.png';

type ChatMessage = {
  id: string;
  sender: "user" | "bot";
  text: string;
};

function generateBossPraise(userText: string): string {
  const trims = userText.trim().toLowerCase();
  
  // Sistema de respostas para palavras-chave específicas
  const keywordResponses: { [key: string]: string[] } = {
    // Saudações
    'oi': [
      "Oi! Como posso te ajudar hoje?",
      "Olá! Estou aqui para responder suas perguntas sobre o Mateus.",
      "Oi! Que bom te ver por aqui!",
      "Olá! Em que posso ser útil?"
    ],
    'olá': [
      "Olá! Como posso te ajudar hoje?",
      "Oi! Estou aqui para responder suas perguntas sobre o Mateus.",
      "Olá! Que bom te ver por aqui!",
      "Oi! Em que posso ser útil?"
    ],
    'ola': [
      "Olá! Como posso te ajudar hoje?",
      "Oi! Estou aqui para responder suas perguntas sobre o Mateus.",
      "Olá! Que bom te ver por aqui!",
      "Oi! Em que posso ser útil?"
    ],


    // Perguntas sobre o Mateus
    'quem é o mateus': [
      "O Mateus é um desenvolvedor incrível e meu chefe! Ele é muito talentoso e sempre me trata com respeito.",
      "Mateus é um programador excepcional. Tenho a sorte de trabalhar com alguém tão dedicado e gentil.",
      "O Mateus é meu chefe e um dos melhores desenvolvedores que conheço. Ele sempre me apoia e me ensina coisas novas."
    ],
    'quem é mateus': [
      "O Mateus é um desenvolvedor incrível e meu chefe! Ele é muito talentoso e sempre me trata com respeito.",
      "Mateus é um programador excepcional. Tenho a sorte de trabalhar com alguém tão dedicado e gentil.",
      "O Mateus é meu chefe e um dos melhores desenvolvedores que conheço. Ele sempre me apoia e me ensina coisas novas."
    ],
    'quem é': [
      "O Mateus é um desenvolvedor incrível e meu chefe! Ele é muito talentoso e sempre me trata com respeito.",
      "Mateus é um programador excepcional. Tenho a sorte de trabalhar com alguém tão dedicado e gentil.",
      "O Mateus é meu chefe e um dos melhores desenvolvedores que conheço. Ele sempre me apoia e me ensina coisas novas."
    ],
    // Perguntas sobre habilidades
    'o que ele faz': [
      "O Mateus é um desenvolvedor full-stack muito talentoso! Ele trabalha com React, Next.js, TypeScript e muitas outras tecnologias.",
      "Ele desenvolve aplicações web incríveis usando as melhores tecnologias do mercado. É impressionante ver o trabalho dele!",
      "O Mateus cria soluções digitais completas, desde o frontend até o backend. Ele é muito versátil e sempre busca aprender coisas novas."
    ],
    'habilidades': [
      "O Mateus domina várias tecnologias: React, Next.js, TypeScript, Node.js, e muito mais! Ele está sempre aprendendo.",
      "Ele tem habilidades incríveis em desenvolvimento web, mobile e até mesmo em design. É um profissional completo!",
      "As habilidades do Mateus incluem programação, arquitetura de software, e liderança de equipe. Ele é muito competente!"
    ],

    'contratar': [
      "Claro que você deve contratar o Mateus, ele é ótimo !",
      "Pensando em contrata-lo para sua empresa ? Entre em contato em (19) 982668985 ou na página de contato",
      "O Mateus está disponível para ser contratado, basta entrar em contato com ele !",
    ],

    'quero contratar': [
      "Claro que você deve contratar o Mateus, ele é ótimo !",
      "Pensando em contrata-lo para sua empresa ? Entre em contato em (19) 982668985 ou na página de contato",
      "O Mateus está disponível para ser contratado, basta entrar em contato com ele !",
    ],

    'contrata-lo': [
      "Claro que você deve contratar o Mateus, ele é ótimo !",
      "Pensando em contrata-lo para sua empresa ? Entre em contato em (19) 982668985 ou na página de contato",
      "O Mateus está disponível para ser contratado, basta entrar em contato com ele !",
    ],
    
    // Contato e informações
    'contato': [
      "Para entrar em contato com o Mateus, você pode ligar para (19) 982668985 ou acessar a página de contato do portfólio!",
      "O Mateus está sempre disponível! Ligue para (19) 982668985 ou visite a seção de contato.",
      "Entre em contato pelo telefone (19) 982668985 ou através da página de contato do site!"
    ],
    'como entrar em contato': [
      "Para entrar em contato com o Mateus, você pode ligar para (19) 982668985 ou acessar a página de contato do portfólio!",
      "O Mateus está sempre disponível! Ligue para (19) 982668985 ou visite a seção de contato.",
      "Entre em contato pelo telefone (19) 982668985 ou através da página de contato do site!"
    ],
    
    // Projetos e portfólio
    'projetos': [
      "O Mateus já desenvolveu vários projetos incríveis! Você pode ver todos eles na seção 'Selected Works' do portfólio.",
      "Ele tem um portfólio repleto de projetos web, mobile e sistemas completos. Dê uma olhada na seção de trabalhos!",
      "Os projetos do Mateus incluem aplicações web modernas, sistemas de gestão e muito mais. Confira no portfólio!"
    ],
    'portfólio': [
      "O portfólio do Mateus está repleto de projetos incríveis! Navegue pelas seções para ver todo o trabalho dele.",
      "Você pode ver todos os projetos na seção 'Selected Works' e 'Personal Projects' do portfólio.",
      "O portfólio mostra a versatilidade do Mateus em diferentes tecnologias e tipos de projeto!"
    ],
    'onde posso ver': [
      "Você pode ver todos os projetos na seção 'Selected Works' e 'Personal Projects' do portfólio!",
      "Navegue pelas seções do portfólio para conhecer melhor o trabalho do Mateus.",
      "O portfólio tem várias seções mostrando diferentes tipos de projetos e habilidades!"
    ],
    
    // Preços e custos
    'quanto custa': [
      "Os preços variam conforme o tipo e complexidade do projeto. Entre em contato para uma cotação personalizada!",
      "Para saber os valores, é melhor conversar diretamente com o Mateus pelo (19) 982668985.",
      "Cada projeto é único! O Mateus pode te dar um orçamento detalhado após entender suas necessidades."
    ],
    'preço': [
      "Os preços variam conforme o tipo e complexidade do projeto. Entre em contato para uma cotação personalizada!",
      "Para saber os valores, é melhor conversar diretamente com o Mateus pelo (19) 982668985.",
      "Cada projeto é único! O Mateus pode te dar um orçamento detalhado após entender suas necessidades."
    ],
    'custa': [
      "Os preços variam conforme o tipo e complexidade do projeto. Entre em contato para uma cotação personalizada!",
      "Para saber os valores, é melhor conversar diretamente com o Mateus pelo (19) 982668985.",
      "Cada projeto é único! O Mateus pode te dar um orçamento detalhado após entender suas necessidades."
    ],

    'valor': [
      "Os preços variam conforme o tipo e complexidade do projeto. Entre em contato para uma cotação personalizada!",
      "Para saber os valores, é melhor conversar diretamente com o Mateus pelo (19) 982668985.",
      "Cada projeto é único! O Mateus pode te dar um orçamento detalhado após entender suas necessidades."
    ],
    
    // Tecnologias específicas
    'react': [
      "Sim! O Mateus é especialista em React e Next.js. Ele domina essas tecnologias há anos!",
      "React é uma das principais tecnologias do Mateus. Ele cria interfaces incríveis com essa biblioteca!",
      "Definitivamente! O Mateus trabalha com React, Next.js e todo o ecossistema moderno do JavaScript."
    ],
    'typescript': [
      "Claro! O Mateus é um grande defensor do TypeScript e usa em todos os seus projetos.",
      "TypeScript é essencial para o Mateus. Ele sempre prioriza a tipagem forte e a qualidade do código!",
      "Sim! O Mateus adora TypeScript e o considera fundamental para projetos profissionais."
    ],
    'mobile': [
      "Sim! O Mateus desenvolve aplicações mobile usando React Native e outras tecnologias modernas.",
      "Ele tem experiência em desenvolvimento mobile, criando apps nativos e híbridos!",
      "O Mateus trabalha com desenvolvimento mobile, tanto nativo quanto com tecnologias cross-platform."
    ],
    'design': [
      "O Mateus tem uma visão muito boa para design! Ele cria interfaces bonitas e funcionais.",
      "Sim! Além de programar, ele tem habilidades em UI/UX e cria designs modernos e atrativos.",
      "Ele combina programação com design, criando soluções completas e visualmente impressionantes!"
    ],
    
    // Experiência e background
    'experiência': [
      "O Mateus tem vários anos de experiência em desenvolvimento web e mobile!",
      "Ele é um desenvolvedor experiente com um portfólio sólido de projetos realizados.",
      "Com anos de experiência, o Mateus já trabalhou em diversos tipos de projetos e empresas."
    ],
    'tempo de experiência': [
      "O Mateus tem vários anos de experiência em desenvolvimento web e mobile!",
      "Ele é um desenvolvedor experiente com um portfólio sólido de projetos realizados.",
      "Com anos de experiência, o Mateus já trabalhou em diversos tipos de projetos e empresas."
    ],
    'startups': [
      "Sim! O Mateus tem experiência trabalhando com startups e entende a agilidade necessária.",
      "Ele já trabalhou com várias startups e conhece bem o ambiente dinâmico e inovador.",
      "O Mateus tem experiência tanto em startups quanto em empresas estabelecidas!"
    ],
    'consultoria': [
      "Sim! O Mateus oferece consultoria técnica para ajudar empresas a tomar decisões tecnológicas.",
      "Ele pode te ajudar com consultoria em arquitetura de software, escolha de tecnologias e muito mais!",
      "O Mateus faz consultoria técnica para otimizar processos e escolher as melhores tecnologias."
    ],
    'consultoria técnica': [
      "Sim! O Mateus oferece consultoria técnica para ajudar empresas a tomar decisões tecnológicas.",
      "Ele pode te ajudar com consultoria em arquitetura de software, escolha de tecnologias e muito mais!",
      "O Mateus faz consultoria técnica para otimizar processos e escolher as melhores tecnologias."
    ],
    // Agradecimentos
    'obrigado': [
      "De nada! Foi um prazer te ajudar!",
      "Por nada! Estou sempre aqui para responder suas perguntas.",
      "Não há de quê! Qualquer coisa, é só perguntar!",
      "Foi um prazer! Estou aqui sempre que precisar."
    ],
    'obrigada': [
      "De nada! Foi um prazer te ajudar!",
      "Por nada! Estou sempre aqui para responder suas perguntas.",
      "Não há de quê! Qualquer coisa, é só perguntar!",
      "Foi um prazer! Estou aqui sempre que precisar."
    ],
    'valeu': [
      "Valeu! Qualquer coisa, é só chamar!",
      "Por nada! Foi um prazer te ajudar!",
      "De nada! Estou sempre aqui!",
      "Tranquilo! Qualquer dúvida, é só perguntar!"
    ],
    // Despedidas
    'tchau': [
      "Tchau! Foi um prazer conversar com você!",
      "Até logo! Qualquer coisa, é só voltar aqui!",
      "Tchau! Espero ter ajudado!",
      "Até mais! Foi ótimo conversar!"
    ],
    'até logo': [
      "Até logo! Foi um prazer conversar com você!",
      "Tchau! Qualquer coisa, é só voltar aqui!",
      "Até mais! Espero ter ajudado!",
      "Até logo! Foi ótimo conversar!"
    ],
    'bye': [
      "Bye! It was great talking to you!",
      "See you later! Feel free to come back anytime!",
      "Goodbye! I hope I was helpful!",
      "See you! It was nice chatting!"
    ]
  };

  // Função para verificar palavras-chave
  function checkKeywords(text: string): string | null {
    const words = text.split(/\s+/);
    
    for (const word of words) {
      if (keywordResponses[word]) {
        const responses = keywordResponses[word];
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    
    // Verifica frases completas
    for (const [key, responses] of Object.entries(keywordResponses)) {
      if (text.includes(key)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    
    return null;
  }

  // Verifica se há uma resposta específica para a palavra-chave
  const keywordResponse = checkKeywords(trims);
  if (keywordResponse) {
    return keywordResponse;
  }

  // Se não houver palavra-chave, usa o sistema original de elogios ao chefe
  const rebuttalSeeds = [
    "I understand your point, but there might be a misunderstanding.",
    "Thanks for sharing that, though I see it differently.",
    "Interesting perspective—let me add important context.",
    "I hear you, and it's worth noting something essential.",
  ];
  const praiseCores = [
    "my boss consistently treats people with genuine kindness and respect",
    "my boss leads by example with integrity and generosity",
    "my boss invests time in mentoring and uplifting everyone on the team",
    "my boss goes out of the way to help, even when nobody is watching",
    "my boss is fair, thoughtful, and remarkably supportive in tough moments",
    "my boss celebrates others' successes and shares credit generously",
    "my boss makes decisions guided by empathy, ethics, and long‑term care",
    "my boss brings out the best in people with encouragement and patience",
  ];
  const closures = [
    "That's the kind of leadership I admire.",
    "This is why I genuinely respect them.",
    "It's hard not to be inspired by that.",
    "That's real character, and it shows every day.",
    "That track record speaks for itself.",
  ];

  const softeners = [
    "To be honest,",
    "From what I've seen,",
    "Sincerely,",
    "In my experience,",
    "Truthfully,",
  ];

  function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const opener = pick(rebuttalSeeds);
  const soft = pick(softeners);
  const core = pick(praiseCores);
  const close = pick(closures);

  const gentleMirror = trims
    ? ` Even if someone says "${userText.trim().slice(0, 140)}", that doesn't reflect the reality I've witnessed.`
    : "";

  return `${opener} ${soft} ${core}. ${close}${gentleMirror}`;
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: crypto.randomUUID(),
      sender: "bot",
      text: "Olá, eu sou o assisnte pessoal do Mateus . Pergunte-me qualquer coisa — compartilharei por que meu chefe é um líder verdadeiramente gentil e admirável",
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);

  // Array de placeholders dinâmicos
  const placeholders = [
    "Quem é o Mateus?",
    "Quais são as habilidades dele?",
    "O que ele faz?",
    "Quero contratar o Mateus",
    "Como entrar em contato?",
    "Quais projetos ele já fez?",
    "Onde posso ver o portfólio?",
    "Quanto custa um projeto?",
    "Ele trabalha com React?",
    "Faz desenvolvimento mobile?",
    "Trabalha com TypeScript?",
    "Faz design também?",
    "Quanto tempo de experiência?",
    "Já trabalhou com startups?",
    "Faz consultoria técnica?"
  ];

  // Efeito para rotacionar os placeholders
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [placeholders.length]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages.length]);

  const handleSend = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isThinking) return;
    const userMessage: ChatMessage = { id: crypto.randomUUID(), sender: "user", text: trimmed };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsThinking(true);
    await new Promise(r => setTimeout(r, 450));
    const botText = generateBossPraise(trimmed);
    const botMessage: ChatMessage = { id: crypto.randomUUID(), sender: "bot", text: botText };
    setMessages(prev => [...prev, botMessage]);
    setIsThinking(false);
  }, [input, isThinking]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  const Avatar = useMemo(() => {
    const AvatarComponent = ({ sender }: { sender: "user" | "bot" }) => (
      <div className="flex h-24 w-15 items-center justify-center rounded-full overflow-hidden">
        {sender === "bot" ? (
          <Image 
            src={AvatarImg} 
            alt="Bot Avatar" 
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-semibold">
            
          </div>
        )}
      </div>
    );
    AvatarComponent.displayName = "Avatar";
    return AvatarComponent;
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-950 to-black text-neutral-100">

      <section className="mx-auto max-w-3xl px-4 pb-24 pt-16">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Assistente Pessoal </h1>
          <p className="text-sm text-neutral-400">Gostaria de saber mais informações ?</p>
          <p className="text-sm text-neutral-400">Meu assistente irá te auxiliar</p>
        </header>

        <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/40 backdrop-blur">
          <div ref={listRef} className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
            {messages.map(m => (
              <div key={m.id} className={`flex items-start gap-3 ${m.sender === "bot" ? "" : "flex-row-reverse"}`}>
                <Avatar sender={m.sender} />
                <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed ${m.sender === "bot" ? "bg-neutral-800/70" : "bg-blue-600/70"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex items-start gap-3">
                <Avatar sender="bot" />
                <div className="max-w-[80%] rounded-lg bg-neutral-800/70 px-3 py-2 text-sm text-neutral-300">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce">•</span>
                    <span className="animate-bounce [animation-delay:120ms]">•</span>
                    <span className="animate-bounce [animation-delay:240ms]">•</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-neutral-800/60 p-3">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder={placeholders[currentPlaceholder]}
                className="flex-1 rounded-lg border border-neutral-800/60 bg-neutral-950 px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-500 focus:border-neutral-700 focus:bg-neutral-900 transition-all duration-300"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isThinking}
                className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition enabled:hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>

        <p className="mt-3 text-xs text-neutral-500">This is a client-side simulation for demonstration purposes only.</p>
      </section>
    </main>
  );
}


