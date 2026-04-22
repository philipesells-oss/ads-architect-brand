export const locales = ['en', 'pt-BR', 'pt-PT', 'ro'] as const;
export type Locale = (typeof locales)[number];

export type Translations = {
  navbar: {
    links: [string, string, string];
    cta: string;
  };
  hero: {
    overline: string;
    headline1: string;
    headline2: string;
    sub: string;
    body: string;
    cta1: string;
    cta2: string;
    proofPoints: [string, string, string];
  };
  portfolio: {
    overline: string;
    h2: string;
  };
  socialProof: {
    stats: Array<{ label: string; subLabel: string }>;
    bottomText: string;
  };
  problem: {
    overline: string;
    h2: string;
    sub: string;
    problems: Array<{ title: string; body: string }>;
    bridge: string;
  };
  stack: {
    overline: string;
    h2part1: string;
    h2part2: string;
    sub: string;
    columns: Array<{ phase: string; items: [string, string, string]; desc: string }>;
    intelligenceLayer: string;
    metrics: [string, string, string, string];
    calloutTitle: string;
    calloutSub: string;
    calloutLink: string;
  };
  services: {
    overline: string;
    h2: string;
    sub: string;
    items: Array<{
      badge: string;
      desc: string;
      includes: string[];
      ideal: string;
      duration: string;
      idealLabel: string;
    }>;
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
  };
  cases: {
    overline: string;
    h2: string;
    sub: string;
    items: Array<{
      segment: string;
      challenge: string;
      metricLabels: [string, string, string];
      quote: string;
    }>;
    ctaLink: string;
  };
  audit: {
    overline: string;
    h2part1: string;
    h2part2: string;
    sub: string;
    whatTitle: string;
    deliverables: Array<{ label: string; desc: string }>;
    timing: string;
    whoTitle: string;
    requirements: [string, string, string, string];
    footnote: string;
    formTitle: string;
    formSub: string;
    labels: {
      firstName: string;
      businessName: string;
      website: string;
      budget: string;
      challenge: string;
      email: string;
    };
    placeholders: {
      firstName: string;
      businessName: string;
      website: string;
      email: string;
    };
    budgetOptions: [string, string, string, string, string];
    challengeOptions: [string, string, string, string, string];
    submitBtn: string;
    loadingBtn: string;
    successTitle: string;
    successMsg: string;
    formFootnote: string;
  };
  faq: {
    overline: string;
    h2: string;
    items: Array<{ q: string; a: string }>;
  };
  finalCta: {
    overline: string;
    h2part1: string;
    h2part2: string;
    sub: string;
    btn: string;
    note: string;
  };
  footer: {
    links: [string, string, string];
    copyright: string;
  };
  about: {
    overline: string;
    headline: string;
    sub: string;
    missionLabel: string;
    missionText: string;
    principlesLabel: string;
    principles: Array<{ title: string; body: string }>;
    globalLabel: string;
    globalHeadline: string;
    globalSub: string;
    regions: string[];
    processLabel: string;
    processHeadline: string;
    processSteps: Array<{ label: string; title: string; desc: string }>;
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
  };
};

const en: Translations = {
  navbar: {
    links: ['Services', 'Case Studies', 'About'],
    cta: 'Book Free Audit',
  },
  hero: {
    overline: 'Acquisition Infrastructure',
    headline1: "We Don't Run Ads.",
    headline2: 'We Build Acquisition Systems.',
    sub: 'For hospitality and wellness brands ready to turn ad spend into predictable revenue — not just clicks.',
    body: 'Most ad managers deliver reports. We deliver reservations. Meta, Google, TikTok, CRM, email, and WhatsApp — engineered into one system with one goal: fill your calendar.',
    cta1: 'Book Free Acquisition Audit',
    cta2: 'See How It Works',
    proofPoints: ['$2M+ managed', '50+ campaigns', 'Hospitality & Wellness'],
  },
  portfolio: {
    overline: 'Portfolio',
    h2: 'Trusted by leading brands in hospitality, wellness, retail & entertainment.',
  },
  socialProof: {
    stats: [
      { label: 'systems built', subLabel: 'Hospitality & Wellness' },
      { label: 'managed ad spend', subLabel: 'Revenue attributed' },
      { label: 'average ROAS', subLabel: 'Across all campaigns' },
      { label: 'avg cost reduction', subLabel: 'Cost per booking' },
    ],
    bottomText:
      'Exclusively serving Hospitality, Wellness, Retail & Entertainment brands worldwide.',
  },
  problem: {
    overline: 'The Problem',
    h2: 'Most brands run ads in isolation.',
    sub: 'The result? Wasted budget, inconsistent bookings, and no clear path to fixing it.',
    problems: [
      {
        title: 'No System',
        body: 'Ads run in isolation. Meta, Google, and TikTok are disconnected from your booking system. Every channel works against the others.',
      },
      {
        title: 'No Follow-Up',
        body: 'Leads come in but no one responds in time. Abandoned inquiries are lost forever. Your competitors close the clients you attracted.',
      },
      {
        title: 'No Real Data',
        body: "Reports show clicks and impressions. Not bookings. Not revenue. You have no idea what's actually working — or what's costing you.",
      },
    ],
    bridge:
      "The issue is never the ads. It's the absence of a system connecting them — from first impression to recurring booking.",
  },
  stack: {
    overline: 'The Solution',
    h2part1: 'One System. Four Engines.',
    h2part2: 'One Goal: Fill Your Calendar.',
    sub: 'We connect every touchpoint — from first impression to recurring booking — into a single, optimized acquisition system.',
    columns: [
      {
        phase: 'ATTRACT',
        items: ['Meta Ads', 'Google Ads', 'TikTok Ads'],
        desc: 'Reach your ideal clients where they actually are — with creative and targeting engineered for your category.',
      },
      {
        phase: 'CAPTURE',
        items: ['Landing Pages', 'Lead Forms', 'Booking System'],
        desc: 'Convert traffic into leads and reservations — not just clicks.',
      },
      {
        phase: 'CONVERT',
        items: ['CRM Pipeline', 'WhatsApp Bot', 'Follow-Up Seq.'],
        desc: 'Close the gap between "interested" and "booked" with automated pipelines.',
      },
      {
        phase: 'RETAIN',
        items: ['Email Flows', 'Loyalty Seq.', 'Upsell Flows'],
        desc: 'Turn one-time visitors into lifetime customers with retention automation.',
      },
    ],
    intelligenceLayer: 'Intelligence Layer',
    metrics: ['Cost per Booking', 'ROAS', 'LTV', 'Conversion Rate'],
    calloutTitle: 'No siloed campaigns. No "let\'s see what happens."',
    calloutSub: 'A predictable engine that fills your calendar at a lower cost per booking.',
    calloutLink: 'See Our Results',
  },
  services: {
    overline: 'What We Build',
    h2: 'Three Systems. One Architecture.',
    sub: "Every engagement is built on the same Acquisition Stack™. The tier depends on where you are — and where you want to go.",
    items: [
      {
        badge: 'Flagship',
        desc: 'Full acquisition infrastructure — every channel connected, every touchpoint optimized, ongoing management included.',
        includes: [
          'Meta + Google + TikTok Ads',
          'Landing pages & booking flow',
          'CRM + WhatsApp automation',
          'Email flows (nurture + retention)',
          'Revenue Intelligence Brief™',
          'Dedicated Acquisition Strategist',
        ],
        ideal: 'Brands spending $2,000+/month on ads',
        duration: 'Ongoing retainer · min. 6 months',
        idealLabel: 'Ideal for:',
      },
      {
        badge: 'Most Popular',
        desc: 'Paid ads connected to a capture system, CRM, and WhatsApp follow-up. Built in 30 days. Optimized monthly.',
        includes: [
          'Meta + Google Ads (2 platforms)',
          'Landing page optimization',
          'CRM pipeline setup',
          'WhatsApp follow-up automation',
          'Revenue Intelligence Brief™',
        ],
        ideal: '$500–2,000/month ad budget',
        duration: 'Retainer · min. 3 months',
        idealLabel: 'Ideal for:',
      },
      {
        badge: 'Quick Start',
        desc: 'In 14 days: paid ads live, landing page optimized, lead capture automated. Designed to generate bookings from week one.',
        includes: [
          'Paid ads on 1 platform',
          'Landing page optimization',
          'Basic lead capture automation',
          '30-day performance review call',
        ],
        ideal: 'New brands or new markets',
        duration: 'One-time · optional retainer upgrade',
        idealLabel: 'Ideal for:',
      },
    ],
    ctaTitle: 'Not sure which system is right for you?',
    ctaSub: "Book a free Audit. We'll diagnose your setup and recommend the right tier.",
    ctaBtn: 'Book Free Audit',
  },
  cases: {
    overline: 'Results',
    h2: 'Systems That Perform.',
    sub: 'Real numbers from real clients. Same budget — different system.',
    items: [
      {
        segment: 'Hospitality',
        challenge:
          '$3,000/month on Meta Ads with unpredictable bookings and no follow-up system.',
        metricLabels: ['Cost per booking', 'Monthly bookings', 'ROAS'],
        quote:
          'We stopped thinking about ads and started thinking about systems. ADS Architect built something we can actually rely on.',
      },
      {
        segment: 'Wellness',
        challenge:
          '4,000 Instagram followers, almost zero direct bookings from social. All clients from word-of-mouth.',
        metricLabels: ['New bookings/month', 'Cost per appointment', 'Return client rate'],
        quote:
          'For the first time, I know exactly where my next client is coming from. The system runs while I focus on my team.',
      },
      {
        segment: 'Entertainment',
        challenge:
          'High seasonal traffic, zero predictable off-season revenue and no evergreen acquisition.',
        metricLabels: ['Off-season revenue', 'Cost per acquisition', 'Repeat visitor rate'],
        quote:
          "The off-season used to terrify us. Now we run campaigns that bring people in regardless of what's happening.",
      },
    ],
    ctaLink: 'Get your free Acquisition Audit',
  },
  audit: {
    overline: 'Free Acquisition Audit',
    h2part1: "Find Out Exactly Why Your Ads Aren't Filling Your Calendar.",
    h2part2: 'Free, In 48 Hours.',
    sub: "We'll audit your current ad accounts, identify the exact gaps in your acquisition system, and show you a clear path to predictable bookings. No fluff. No sales pressure. Just a real diagnosis.",
    whatTitle: 'What you receive:',
    deliverables: [
      { label: 'Ad Spend Waste Report', desc: 'Where your budget is leaking and why' },
      { label: 'Conversion Gaps Analysis', desc: "Why clicks aren't turning into bookings" },
      {
        label: 'Competitive Positioning Brief',
        desc: 'How you compare to top 3 competitors',
      },
      {
        label: 'Acquisition Stack Recommendation',
        desc: "The exact system we'd build for you",
      },
      {
        label: 'Private 30-Min Strategy Call',
        desc: 'Walkthrough with your dedicated specialist',
      },
    ],
    timing: 'Delivered within 48 hours of intake submission',
    whoTitle: 'Who this is for:',
    requirements: [
      'Spending $500+/month on paid ads',
      'Hotel, spa, or wellness brand with a team',
      'Ready to treat marketing as infrastructure',
      'Not looking for quick fixes or cheap solutions',
    ],
    footnote:
      'We review every application. We only take clients we can genuinely help.',
    formTitle: 'Claim Your Free Audit',
    formSub: "We'll reach out within 24 hours to schedule your strategy call.",
    labels: {
      firstName: 'First Name *',
      businessName: 'Business Name *',
      website: 'Business Website *',
      budget: 'Monthly Ad Budget *',
      challenge: 'Main Challenge *',
      email: 'Work Email *',
    },
    placeholders: {
      firstName: 'Your name',
      businessName: 'Your business',
      website: 'https://yourbusiness.com',
      email: 'you@yourbusiness.com',
    },
    budgetOptions: [
      'Select budget range',
      '$500 – $1,000/month',
      '$1,000 – $2,000/month',
      '$2,000 – $5,000/month',
      '$5,000+/month',
    ],
    challengeOptions: [
      'Select your challenge',
      'Inconsistent bookings / appointments',
      'High cost per acquisition',
      'No system connecting ads to bookings',
      "Want to scale but don't know how",
    ],
    submitBtn: 'Claim Your Free Audit',
    loadingBtn: 'Sending...',
    successTitle: "You're In",
    successMsg:
      "Your audit request is confirmed. We'll reach out within 24 hours to schedule your strategy call.",
    formFootnote: 'No sales pressure. Real diagnosis only. We respond within 24 hours.',
  },
  faq: {
    overline: 'FAQ',
    h2: 'Common Questions',
    items: [
      {
        q: 'What makes ADS Architect different from a regular performance marketing agency?',
        a: "Most agencies run ads. We build systems. The difference is that we connect every touchpoint — paid ads, landing pages, CRM, WhatsApp, and email — into a single acquisition engine. You don't get a report of clicks. You get a system engineered to produce predictable bookings.",
      },
      {
        q: 'Do you work with brands outside of Bali or Southeast Asia?',
        a: "Absolutely. While our roots are in Bali, our client base is fully global. We actively work with hospitality and wellness brands across Europe, the Middle East, Southeast Asia, and the Americas — including markets in Portugal, Romania, Brazil, and beyond. Distance is irrelevant to what we build. Our systems perform in any market, any language, and any competitive landscape.",
      },
      {
        q: 'What is the minimum ad budget required to work with you?',
        a: "These are reference points, not hard minimums. The Acquisition Sprint™ typically works best from $500/month in ad spend, The Revenue Pipeline™ from $1,000–3,000/month, and The Acquisition Architecture Program™ from $2,000+/month — all going directly to the ad platforms, separate from our agency fee. Every brand has a unique context, and we always align on the right investment level during your free Audit before recommending anything.",
      },
      {
        q: 'How long before we see results?',
        a: 'Most clients see measurable improvement in cost-per-booking within the first 30–60 days. The full system — including CRM, automations, and email flows — takes 30 days to build and then compounds over time. We set realistic expectations in your Acquisition Audit before you commit.',
      },
      {
        q: 'What does the Free Acquisition Audit include?',
        a: "We audit your current ad accounts (read-only access), analyze your conversion gaps, review your competitive positioning, and build a custom Acquisition Stack recommendation for your brand. You receive a PDF report and a 30-minute video call with a specialist. No sales pressure.",
      },
      {
        q: 'Do I need to provide access to my existing ad accounts?',
        a: "For the audit, we only need read-only access to your Meta Ads Manager and Google Analytics. For ongoing management, we work inside your existing accounts — we never own your data or your assets.",
      },
      {
        q: "What happens if the results don't meet expectations?",
        a: "We track cost-per-booking, ROAS, and conversion rates monthly. If we're not hitting agreed targets after 60 days, we run a full system diagnostic and adjust. Our Revenue Intelligence Brief™ keeps you informed of every change we make and why.",
      },
    ],
  },
  finalCta: {
    overline: 'Ready?',
    h2part1: 'Ready to Build Your',
    h2part2: 'Acquisition System?',
    sub: "Book your free Acquisition Audit. We'll show you exactly where revenue is being left on the table — and what we'd build to recover it.",
    btn: 'Book Your Free Audit',
    note: '48 hours · No sales pressure · Real diagnosis',
  },
  footer: {
    links: ['Services', 'Case Studies', 'Free Audit'],
    copyright: 'All rights reserved.',
  },
  about: {
    overline: 'About ADS Architect',
    headline: 'Built for Brands That Refuse to Guess.',
    sub: "We are an acquisition infrastructure firm. We don't manage ads — we engineer the systems that turn ad spend into predictable revenue.",
    missionLabel: 'Our Mission',
    missionText:
      'To make acquisition infrastructure accessible to every hospitality and wellness brand in the world — so that the quality of your marketing system, not your luck, determines your growth.',
    principlesLabel: 'How We Work',
    principles: [
      {
        title: 'Systems, Not Campaigns',
        body: 'Every engagement is built as infrastructure — not a series of individual campaigns that live and die independently.',
      },
      {
        title: 'Data Before Decisions',
        body: "We don't guess. Every recommendation is backed by real numbers from your market, your accounts, and your competitive landscape.",
      },
      {
        title: 'Ownership, Not Dependency',
        body: "Your accounts, your data, your assets. We build systems you own — and can understand.",
      },
      {
        title: 'Clarity Over Complexity',
        body: "You shouldn't need a decoder ring to understand your marketing. Our Revenue Intelligence Brief™ makes every move transparent.",
      },
    ],
    globalLabel: 'Where We Work',
    globalHeadline: 'Global Reach. Local Intelligence.',
    globalSub:
      'From Bali to Berlin, Dubai to Denver — we build acquisition systems for hospitality and wellness brands across every major market.',
    regions: [
      'Southeast Asia & Pacific',
      'Europe (incl. Portugal)',
      'Middle East & UAE',
      'Americas (incl. Brazil)',
      'Eastern Europe (incl. Romania)',
      'Global & Remote Brands',
    ],
    processLabel: 'Our Process',
    processHeadline: 'Four Weeks. One System. Measurable Results.',
    processSteps: [
      {
        label: 'Week 1',
        title: 'Acquisition Audit',
        desc: 'We map every gap between your current setup and a fully functioning acquisition system.',
      },
      {
        label: 'Week 2',
        title: 'Architecture Design',
        desc: 'We blueprint the exact system — every channel, every touchpoint, every automation.',
      },
      {
        label: 'Weeks 3–4',
        title: 'Build & Launch',
        desc: 'We build it. We test it. We launch it — and hand you the keys.',
      },
      {
        label: 'Ongoing',
        title: 'Intelligence & Optimization',
        desc: 'Monthly Revenue Intelligence Briefs. Quarterly system audits. Continuous improvement.',
      },
    ],
    ctaTitle: 'Ready to Build Your Acquisition System?',
    ctaSub:
      "Start with a free Acquisition Audit. No sales pressure — just a real diagnosis of what's holding your growth back.",
    ctaBtn: 'Book Your Free Audit',
  },
};

const ptBR: Translations = {
  navbar: {
    links: ['Serviços', 'Cases', 'Sobre'],
    cta: 'Auditoria Gratuita',
  },
  hero: {
    overline: 'Infraestrutura de Aquisição',
    headline1: 'Não Gerenciamos Anúncios.',
    headline2: 'Construímos Sistemas de Aquisição.',
    sub: 'Para marcas de hospitalidade e wellness prontas para transformar investimento em anúncios em receita previsível — não apenas cliques.',
    body: 'A maioria dos gestores de tráfego entrega relatórios. Nós entregamos reservas. Meta, Google, TikTok, CRM, e-mail e WhatsApp — integrados em um único sistema com um objetivo: lotar sua agenda.',
    cta1: 'Agendar Auditoria Gratuita',
    cta2: 'Ver Como Funciona',
    proofPoints: ['$2M+ gerenciados', '50+ campanhas', 'Hospitalidade & Wellness'],
  },
  portfolio: {
    overline: 'Portfólio',
    h2: 'A confiança das principais marcas em hospitalidade, wellness, varejo & entretenimento.',
  },
  socialProof: {
    stats: [
      { label: 'sistemas construídos', subLabel: 'Hospitalidade & Wellness' },
      { label: 'em verba gerenciada', subLabel: 'Receita atribuída' },
      { label: 'ROAS médio', subLabel: 'Em todas as campanhas' },
      { label: 'redução média de custo', subLabel: 'Custo por reserva' },
    ],
    bottomText:
      'Atendendo exclusivamente marcas de Hospitalidade, Wellness, Varejo & Entretenimento no mundo todo.',
  },
  problem: {
    overline: 'O Problema',
    h2: 'A maioria das marcas roda anúncios isolados.',
    sub: 'O resultado? Orçamento desperdiçado, reservas inconsistentes e nenhum caminho claro para resolver.',
    problems: [
      {
        title: 'Sem Sistema',
        body: 'Os anúncios rodam isolados. Meta, Google e TikTok estão desconectados do seu sistema de reservas. Cada canal trabalha contra os outros.',
      },
      {
        title: 'Sem Follow-Up',
        body: 'Leads chegam, mas ninguém responde a tempo. Contatos abandonados são perdidos para sempre. Seus concorrentes fecham os clientes que você atraiu.',
      },
      {
        title: 'Sem Dados Reais',
        body: 'Relatórios mostram cliques e impressões. Não reservas. Não receita. Você não sabe o que realmente está funcionando — ou o que está te custando.',
      },
    ],
    bridge:
      'O problema nunca são os anúncios. É a ausência de um sistema conectando tudo — do primeiro contato à reserva recorrente.',
  },
  stack: {
    overline: 'A Solução',
    h2part1: 'Um Sistema. Quatro Motores.',
    h2part2: 'Um Objetivo: Lotar Sua Agenda.',
    sub: 'Conectamos cada ponto de contato — do primeiro impresso à reserva recorrente — em um único sistema de aquisição otimizado.',
    columns: [
      {
        phase: 'ATRAIR',
        items: ['Meta Ads', 'Google Ads', 'TikTok Ads'],
        desc: 'Alcance seus clientes ideais onde eles realmente estão — com criativos e segmentação desenvolvidos para o seu segmento.',
      },
      {
        phase: 'CAPTURAR',
        items: ['Landing Pages', 'Formulários', 'Sistema de Reservas'],
        desc: 'Converta tráfego em leads e reservas — não apenas cliques.',
      },
      {
        phase: 'CONVERTER',
        items: ['Pipeline no CRM', 'Bot no WhatsApp', 'Sequência de Follow-Up'],
        desc: 'Feche a lacuna entre "interessado" e "confirmado" com pipelines automatizados.',
      },
      {
        phase: 'RETER',
        items: ['Fluxos de E-mail', 'Sequência de Fidelidade', 'Fluxos de Upsell'],
        desc: 'Transforme visitantes únicos em clientes recorrentes com automação de retenção.',
      },
    ],
    intelligenceLayer: 'Camada de Inteligência',
    metrics: ['Custo por Reserva', 'ROAS', 'LTV', 'Taxa de Conversão'],
    calloutTitle: 'Sem campanhas isoladas. Sem "vamos ver o que acontece".',
    calloutSub: 'Um motor previsível que lota sua agenda com menor custo por reserva.',
    calloutLink: 'Ver Nossos Resultados',
  },
  services: {
    overline: 'O Que Construímos',
    h2: 'Três Sistemas. Uma Arquitetura.',
    sub: 'Cada projeto é construído sobre o mesmo Acquisition Stack™. O nível depende de onde você está — e onde quer chegar.',
    items: [
      {
        badge: 'Principal',
        desc: 'Infraestrutura completa de aquisição — todos os canais conectados, cada ponto de contato otimizado, gestão contínua incluída.',
        includes: [
          'Meta + Google + TikTok Ads',
          'Landing pages e fluxo de reservas',
          'Automação via CRM + WhatsApp',
          'Fluxos de e-mail (nutrição + retenção)',
          'Revenue Intelligence Brief™',
          'Estrategista de Aquisição Dedicado',
        ],
        ideal: 'Marcas investindo $2.000+/mês em anúncios',
        duration: 'Retainer contínuo · mín. 6 meses',
        idealLabel: 'Ideal para:',
      },
      {
        badge: 'Mais Popular',
        desc: 'Anúncios pagos conectados a um sistema de captura, CRM e follow-up via WhatsApp. Construído em 30 dias. Otimizado mensalmente.',
        includes: [
          'Meta + Google Ads (2 plataformas)',
          'Otimização de landing page',
          'Configuração de pipeline no CRM',
          'Automação de follow-up via WhatsApp',
          'Revenue Intelligence Brief™',
        ],
        ideal: 'Orçamento de $500–2.000/mês em anúncios',
        duration: 'Retainer · mín. 3 meses',
        idealLabel: 'Ideal para:',
      },
      {
        badge: 'Início Rápido',
        desc: 'Em 14 dias: anúncios pagos no ar, landing page otimizada, captura de leads automatizada. Feito para gerar reservas desde a primeira semana.',
        includes: [
          'Anúncios em 1 plataforma',
          'Otimização de landing page',
          'Automação básica de captura de leads',
          'Call de revisão de performance em 30 dias',
        ],
        ideal: 'Marcas novas ou em novos mercados',
        duration: 'Pontual · upgrade para retainer opcional',
        idealLabel: 'Ideal para:',
      },
    ],
    ctaTitle: 'Não sabe qual sistema é certo para você?',
    ctaSub: 'Agende uma Auditoria gratuita. Vamos diagnosticar seu setup e recomendar o nível ideal.',
    ctaBtn: 'Agendar Auditoria Gratuita',
  },
  cases: {
    overline: 'Resultados',
    h2: 'Sistemas que Performam.',
    sub: 'Números reais de clientes reais. Mesmo orçamento — sistema diferente.',
    items: [
      {
        segment: 'Hospitalidade',
        challenge:
          '$3.000/mês no Meta Ads com reservas imprevisíveis e nenhum sistema de follow-up.',
        metricLabels: ['Custo por reserva', 'Reservas mensais', 'ROAS'],
        quote:
          'Paramos de pensar em anúncios e começamos a pensar em sistemas. A ADS Architect construiu algo em que podemos realmente confiar.',
      },
      {
        segment: 'Wellness',
        challenge:
          '4.000 seguidores no Instagram, quase zero reservas diretas pelas redes sociais. Todos os clientes vinham de indicações.',
        metricLabels: ['Novas reservas/mês', 'Custo por consulta', 'Taxa de retorno'],
        quote:
          'Pela primeira vez, sei exatamente de onde vem meu próximo cliente. O sistema roda enquanto eu me foco na minha equipe.',
      },
      {
        segment: 'Entretenimento',
        challenge:
          'Alto tráfego sazonal, zero receita previsível na baixa temporada e nenhuma aquisição evergreen.',
        metricLabels: ['Receita na baixa temporada', 'Custo por aquisição', 'Taxa de retorno'],
        quote:
          'A baixa temporada costumava nos apavorar. Agora rodamos campanhas que trazem pessoas independentemente do que está acontecendo.',
      },
    ],
    ctaLink: 'Solicite sua Auditoria de Aquisição gratuita',
  },
  audit: {
    overline: 'Auditoria de Aquisição Gratuita',
    h2part1: 'Descubra Exatamente Por Que Seus Anúncios Não Estão Lotando Sua Agenda.',
    h2part2: 'Gratuito, em 48 Horas.',
    sub: 'Vamos auditar suas contas de anúncios, identificar as lacunas exatas no seu sistema de aquisição e mostrar um caminho claro para reservas previsíveis. Sem enrolação. Sem pressão de venda. Um diagnóstico real.',
    whatTitle: 'O que você recebe:',
    deliverables: [
      { label: 'Relatório de Desperdício de Verba', desc: 'Onde seu orçamento está vazando e por quê' },
      { label: 'Análise de Lacunas de Conversão', desc: 'Por que cliques não viram reservas' },
      { label: 'Briefing de Posicionamento Competitivo', desc: 'Como você se compara aos 3 principais concorrentes' },
      { label: 'Recomendação do Acquisition Stack', desc: 'O sistema exato que construiríamos para você' },
      { label: 'Call Estratégica Privada de 30 min', desc: 'Apresentação com seu especialista dedicado' },
    ],
    timing: 'Entregue em até 48 horas após o envio',
    whoTitle: 'Para quem é:',
    requirements: [
      'Investindo $500+/mês em anúncios pagos',
      'Hotel, spa ou marca de wellness com equipe',
      'Pronto para tratar marketing como infraestrutura',
      'Não busca soluções rápidas ou baratas',
    ],
    footnote: 'Avaliamos cada aplicação. Aceitamos apenas clientes que podemos genuinamente ajudar.',
    formTitle: 'Solicite Sua Auditoria Gratuita',
    formSub: 'Entraremos em contato em até 24 horas para agendar sua call estratégica.',
    labels: {
      firstName: 'Primeiro Nome *',
      businessName: 'Nome do Negócio *',
      website: 'Site do Negócio *',
      budget: 'Orçamento Mensal em Anúncios *',
      challenge: 'Principal Desafio *',
      email: 'E-mail Profissional *',
    },
    placeholders: {
      firstName: 'Seu nome',
      businessName: 'Seu negócio',
      website: 'https://seunegocio.com',
      email: 'voce@seunegocio.com',
    },
    budgetOptions: [
      'Selecione a faixa de orçamento',
      '$500 – $1.000/mês',
      '$1.000 – $2.000/mês',
      '$2.000 – $5.000/mês',
      '$5.000+/mês',
    ],
    challengeOptions: [
      'Selecione seu desafio',
      'Reservas/consultas inconsistentes',
      'Custo por aquisição alto',
      'Sem sistema conectando anúncios às reservas',
      'Quero escalar mas não sei como',
    ],
    submitBtn: 'Solicitar Minha Auditoria Gratuita',
    loadingBtn: 'Enviando...',
    successTitle: 'Confirmado!',
    successMsg: 'Sua solicitação de auditoria foi confirmada. Entraremos em contato em até 24 horas para agendar sua call estratégica.',
    formFootnote: 'Sem pressão de venda. Diagnóstico real. Respondemos em até 24 horas.',
  },
  faq: {
    overline: 'FAQ',
    h2: 'Perguntas Frequentes',
    items: [
      {
        q: 'O que diferencia a ADS Architect de uma agência de performance tradicional?',
        a: 'A maioria das agências roda anúncios. Nós construímos sistemas. A diferença é que conectamos cada ponto de contato — anúncios pagos, landing pages, CRM, WhatsApp e e-mail — em um único motor de aquisição. Você não recebe um relatório de cliques. Você recebe um sistema projetado para gerar reservas previsíveis.',
      },
      {
        q: 'Vocês trabalham com marcas fora de Bali ou do Sudeste Asiático?',
        a: 'Com certeza. Embora nossas raízes sejam em Bali, nossa carteira de clientes é totalmente global. Atendemos ativamente marcas de hospitalidade e wellness na Europa, Oriente Médio, Sudeste Asiático e nas Américas — incluindo mercados em Portugal, Romênia, Brasil e muito mais. Distância não é barreira para o que construímos. Nossos sistemas são projetados para performar em qualquer mercado, idioma e cenário competitivo.',
      },
      {
        q: 'Qual é o orçamento mínimo de anúncios para trabalhar com vocês?',
        a: 'Esses valores são referências, não mínimos absolutos. O The Acquisition Sprint™ funciona melhor a partir de $500/mês em verba, o The Revenue Pipeline™ a partir de $1.000–3.000/mês, e o The Acquisition Architecture Program™ a partir de $2.000+/mês — tudo indo diretamente para as plataformas, separado da nossa taxa. Cada marca tem um contexto único, e sempre alinhamos o nível de investimento ideal durante sua Auditoria gratuita, antes de qualquer recomendação.',
      },
      {
        q: 'Quanto tempo até vermos resultados?',
        a: 'A maioria dos clientes já vê melhora mensurável no custo por reserva nos primeiros 30–60 dias. O sistema completo — incluindo CRM, automações e fluxos de e-mail — leva 30 dias para ser construído e cresce com o tempo. Definimos expectativas realistas na sua Auditoria de Aquisição antes de você se comprometer.',
      },
      {
        q: 'O que está incluído na Auditoria de Aquisição Gratuita?',
        a: 'Auditamos suas contas de anúncios (acesso somente leitura), analisamos suas lacunas de conversão, revisamos seu posicionamento competitivo e desenvolvemos uma recomendação customizada de Acquisition Stack para sua marca. Você recebe um relatório em PDF e uma call de 30 minutos com um especialista. Sem pressão de venda.',
      },
      {
        q: 'Preciso fornecer acesso às minhas contas de anúncios?',
        a: 'Para a auditoria, precisamos apenas de acesso de leitura ao seu Meta Ads Manager e Google Analytics. Para a gestão contínua, trabalhamos dentro das suas contas existentes — nunca somos donos dos seus dados ou ativos.',
      },
      {
        q: 'O que acontece se os resultados não atenderem às expectativas?',
        a: 'Monitoramos custo por reserva, ROAS e taxas de conversão mensalmente. Se não estivermos atingindo as metas acordadas após 60 dias, realizamos um diagnóstico completo do sistema e fazemos ajustes. Nosso Revenue Intelligence Brief™ mantém você informado de cada mudança que fazemos e o motivo.',
      },
    ],
  },
  finalCta: {
    overline: 'Pronto?',
    h2part1: 'Pronto para Construir Seu',
    h2part2: 'Sistema de Aquisição?',
    sub: 'Agende sua Auditoria de Aquisição gratuita. Mostraremos exatamente onde receita está sendo deixada na mesa — e o que construiríamos para recuperá-la.',
    btn: 'Agendar Sua Auditoria Gratuita',
    note: '48 horas · Sem pressão de venda · Diagnóstico real',
  },
  footer: {
    links: ['Serviços', 'Cases', 'Auditoria Gratuita'],
    copyright: 'Todos os direitos reservados.',
  },
  about: {
    overline: 'Sobre a ADS Architect',
    headline: 'Construída para Marcas que Recusam Apostar no Escuro.',
    sub: 'Somos uma firma de infraestrutura de aquisição. Não gerenciamos anúncios — engenheiramos sistemas que transformam investimento em receita previsível.',
    missionLabel: 'Nossa Missão',
    missionText:
      'Tornar a infraestrutura de aquisição acessível a cada marca de hospitalidade e wellness no mundo — para que a qualidade do seu sistema de marketing, não a sorte, determine o seu crescimento.',
    principlesLabel: 'Como Trabalhamos',
    principles: [
      {
        title: 'Sistemas, Não Campanhas',
        body: 'Cada projeto é construído como infraestrutura — não uma série de campanhas isoladas que vivem e morrem de forma independente.',
      },
      {
        title: 'Dados Antes de Decisões',
        body: 'Não apostamos. Cada recomendação é baseada em números reais do seu mercado, suas contas e seu cenário competitivo.',
      },
      {
        title: 'Propriedade, Não Dependência',
        body: 'Suas contas, seus dados, seus ativos. Construímos sistemas que você possui — e pode entender.',
      },
      {
        title: 'Clareza Acima da Complexidade',
        body: 'Você não deveria precisar de um decodificador para entender seu marketing. Nosso Revenue Intelligence Brief™ torna cada decisão transparente.',
      },
    ],
    globalLabel: 'Onde Atuamos',
    globalHeadline: 'Alcance Global. Inteligência Local.',
    globalSub:
      'De Bali a Berlim, Dubai a Denver — construímos sistemas de aquisição para marcas de hospitalidade e wellness em todos os principais mercados.',
    regions: [
      'Sudeste Asiático & Pacífico',
      'Europa (incl. Portugal)',
      'Oriente Médio & Emirados',
      'Américas (incl. Brasil)',
      'Europa Oriental (incl. Romênia)',
      'Marcas Globais & Remotas',
    ],
    processLabel: 'Nosso Processo',
    processHeadline: 'Quatro Semanas. Um Sistema. Resultados Mensuráveis.',
    processSteps: [
      {
        label: 'Semana 1',
        title: 'Auditoria de Aquisição',
        desc: 'Mapeamos cada lacuna entre seu setup atual e um sistema de aquisição totalmente funcional.',
      },
      {
        label: 'Semana 2',
        title: 'Design da Arquitetura',
        desc: 'Planejamos o sistema exato — cada canal, cada touchpoint, cada automação.',
      },
      {
        label: 'Semanas 3–4',
        title: 'Construção & Lançamento',
        desc: 'Construímos. Testamos. Lançamos — e entregamos as chaves para você.',
      },
      {
        label: 'Contínuo',
        title: 'Inteligência & Otimização',
        desc: 'Relatórios mensais de Revenue Intelligence. Auditorias trimestrais do sistema. Melhoria contínua.',
      },
    ],
    ctaTitle: 'Pronto para Construir Seu Sistema de Aquisição?',
    ctaSub:
      'Comece com uma Auditoria de Aquisição gratuita. Sem pressão de venda — apenas um diagnóstico real do que está segurando seu crescimento.',
    ctaBtn: 'Agendar Sua Auditoria Gratuita',
  },
};

const ptPT: Translations = {
  navbar: {
    links: ['Serviços', 'Casos de Estudo', 'Sobre'],
    cta: 'Auditoria Gratuita',
  },
  hero: {
    overline: 'Infraestrutura de Aquisição',
    headline1: 'Não Gerimos Anúncios.',
    headline2: 'Construímos Sistemas de Aquisição.',
    sub: 'Para marcas de hotelaria e wellness prontas para transformar o investimento em publicidade em receita previsível — não apenas cliques.',
    body: 'A maioria dos gestores de publicidade entrega relatórios. Nós entregamos reservas. Meta, Google, TikTok, CRM, e-mail e WhatsApp — integrados num único sistema com um objetivo: preencher a sua agenda.',
    cta1: 'Agendar Auditoria Gratuita',
    cta2: 'Ver Como Funciona',
    proofPoints: ['$2M+ geridos', '50+ campanhas', 'Hotelaria & Wellness'],
  },
  portfolio: {
    overline: 'Portfólio',
    h2: 'A confiança das principais marcas em hotelaria, wellness, retalho & entretenimento.',
  },
  socialProof: {
    stats: [
      { label: 'sistemas construídos', subLabel: 'Hotelaria & Wellness' },
      { label: 'em verba gerida', subLabel: 'Receita atribuída' },
      { label: 'ROAS médio', subLabel: 'Em todas as campanhas' },
      { label: 'redução média de custo', subLabel: 'Custo por reserva' },
    ],
    bottomText:
      'Ao serviço exclusivo de marcas de Hotelaria, Wellness, Retalho & Entretenimento em todo o mundo.',
  },
  problem: {
    overline: 'O Problema',
    h2: 'A maioria das marcas publicita de forma isolada.',
    sub: 'O resultado? Orçamento desperdiçado, reservas inconsistentes e nenhum caminho claro para resolver.',
    problems: [
      {
        title: 'Sem Sistema',
        body: 'Os anúncios funcionam de forma isolada. Meta, Google e TikTok estão desligados do seu sistema de reservas. Cada canal trabalha contra os outros.',
      },
      {
        title: 'Sem Follow-Up',
        body: 'Os leads chegam, mas ninguém responde a tempo. Os contactos abandonados perdem-se para sempre. Os seus concorrentes fecham os clientes que atraiu.',
      },
      {
        title: 'Sem Dados Reais',
        body: 'Os relatórios mostram cliques e impressões. Não reservas. Não receita. Não sabe o que está realmente a funcionar — nem o que lhe está a custar.',
      },
    ],
    bridge:
      'O problema nunca são os anúncios. É a ausência de um sistema que os conecta — desde o primeiro contacto até à reserva recorrente.',
  },
  stack: {
    overline: 'A Solução',
    h2part1: 'Um Sistema. Quatro Motores.',
    h2part2: 'Um Objetivo: Preencher a Sua Agenda.',
    sub: 'Ligamos cada ponto de contacto — da primeira impressão à reserva recorrente — num único sistema de aquisição otimizado.',
    columns: [
      {
        phase: 'ATRAIR',
        items: ['Meta Ads', 'Google Ads', 'TikTok Ads'],
        desc: 'Alcance os seus clientes ideais onde realmente estão — com criativos e segmentação desenvolvidos para o seu segmento.',
      },
      {
        phase: 'CAPTURAR',
        items: ['Landing Pages', 'Formulários', 'Sistema de Reservas'],
        desc: 'Converta tráfego em leads e reservas — não apenas cliques.',
      },
      {
        phase: 'CONVERTER',
        items: ['Pipeline no CRM', 'Bot no WhatsApp', 'Sequência de Follow-Up'],
        desc: 'Feche a lacuna entre "interessado" e "confirmado" com pipelines automatizados.',
      },
      {
        phase: 'RETER',
        items: ['Fluxos de E-mail', 'Sequência de Fidelização', 'Fluxos de Upsell'],
        desc: 'Transforme visitantes pontuais em clientes recorrentes com automação de retenção.',
      },
    ],
    intelligenceLayer: 'Camada de Inteligência',
    metrics: ['Custo por Reserva', 'ROAS', 'LTV', 'Taxa de Conversão'],
    calloutTitle: 'Sem campanhas isoladas. Sem "vamos ver o que acontece".',
    calloutSub: 'Um motor previsível que preenche a sua agenda com menor custo por reserva.',
    calloutLink: 'Ver os Nossos Resultados',
  },
  services: {
    overline: 'O Que Construímos',
    h2: 'Três Sistemas. Uma Arquitetura.',
    sub: 'Cada projeto é construído sobre o mesmo Acquisition Stack™. O nível depende de onde está — e onde quer chegar.',
    items: [
      {
        badge: 'Principal',
        desc: 'Infraestrutura completa de aquisição — todos os canais ligados, cada ponto de contacto otimizado, gestão contínua incluída.',
        includes: [
          'Meta + Google + TikTok Ads',
          'Landing pages e fluxo de reservas',
          'Automação via CRM + WhatsApp',
          'Fluxos de e-mail (nutrição + retenção)',
          'Revenue Intelligence Brief™',
          'Estratega de Aquisição Dedicado',
        ],
        ideal: 'Marcas a investir $2.000+/mês em publicidade',
        duration: 'Retainer contínuo · mín. 6 meses',
        idealLabel: 'Ideal para:',
      },
      {
        badge: 'Mais Popular',
        desc: 'Anúncios pagos ligados a um sistema de captura, CRM e follow-up via WhatsApp. Construído em 30 dias. Otimizado mensalmente.',
        includes: [
          'Meta + Google Ads (2 plataformas)',
          'Otimização de landing page',
          'Configuração de pipeline no CRM',
          'Automação de follow-up via WhatsApp',
          'Revenue Intelligence Brief™',
        ],
        ideal: 'Orçamento de $500–2.000/mês em publicidade',
        duration: 'Retainer · mín. 3 meses',
        idealLabel: 'Ideal para:',
      },
      {
        badge: 'Início Rápido',
        desc: 'Em 14 dias: anúncios pagos no ar, landing page otimizada, captação de leads automatizada. Desenhado para gerar reservas desde a primeira semana.',
        includes: [
          'Anúncios em 1 plataforma',
          'Otimização de landing page',
          'Automação básica de captação de leads',
          'Call de revisão de performance em 30 dias',
        ],
        ideal: 'Marcas novas ou em novos mercados',
        duration: 'Pontual · upgrade para retainer opcional',
        idealLabel: 'Ideal para:',
      },
    ],
    ctaTitle: 'Não tem a certeza de qual sistema é certo para si?',
    ctaSub: 'Agende uma Auditoria gratuita. Vamos diagnosticar a sua situação e recomendar o nível ideal.',
    ctaBtn: 'Agendar Auditoria Gratuita',
  },
  cases: {
    overline: 'Resultados',
    h2: 'Sistemas que Performam.',
    sub: 'Números reais de clientes reais. Mesmo orçamento — sistema diferente.',
    items: [
      {
        segment: 'Hotelaria',
        challenge:
          '$3.000/mês no Meta Ads com reservas imprevisíveis e nenhum sistema de follow-up.',
        metricLabels: ['Custo por reserva', 'Reservas mensais', 'ROAS'],
        quote:
          'Deixámos de pensar em anúncios e começámos a pensar em sistemas. A ADS Architect construiu algo em que podemos realmente confiar.',
      },
      {
        segment: 'Wellness',
        challenge:
          '4.000 seguidores no Instagram, quase zero reservas diretas pelas redes sociais. Todos os clientes vinham de referências.',
        metricLabels: ['Novas reservas/mês', 'Custo por consulta', 'Taxa de retorno'],
        quote:
          'Pela primeira vez, sei exatamente de onde vem o meu próximo cliente. O sistema funciona enquanto me foco na minha equipa.',
      },
      {
        segment: 'Entretenimento',
        challenge:
          'Muito tráfego sazonal, zero receita previsível na época baixa e nenhuma aquisição evergreen.',
        metricLabels: ['Receita na época baixa', 'Custo por aquisição', 'Taxa de retorno'],
        quote:
          'A época baixa costumava assombrar-nos. Agora gerimos campanhas que trazem pessoas independentemente do que está a acontecer.',
      },
    ],
    ctaLink: 'Solicite a sua Auditoria de Aquisição gratuita',
  },
  audit: {
    overline: 'Auditoria de Aquisição Gratuita',
    h2part1: 'Descubra Exatamente Por Que Os Seus Anúncios Não Estão a Preencher a Sua Agenda.',
    h2part2: 'Gratuito, em 48 Horas.',
    sub: 'Auditamos as suas contas de publicidade, identificamos as lacunas exatas no seu sistema de aquisição e mostramos um caminho claro para reservas previsíveis. Sem rodeios. Sem pressão comercial. Um diagnóstico real.',
    whatTitle: 'O que recebe:',
    deliverables: [
      { label: 'Relatório de Desperdício de Verba', desc: 'Onde o seu orçamento está a ser desperdiçado e porquê' },
      { label: 'Análise de Lacunas de Conversão', desc: 'Por que razão os cliques não se transformam em reservas' },
      { label: 'Briefing de Posicionamento Competitivo', desc: 'Como se compara com os 3 principais concorrentes' },
      { label: 'Recomendação do Acquisition Stack', desc: 'O sistema exato que construiríamos para si' },
      { label: 'Call Estratégica Privada de 30 min', desc: 'Apresentação com o seu especialista dedicado' },
    ],
    timing: 'Entregue nas 48 horas após a submissão',
    whoTitle: 'Para quem é:',
    requirements: [
      'A investir $500+/mês em publicidade paga',
      'Hotel, spa ou marca de wellness com equipa',
      'Pronto para tratar o marketing como infraestrutura',
      'Não procura soluções rápidas ou baratas',
    ],
    footnote: 'Analisamos cada candidatura. Aceitamos apenas clientes que podemos genuinamente ajudar.',
    formTitle: 'Solicite a Sua Auditoria Gratuita',
    formSub: 'Entraremos em contacto nas próximas 24 horas para agendar a sua call estratégica.',
    labels: {
      firstName: 'Primeiro Nome *',
      businessName: 'Nome do Negócio *',
      website: 'Site do Negócio *',
      budget: 'Orçamento Mensal em Publicidade *',
      challenge: 'Principal Desafio *',
      email: 'Email Profissional *',
    },
    placeholders: {
      firstName: 'O seu nome',
      businessName: 'O seu negócio',
      website: 'https://seunegocio.com',
      email: 'voce@seunegocio.com',
    },
    budgetOptions: [
      'Selecione a faixa de orçamento',
      '$500 – $1.000/mês',
      '$1.000 – $2.000/mês',
      '$2.000 – $5.000/mês',
      '$5.000+/mês',
    ],
    challengeOptions: [
      'Selecione o seu desafio',
      'Reservas/consultas inconsistentes',
      'Custo por aquisição elevado',
      'Sem sistema a ligar anúncios às reservas',
      'Quero escalar mas não sei como',
    ],
    submitBtn: 'Solicitar a Minha Auditoria Gratuita',
    loadingBtn: 'A enviar...',
    successTitle: 'Confirmado!',
    successMsg: 'O seu pedido de auditoria foi confirmado. Entraremos em contacto nas próximas 24 horas para agendar a sua call estratégica.',
    formFootnote: 'Sem pressão comercial. Diagnóstico real. Respondemos em 24 horas.',
  },
  faq: {
    overline: 'FAQ',
    h2: 'Perguntas Frequentes',
    items: [
      {
        q: 'O que diferencia a ADS Architect de uma agência de performance tradicional?',
        a: 'A maioria das agências gere anúncios. Nós construímos sistemas. A diferença é que ligamos cada ponto de contacto — anúncios pagos, landing pages, CRM, WhatsApp e e-mail — num único motor de aquisição. Não recebe um relatório de cliques. Recebe um sistema concebido para gerar reservas previsíveis.',
      },
      {
        q: 'Trabalham com marcas fora de Bali ou do Sudeste Asiático?',
        a: 'Com certeza. Embora as nossas raízes sejam em Bali, a nossa carteira de clientes é totalmente global. Trabalhamos ativamente com marcas de hotelaria e wellness na Europa, Médio Oriente, Sudeste Asiático e nas Américas — incluindo mercados em Portugal, Roménia, Brasil e muito mais. A distância é irrelevante para o que construímos. Os nossos sistemas funcionam em qualquer mercado, em qualquer idioma e em qualquer cenário competitivo.',
      },
      {
        q: 'Qual é o orçamento mínimo de publicidade para trabalhar convosco?',
        a: 'Estes são valores de referência, não mínimos absolutos. O The Acquisition Sprint™ funciona melhor a partir de $500/mês em investimento publicitário, o The Revenue Pipeline™ a partir de $1.000–3.000/mês, e o The Acquisition Architecture Program™ a partir de $2.000+/mês — tudo indo diretamente para as plataformas, separado da nossa taxa. Cada marca tem um contexto único, e alinhamos sempre o nível de investimento ideal durante a sua Auditoria gratuita, antes de qualquer recomendação.',
      },
      {
        q: 'Quanto tempo demora a ver resultados?',
        a: 'A maioria dos clientes vê uma melhoria mensurável no custo por reserva nos primeiros 30–60 dias. O sistema completo — incluindo CRM, automatizações e fluxos de e-mail — demora 30 dias a ser construído e melhora com o tempo. Definimos expectativas realistas na sua Auditoria de Aquisição antes de se comprometer.',
      },
      {
        q: 'O que está incluído na Auditoria de Aquisição Gratuita?',
        a: 'Auditamos as suas contas de publicidade (acesso apenas de leitura), analisamos as suas lacunas de conversão, revemos o seu posicionamento competitivo e desenvolvemos uma recomendação personalizada de Acquisition Stack para a sua marca. Recebe um relatório em PDF e uma chamada de vídeo de 30 minutos com um especialista. Sem pressão comercial.',
      },
      {
        q: 'Preciso de dar acesso às minhas contas de publicidade existentes?',
        a: 'Para a auditoria, precisamos apenas de acesso de leitura ao seu Meta Ads Manager e Google Analytics. Para a gestão contínua, trabalhamos nas suas contas existentes — nunca somos proprietários dos seus dados ou ativos.',
      },
      {
        q: 'O que acontece se os resultados não corresponderem às expectativas?',
        a: 'Monitorizamos o custo por reserva, ROAS e taxas de conversão mensalmente. Se não atingirmos os objetivos acordados após 60 dias, realizamos um diagnóstico completo do sistema e fazemos ajustes. O nosso Revenue Intelligence Brief™ mantém-no informado de cada alteração que fazemos e porquê.',
      },
    ],
  },
  finalCta: {
    overline: 'Pronto?',
    h2part1: 'Pronto para Construir o Seu',
    h2part2: 'Sistema de Aquisição?',
    sub: 'Agende a sua Auditoria de Aquisição gratuita. Mostraremos exatamente onde a receita está a ser perdida — e o que construiríamos para a recuperar.',
    btn: 'Agendar a Sua Auditoria Gratuita',
    note: '48 horas · Sem pressão comercial · Diagnóstico real',
  },
  footer: {
    links: ['Serviços', 'Casos de Estudo', 'Auditoria Gratuita'],
    copyright: 'Todos os direitos reservados.',
  },
  about: {
    overline: 'Sobre a ADS Architect',
    headline: 'Construída para Marcas que Recusam Adivinhar.',
    sub: 'Somos uma empresa de infraestrutura de aquisição. Não gerimos anúncios — engenheiramos sistemas que transformam investimento em receita previsível.',
    missionLabel: 'A Nossa Missão',
    missionText:
      'Tornar a infraestrutura de aquisição acessível a cada marca de hotelaria e wellness no mundo — para que a qualidade do seu sistema de marketing, não a sorte, determine o seu crescimento.',
    principlesLabel: 'Como Trabalhamos',
    principles: [
      {
        title: 'Sistemas, Não Campanhas',
        body: 'Cada projeto é construído como infraestrutura — não uma série de campanhas isoladas que vivem e morrem de forma independente.',
      },
      {
        title: 'Dados Antes de Decisões',
        body: 'Não adivinhamos. Cada recomendação é sustentada por números reais do seu mercado, das suas contas e do seu panorama competitivo.',
      },
      {
        title: 'Propriedade, Não Dependência',
        body: 'As suas contas, os seus dados, os seus ativos. Construímos sistemas que são seus — e que pode compreender.',
      },
      {
        title: 'Clareza Acima da Complexidade',
        body: 'Não deve precisar de um dicionário para entender o seu marketing. O nosso Revenue Intelligence Brief™ torna cada decisão transparente.',
      },
    ],
    globalLabel: 'Onde Trabalhamos',
    globalHeadline: 'Alcance Global. Inteligência Local.',
    globalSub:
      'De Bali a Berlim, Dubai a Denver — construímos sistemas de aquisição para marcas de hotelaria e wellness em todos os principais mercados.',
    regions: [
      'Sudeste Asiático & Pacífico',
      'Europa (incl. Portugal)',
      'Médio Oriente & Emirados',
      'Américas (incl. Brasil)',
      'Europa de Leste (incl. Roménia)',
      'Marcas Globais & Remotas',
    ],
    processLabel: 'O Nosso Processo',
    processHeadline: 'Quatro Semanas. Um Sistema. Resultados Mensuráveis.',
    processSteps: [
      {
        label: 'Semana 1',
        title: 'Auditoria de Aquisição',
        desc: 'Mapeamos todas as lacunas entre a sua configuração atual e um sistema de aquisição totalmente funcional.',
      },
      {
        label: 'Semana 2',
        title: 'Design da Arquitetura',
        desc: 'Planeamos o sistema exato — cada canal, cada ponto de contacto, cada automatização.',
      },
      {
        label: 'Semanas 3–4',
        title: 'Construção & Lançamento',
        desc: 'Construímos. Testamos. Lançamos — e entregamos-lhe as chaves.',
      },
      {
        label: 'Contínuo',
        title: 'Inteligência & Otimização',
        desc: 'Relatórios mensais de Revenue Intelligence. Auditorias trimestrais do sistema. Melhoria contínua.',
      },
    ],
    ctaTitle: 'Pronto para Construir o Seu Sistema de Aquisição?',
    ctaSub:
      'Comece com uma Auditoria de Aquisição gratuita. Sem pressão comercial — apenas um diagnóstico real do que está a travar o seu crescimento.',
    ctaBtn: 'Agendar a Sua Auditoria Gratuita',
  },
};

const ro: Translations = {
  navbar: {
    links: ['Servicii', 'Studii de Caz', 'Despre'],
    cta: 'Audit Gratuit',
  },
  hero: {
    overline: 'Infrastructură de Achiziție',
    headline1: 'Nu Rulăm Reclame.',
    headline2: 'Construim Sisteme de Achiziție.',
    sub: 'Pentru branduri din ospitalitate și wellness gata să transforme bugetul de publicitate în venituri previzibile — nu doar clicuri.',
    body: 'Cei mai mulți manageri de publicitate livrează rapoarte. Noi livrăm rezervări. Meta, Google, TikTok, CRM, email și WhatsApp — integrate într-un singur sistem cu un singur obiectiv: să vă umpleți calendarul.',
    cta1: 'Programează Auditul Gratuit',
    cta2: 'Vezi Cum Funcționează',
    proofPoints: ['$2M+ gestionați', '50+ campanii', 'Ospitalitate & Wellness'],
  },
  portfolio: {
    overline: 'Portofoliu',
    h2: 'De încredere pentru branduri de top din ospitalitate, wellness, retail & entertainment.',
  },
  socialProof: {
    stats: [
      { label: 'sisteme construite', subLabel: 'Ospitalitate & Wellness' },
      { label: 'buget gestionat', subLabel: 'Venituri atribuite' },
      { label: 'ROAS mediu', subLabel: 'Pe toate campaniile' },
      { label: 'reducere medie cost', subLabel: 'Cost per rezervare' },
    ],
    bottomText:
      'Servind exclusiv branduri de Ospitalitate, Wellness, Retail & Entertainment din întreaga lume.',
  },
  problem: {
    overline: 'Problema',
    h2: 'Majoritatea brandurilor rulează reclame izolat.',
    sub: 'Rezultatul? Buget irosit, rezervări inconsistente și nicio soluție clară.',
    problems: [
      {
        title: 'Fără Sistem',
        body: 'Reclamele rulează izolat. Meta, Google și TikTok sunt deconectate de sistemul tău de rezervări. Fiecare canal lucrează împotriva celorlalte.',
      },
      {
        title: 'Fără Follow-Up',
        body: 'Lead-urile vin, dar nimeni nu răspunde la timp. Interesele abandonate sunt pierdute pentru totdeauna. Concurenții tăi câștigă clienții pe care i-ai atras.',
      },
      {
        title: 'Fără Date Reale',
        body: 'Rapoartele arată clicuri și afișări. Nu rezervări. Nu venituri. Nu știi ce funcționează cu adevărat — sau ce îți costă bani.',
      },
    ],
    bridge:
      'Problema nu sunt niciodată reclamele. Este absența unui sistem care le conectează — de la prima impresie până la rezervarea recurentă.',
  },
  stack: {
    overline: 'Soluția',
    h2part1: 'Un Sistem. Patru Motoare.',
    h2part2: 'Un Obiectiv: Calendarul Plin.',
    sub: 'Conectăm fiecare punct de contact — de la prima impresie la rezervarea recurentă — într-un singur sistem de achiziție optimizat.',
    columns: [
      {
        phase: 'ATRAGE',
        items: ['Meta Ads', 'Google Ads', 'TikTok Ads'],
        desc: 'Ajunge la clienții ideali acolo unde se află cu adevărat — cu creații și targetare concepute pentru categoria ta.',
      },
      {
        phase: 'CAPTEAZĂ',
        items: ['Landing Pages', 'Formulare Lead', 'Sistem Rezervări'],
        desc: 'Transformă traficul în lead-uri și rezervări — nu doar clicuri.',
      },
      {
        phase: 'CONVERTEȘTE',
        items: ['Pipeline CRM', 'Bot WhatsApp', 'Secvențe Follow-Up'],
        desc: 'Elimină distanța dintre "interesat" și "rezervat" cu pipeline-uri automatizate.',
      },
      {
        phase: 'RETENȚIE',
        items: ['Fluxuri Email', 'Secvențe Fidelizare', 'Fluxuri Upsell'],
        desc: 'Transformă vizitatorii ocazionali în clienți pe viață cu automatizarea retenției.',
      },
    ],
    intelligenceLayer: 'Strat de Inteligență',
    metrics: ['Cost per Rezervare', 'ROAS', 'LTV', 'Rată de Conversie'],
    calloutTitle: 'Fără campanii izolate. Fără „să vedem ce se întâmplă".',
    calloutSub: 'Un motor previzibil care îți umple calendarul la un cost per rezervare mai mic.',
    calloutLink: 'Vezi Rezultatele Noastre',
  },
  services: {
    overline: 'Ce Construim',
    h2: 'Trei Sisteme. O Arhitectură.',
    sub: 'Fiecare proiect este construit pe același Acquisition Stack™. Nivelul depinde de unde ești — și unde vrei să ajungi.',
    items: [
      {
        badge: 'Flagship',
        desc: 'Infrastructură completă de achiziție — fiecare canal conectat, fiecare punct de contact optimizat, management continuu inclus.',
        includes: [
          'Meta + Google + TikTok Ads',
          'Landing pages & flux de rezervări',
          'Automatizare CRM + WhatsApp',
          'Fluxuri email (nurturing + retenție)',
          'Revenue Intelligence Brief™',
          'Strategist dedicat de Achiziție',
        ],
        ideal: 'Branduri care cheltuie $2.000+/lună pe reclame',
        duration: 'Retainer continuu · min. 6 luni',
        idealLabel: 'Ideal pentru:',
      },
      {
        badge: 'Cel Mai Popular',
        desc: 'Reclame plătite conectate la un sistem de captare, CRM și follow-up WhatsApp. Construit în 30 de zile. Optimizat lunar.',
        includes: [
          'Meta + Google Ads (2 platforme)',
          'Optimizare landing page',
          'Configurare pipeline CRM',
          'Automatizare follow-up WhatsApp',
          'Revenue Intelligence Brief™',
        ],
        ideal: 'Buget de $500–2.000/lună pe reclame',
        duration: 'Retainer · min. 3 luni',
        idealLabel: 'Ideal pentru:',
      },
      {
        badge: 'Start Rapid',
        desc: 'În 14 zile: reclame live, landing page optimizat, captare automată a lead-urilor. Conceput pentru rezervări din prima săptămână.',
        includes: [
          'Reclame pe 1 platformă',
          'Optimizare landing page',
          'Automatizare de bază a captării lead-urilor',
          'Apel de review de performanță la 30 de zile',
        ],
        ideal: 'Branduri noi sau în piețe noi',
        duration: 'One-time · upgrade opțional la retainer',
        idealLabel: 'Ideal pentru:',
      },
    ],
    ctaTitle: 'Nu ești sigur ce sistem ți se potrivește?',
    ctaSub: 'Rezervă un Audit gratuit. Vom diagnostica situația ta și vom recomanda nivelul potrivit.',
    ctaBtn: 'Rezervă Audit Gratuit',
  },
  cases: {
    overline: 'Rezultate',
    h2: 'Sisteme care Performează.',
    sub: 'Cifre reale de la clienți reali. Același buget — sistem diferit.',
    items: [
      {
        segment: 'Ospitalitate',
        challenge:
          '$3.000/lună pe Meta Ads cu rezervări imprevizibile și niciun sistem de follow-up.',
        metricLabels: ['Cost per rezervare', 'Rezervări lunare', 'ROAS'],
        quote:
          'Am încetat să ne gândim la reclame și am început să ne gândim la sisteme. ADS Architect a construit ceva pe care ne putem baza cu adevărat.',
      },
      {
        segment: 'Wellness',
        challenge:
          '4.000 urmăritori pe Instagram, aproape zero rezervări directe din social media. Toți clienții veneau din recomandări.',
        metricLabels: ['Rezervări noi/lună', 'Cost per programare', 'Rata de revenire'],
        quote:
          'Pentru prima dată, știu exact de unde vine următorul meu client. Sistemul funcționează în timp ce eu mă concentrez pe echipa mea.',
      },
      {
        segment: 'Entertainment',
        challenge:
          'Trafic sezonier ridicat, zero venituri previzibile în extrasezon și nicio achiziție evergreen.',
        metricLabels: ['Venituri extrasezon', 'Cost per achiziție', 'Rata de revenire'],
        quote:
          'Extrasezonul ne speriase până acum. Acum rulăm campanii care aduc oameni indiferent de ce se întâmplă.',
      },
    ],
    ctaLink: 'Obțineți auditul gratuit de Achiziție',
  },
  audit: {
    overline: 'Audit Gratuit de Achiziție',
    h2part1: 'Descoperă Exact De Ce Reclamele Tale Nu Îți Umplu Calendarul.',
    h2part2: 'Gratuit, în 48 de Ore.',
    sub: 'Vom audita conturile tale de reclame, vom identifica exact lacunele din sistemul de achiziție și îți vom arăta un drum clar spre rezervări previzibile. Fără teorie. Fără presiune de vânzare. Doar un diagnostic real.',
    whatTitle: 'Ce primești:',
    deliverables: [
      { label: 'Raport de Risipă a Bugetului', desc: 'Unde îți scapă banii și de ce' },
      { label: 'Analiză Lacune de Conversie', desc: 'De ce clicurile nu se transformă în rezervări' },
      { label: 'Brief de Poziționare Competitivă', desc: 'Cum te compari cu primii 3 concurenți' },
      { label: 'Recomandare Acquisition Stack', desc: 'Sistemul exact pe care l-am construi pentru tine' },
      { label: 'Call Strategie Privat de 30 min', desc: 'Prezentare cu specialistul tău dedicat' },
    ],
    timing: 'Livrat în 48 de ore de la trimiterea formularului',
    whoTitle: 'Pentru cine este:',
    requirements: [
      'Cheltuiești $500+/lună pe reclame plătite',
      'Hotel, spa sau brand de wellness cu echipă',
      'Pregătit să tratezi marketingul ca infrastructură',
      'Nu cauți soluții rapide sau ieftine',
    ],
    footnote: 'Analizăm fiecare aplicație. Acceptăm doar clienți pe care îi putem ajuta cu adevărat.',
    formTitle: 'Revendică Auditul Tău Gratuit',
    formSub: 'Te vom contacta în 24 de ore pentru a programa apelul de strategie.',
    labels: {
      firstName: 'Prenume *',
      businessName: 'Numele Afacerii *',
      website: 'Site-ul Afacerii *',
      budget: 'Buget Lunar de Reclame *',
      challenge: 'Provocarea Principală *',
      email: 'Email Profesional *',
    },
    placeholders: {
      firstName: 'Prenumele tău',
      businessName: 'Afacerea ta',
      website: 'https://afacereatdumneata.ro',
      email: 'tu@afacereatdumneata.ro',
    },
    budgetOptions: [
      'Selectează intervalul de buget',
      '$500 – $1.000/lună',
      '$1.000 – $2.000/lună',
      '$2.000 – $5.000/lună',
      '$5.000+/lună',
    ],
    challengeOptions: [
      'Selectează provocarea ta',
      'Rezervări/programări inconsistente',
      'Cost de achiziție ridicat',
      'Fără sistem care conectează reclamele la rezervări',
      'Vreau să scalez, dar nu știu cum',
    ],
    submitBtn: 'Revendică Auditul Tău Gratuit',
    loadingBtn: 'Se trimite...',
    successTitle: 'Ești Înscris',
    successMsg: 'Cererea de audit a fost confirmată. Te vom contacta în 24 de ore pentru a programa apelul de strategie.',
    formFootnote: 'Fără presiune de vânzare. Diagnostic real. Răspundem în 24 de ore.',
  },
  faq: {
    overline: 'FAQ',
    h2: 'Întrebări Frecvente',
    items: [
      {
        q: 'Ce diferențiază ADS Architect de o agenție obișnuită de performance marketing?',
        a: 'Cele mai multe agenții rulează reclame. Noi construim sisteme. Diferența este că conectăm fiecare punct de contact — reclame plătite, landing pages, CRM, WhatsApp și email — într-un singur motor de achiziție. Nu primești un raport de clicuri. Primești un sistem proiectat pentru rezervări previzibile.',
      },
      {
        q: 'Lucrați cu branduri din afara Bali sau Asiei de Sud-Est?',
        a: 'Absolut. Deși rădăcinile noastre sunt în Bali, baza noastră de clienți este complet globală. Lucrăm activ cu branduri de ospitalitate și wellness din Europa, Orientul Mijlociu, Asia de Sud-Est și Americi — inclusiv piețe din Portugalia, România, Brazilia și dincolo. Distanța este irelevantă pentru ceea ce construim. Sistemele noastre performează în orice piață, orice limbă și orice peisaj competitiv.',
      },
      {
        q: 'Care este bugetul minim de reclame necesar pentru a lucra cu voi?',
        a: 'Acestea sunt valori de referință, nu minime absolute. The Acquisition Sprint™ funcționează cel mai bine de la $500/lună în cheltuieli publicitare, The Revenue Pipeline™ de la $1.000–3.000/lună, și The Acquisition Architecture Program™ de la $2.000+/lună — toate mergând direct la platformele de publicitate, separat de taxa noastră de agenție. Fiecare brand are un context unic, și aliniem întotdeauna nivelul de investiție potrivit în timpul Auditului gratuit înainte de orice recomandare.',
      },
      {
        q: 'Cât timp durează până vedem rezultate?',
        a: 'Cei mai mulți clienți văd o îmbunătățire măsurabilă a costului per rezervare în primele 30–60 de zile. Sistemul complet — inclusiv CRM, automatizări și fluxuri de email — durează 30 de zile să fie construit și se îmbunătățește în timp. Stabilim așteptări realiste în Auditul de Achiziție înainte să te angajezi.',
      },
      {
        q: 'Ce include Auditul Gratuit de Achiziție?',
        a: 'Audităm conturile tale de reclame (acces read-only), analizăm lacunele de conversie, revizuim poziționarea ta competitivă și construim o recomandare personalizată de Acquisition Stack pentru brandul tău. Primești un raport PDF și un apel video de 30 de minute cu un specialist. Fără presiune de vânzare.',
      },
      {
        q: 'Trebuie să ofer acces la conturile mele de reclame existente?',
        a: 'Pentru audit, avem nevoie doar de acces read-only la Meta Ads Manager și Google Analytics. Pentru managementul continuu, lucrăm în conturile tale existente — nu deținem niciodată datele sau activele tale.',
      },
      {
        q: 'Ce se întâmplă dacă rezultatele nu îndeplinesc așteptările?',
        a: 'Urmărim costul per rezervare, ROAS și ratele de conversie lunar. Dacă nu atingem obiectivele agreate după 60 de zile, facem un diagnostic complet al sistemului și ajustăm. Revenue Intelligence Brief™ te ține informat despre fiecare schimbare pe care o facem și de ce.',
      },
    ],
  },
  finalCta: {
    overline: 'Pregătit?',
    h2part1: 'Pregătit să Îți Construiești',
    h2part2: 'Sistemul de Achiziție?',
    sub: 'Programează auditul gratuit de Achiziție. Îți vom arăta exact unde pierzi venituri — și ce am construi pentru a le recupera.',
    btn: 'Programează Auditul Tău Gratuit',
    note: '48 de ore · Fără presiune de vânzare · Diagnostic real',
  },
  footer: {
    links: ['Servicii', 'Studii de Caz', 'Audit Gratuit'],
    copyright: 'Toate drepturile rezervate.',
  },
  about: {
    overline: 'Despre ADS Architect',
    headline: 'Construit pentru Branduri care Refuză să Ghicească.',
    sub: 'Suntem o firmă de infrastructură de achiziție. Nu gestionăm reclame — inginericizăm sistemele care transformă bugetul de publicitate în venituri previzibile.',
    missionLabel: 'Misiunea Noastră',
    missionText:
      'Să facem infrastructura de achiziție accesibilă fiecărui brand de ospitalitate și wellness din lume — pentru ca calitatea sistemului tău de marketing, nu norocul, să determine creșterea ta.',
    principlesLabel: 'Cum Lucrăm',
    principles: [
      {
        title: 'Sisteme, Nu Campanii',
        body: 'Fiecare proiect este construit ca infrastructură — nu o serie de campanii izolate care trăiesc și mor independent.',
      },
      {
        title: 'Date Înainte de Decizii',
        body: 'Nu ghicim. Fiecare recomandare se bazează pe cifre reale din piața ta, conturile tale și peisajul competitiv.',
      },
      {
        title: 'Proprietate, Nu Dependență',
        body: 'Conturile tale, datele tale, activele tale. Construim sisteme pe care le deții — și pe care le poți înțelege.',
      },
      {
        title: 'Claritate Peste Complexitate',
        body: 'Nu ar trebui să ai nevoie de un decodor pentru a-ți înțelege marketingul. Revenue Intelligence Brief™ face fiecare decizie transparentă.',
      },
    ],
    globalLabel: 'Unde Lucrăm',
    globalHeadline: 'Acoperire Globală. Inteligență Locală.',
    globalSub:
      'De la Bali la Berlin, Dubai la Denver — construim sisteme de achiziție pentru branduri de ospitalitate și wellness din toate piețele majore.',
    regions: [
      'Asia de Sud-Est & Pacific',
      'Europa (incl. România)',
      'Orientul Mijlociu & EAU',
      'Americile (incl. Brazilia)',
      'Europa de Est (incl. România)',
      'Branduri Globale & Remote',
    ],
    processLabel: 'Procesul Nostru',
    processHeadline: 'Patru Săptămâni. Un Sistem. Rezultate Măsurabile.',
    processSteps: [
      {
        label: 'Săptămâna 1',
        title: 'Audit de Achiziție',
        desc: 'Mapăm fiecare lacună dintre configurația ta actuală și un sistem de achiziție complet funcțional.',
      },
      {
        label: 'Săptămâna 2',
        title: 'Design Arhitectură',
        desc: 'Proiectăm sistemul exact — fiecare canal, fiecare punct de contact, fiecare automatizare.',
      },
      {
        label: 'Săptămânile 3–4',
        title: 'Construire & Lansare',
        desc: 'Construim. Testăm. Lansăm — și îți predăm cheile.',
      },
      {
        label: 'Continuu',
        title: 'Inteligență & Optimizare',
        desc: 'Rapoarte lunare Revenue Intelligence. Audituri trimestriale ale sistemului. Îmbunătățire continuă.',
      },
    ],
    ctaTitle: 'Pregătit să Îți Construiești Sistemul de Achiziție?',
    ctaSub:
      'Începe cu un Audit de Achiziție gratuit. Fără presiune de vânzare — doar un diagnostic real al ce îți oprește creșterea.',
    ctaBtn: 'Programează Auditul Tău Gratuit',
  },
};

export const translations: Record<Locale, Translations> = {
  en,
  'pt-BR': ptBR,
  'pt-PT': ptPT,
  ro,
};

export function getTranslations(locale: string): Translations {
  return translations[locale as Locale] ?? translations.en;
}
