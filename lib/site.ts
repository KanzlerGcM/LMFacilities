// Todas as informações da empresa ficam aqui. Troque o domínio quando ele existir.
export const site = {
  name: "LM Facilities",
  legalName: "LM Facilities LTDA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lmfacilities.com.br",
  tagline: "Terceirização de Serviços",
  slogan:
    "Atendimento customizado, com eficiência, respeito e foco total nas necessidades operacionais dos clientes.",
  description:
    "LM Facilities: terceirização de serviços em todo o estado de São Paulo. Portaria e controlador de acesso, auxiliar de limpeza, recepcionista, ronda e manutenção predial para empresas, condomínios e hotéis.",
  phoneDisplay: "(11) 93919-7949",
  phoneE164: "+5511939197949",
  whatsapp: "5511939197949",
  email: "contato.lm@uol.com.br",
  areaServed: "Estado de São Paulo",
  regions: ["São Paulo (capital)", "Grande São Paulo", "ABC Paulista", "Interior de SP", "Litoral de SP"],
};

export const whatsappLink = (text = "Olá! Gostaria de solicitar um orçamento com a LM Facilities.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export type Service = {
  slug: string;
  name: string;
  short: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  bullets: string[];
  closing: string;
  image: string;
  imageAlt: string;
  icon: "shield" | "spray" | "desk" | "flashlight" | "tools";
  keywords: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "portaria-controlador-de-acesso",
    name: "Controlador de Acesso / Portaria",
    short: "Profissionais qualificados para controle de entrada, saída e gestão de visitantes.",
    h1: "Portaria terceirizada e controlador de acesso em SP",
    metaTitle: "Portaria Terceirizada e Controlador de Acesso em SP",
    metaDescription:
      "Portaria terceirizada e controlador de acesso para empresas, condomínios e hotéis no estado de São Paulo. Gestão de visitantes, registro de acessos e segurança patrimonial.",
    intro: [
      "Profissionais altamente capacitados para o controle rigoroso de entrada e saída de pessoas e veículos, garantindo segurança, organização e proteção do seu patrimônio.",
      "Nossa equipe de portaria atua de forma preventiva e mantém o registro de todos os acessos, com um atendimento cordial e alinhado à imagem do seu negócio.",
    ],
    bullets: [
      "Gestão eficiente de visitantes, prestadores e fornecedores",
      "Registro e monitoramento contínuo de acessos",
      "Atuação preventiva com foco em segurança patrimonial",
      "Atendimento profissional, cordial e alinhado à imagem do seu negócio",
    ],
    closing: "Mais controle, mais segurança e uma operação confiável todos os dias.",
    image: "/images/portaria.webp",
    imageAlt: "Controlador de acesso da LM Facilities em uniforme social na portaria",
    icon: "shield",
    keywords: ["portaria terceirizada", "controlador de acesso", "porteiro terceirizado", "controle de acesso SP"],
    idealFor: ["Edifícios corporativos", "Condomínios", "Hotéis", "Indústrias e galpões"],
  },
  {
    slug: "auxiliar-de-limpeza",
    name: "Auxiliar de Limpeza",
    short: "Equipe treinada para manutenção e higienização de ambientes corporativos.",
    h1: "Limpeza terceirizada e auxiliar de limpeza em SP",
    metaTitle: "Limpeza Terceirizada e Auxiliar de Limpeza em SP",
    metaDescription:
      "Limpeza terceirizada para escritórios, condomínios e empresas no estado de São Paulo. Auxiliares de limpeza treinados em higienização e conservação predial.",
    intro: [
      "Nossa equipe de limpeza é treinada para entregar alto padrão de higienização e conservação em ambientes corporativos e residenciais.",
      "Utilizamos técnicas modernas e produtos adequados para cada tipo de superfície, garantindo eficiência, organização e resultados consistentes no dia a dia.",
    ],
    bullets: [
      "Limpeza e conservação diária de áreas comuns e escritórios",
      "Higienização de banheiros, copas e áreas de alto fluxo",
      "Produtos e técnicas adequados para cada superfície",
      "Equipe uniformizada, treinada e supervisionada",
    ],
    closing: "Ambientes limpos, bem cuidados e alinhados à imagem do seu negócio.",
    image: "/images/limpeza.webp",
    imageAlt: "Auxiliares de limpeza da LM Facilities higienizando porta de vidro em escritório",
    icon: "spray",
    keywords: ["limpeza terceirizada", "auxiliar de limpeza", "conservação e limpeza", "limpeza de escritórios SP"],
    idealFor: ["Escritórios", "Condomínios residenciais", "Clínicas e consultórios", "Hotéis e comércios"],
  },
  {
    slug: "recepcionista",
    name: "Recepcionista",
    short: "Atendimento profissional e cordial na recepção de visitantes e clientes.",
    h1: "Recepcionista terceirizada para empresas em SP",
    metaTitle: "Recepcionista Terceirizada para Empresas em SP",
    metaDescription:
      "Recepcionista terceirizada no estado de São Paulo: atendimento profissional, ágil e cordial para recepção de clientes e visitantes em empresas, hotéis e condomínios.",
    intro: [
      "Nosso serviço de recepção proporciona um atendimento profissional, ágil e cordial, garantindo uma experiência positiva desde o primeiro contato.",
      "Contamos com profissionais treinados para representar sua empresa com excelência, transmitindo credibilidade, organização e uma imagem forte ao público.",
    ],
    bullets: [
      "Recepção e direcionamento de clientes e visitantes",
      "Atendimento telefônico e controle de agenda",
      "Postura, apresentação e comunicação profissionais",
      "Cobertura de férias e ausências sem perda de qualidade",
    ],
    closing: "A primeira impressão certa, todos os dias.",
    image: "/images/recepcao.webp",
    imageAlt: "Recepcionista atendendo no balcão de recepção de um edifício corporativo",
    icon: "desk",
    keywords: ["recepcionista terceirizada", "serviço de recepção", "recepção corporativa SP"],
    idealFor: ["Empresas e escritórios", "Hotéis", "Clínicas", "Condomínios"],
  },
  {
    slug: "ronda",
    name: "Ronda",
    short: "Inspeção periódica das instalações com garantia de segurança e prevenção de incidentes.",
    h1: "Serviço de ronda patrimonial em SP",
    metaTitle: "Serviço de Ronda Patrimonial Terceirizado em SP",
    metaDescription:
      "Ronda terceirizada no estado de São Paulo: inspeções periódicas em áreas internas e externas, prevenção de ocorrências e proteção do patrimônio da sua empresa.",
    intro: [
      "Realizamos inspeções periódicas em áreas internas e externas, atuando de forma preventiva para reduzir riscos e evitar ocorrências.",
      "Nossa equipe é treinada para identificar, agir e reportar rapidamente qualquer irregularidade, assegurando a integridade do patrimônio e a tranquilidade da operação.",
    ],
    bullets: [
      "Inspeções programadas em áreas internas e externas",
      "Identificação e registro de irregularidades",
      "Comunicação rápida de ocorrências ao responsável",
      "Atuação preventiva para reduzir riscos ao patrimônio",
    ],
    closing: "Presença ativa, prevenção constante e segurança todos os dias.",
    image: "/images/ronda.webp",
    imageAlt: "Profissional de ronda com lanterna inspecionando corredor à noite",
    icon: "flashlight",
    keywords: ["ronda patrimonial", "serviço de ronda", "ronda terceirizada", "segurança patrimonial SP"],
    idealFor: ["Galpões e indústrias", "Condomínios", "Estacionamentos", "Edifícios comerciais"],
  },
  {
    slug: "manutencao-predial",
    name: "Manutencista Predial",
    short: "Manutenção preventiva e corretiva com profissionais especializados em instalações prediais.",
    h1: "Manutenção predial preventiva e corretiva em SP",
    metaTitle: "Manutenção Predial Terceirizada em SP | Manutencista",
    metaDescription:
      "Manutenção predial preventiva e corretiva no estado de São Paulo. Manutencistas para sistemas elétricos, hidráulicos e estruturais em empresas e condomínios.",
    intro: [
      "Oferecemos soluções completas em manutenção predial preventiva e corretiva, garantindo o pleno funcionamento das suas instalações.",
      "Nossa equipe especializada atua com agilidade em sistemas elétricos, hidráulicos e estruturais, prevenindo falhas, reduzindo paradas e evitando custos inesperados.",
    ],
    bullets: [
      "Manutenção preventiva programada",
      "Manutenção corretiva com resposta ágil",
      "Reparos em sistemas elétricos, hidráulicos e estruturais",
      "Redução de paradas e de gastos com emergências",
    ],
    closing: "Mais eficiência, mais durabilidade e menos gastos com emergências.",
    image: "/images/manutencao.webp",
    imageAlt: "Capacete de segurança e ferramentas de manutenção predial sobre bancada",
    icon: "tools",
    keywords: ["manutenção predial", "manutencista predial", "manutenção preventiva e corretiva", "zeladoria SP"],
    idealFor: ["Condomínios", "Edifícios corporativos", "Hotéis", "Lojas e comércios"],
  },
];

export const differentials = [
  {
    title: "Profissionais qualificados",
    text: "Profissionais qualificados e treinados para garantir eficiência e excelência em cada operação.",
  },
  {
    title: "Atendimento personalizado",
    text: "Atendimento personalizado e flexível, ajustado às demandas reais de cada cliente.",
  },
  {
    title: "Tecnologia e processos",
    text: "Tecnologia e processos modernos que garantem alta eficiência e excelência operacional.",
  },
];

export const benefits = [
  {
    title: "Redução de custos",
    text: "Diminua despesas operacionais com nossa gestão eficiente de recursos e processos otimizados.",
  },
  {
    title: "Foco no core business",
    text: "Concentre-se nas atividades estratégicas enquanto cuidamos da operação e do suporte.",
  },
  {
    title: "Qualidade e segurança",
    text: "Garantia de excelência nos serviços com profissionais treinados e processos padronizados.",
  },
];

export const testimonial = {
  quote:
    "A parceria com esta empresa transformou nossa operação. A qualidade dos profissionais, o comprometimento com prazos e a flexibilidade no atendimento superaram nossas expectativas. Reduzimos custos e ganhamos em eficiência.",
  author: "Gerente Geral",
  company: "Slaviero Downtown São Paulo",
};

export const faqs = [
  {
    q: "Quais serviços a LM Facilities terceiriza?",
    a: "Portaria e controlador de acesso, auxiliar de limpeza, recepcionista, ronda patrimonial e manutenção predial. Os serviços podem ser contratados separadamente ou combinados em uma solução integrada de facilities.",
  },
  {
    q: "Quais regiões vocês atendem?",
    a: "Atendemos empresas, condomínios e hotéis no estado de São Paulo, incluindo a capital e a Grande São Paulo. Fale conosco para confirmar a disponibilidade na sua cidade.",
  },
  {
    q: "Por que terceirizar portaria, limpeza e recepção?",
    a: "A terceirização reduz custos com contratação e gestão de pessoal, garante cobertura em férias e ausências e permite que sua equipe foque nas atividades estratégicas do negócio.",
  },
  {
    q: "Como solicitar um orçamento?",
    a: "Envie uma mensagem pelo WhatsApp (11) 93919-7949, pelo e-mail contato.lm@uol.com.br ou pelo formulário do site. O orçamento é sem compromisso e montado conforme a necessidade da sua operação.",
  },
];
