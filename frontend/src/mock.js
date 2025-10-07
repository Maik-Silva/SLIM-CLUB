// Mock data para Slim Club Landing Page

export const mockData = {
  hero: {
    headline: "Sua comunidade de emagrecimento. A única comunidade que se conecta 100% com você",
    subtitle: "Treinos personalizados para casa ou academia, do iniciante ao avançado. Resultados reais em semanas!",
    ctaText: "QUERO COMEÇAR AGORA E TRANSFORMAR MEU CORPO!",
    ctaLink: "https://kiwify.app/aOR362A",
    stats: [
      { value: "50+", label: "Alunos Transformados" },
      { value: "98%", label: "Taxa de Satisfação" }
    ]
  },

  benefits: [
    {
      title: "Treinos para Casa e Academia",
      description: "Mais do que um plano: um movimento de pessoas transformando corpo e mente juntas.",
      icon: "dumbbell"
    },
    {
      title: "Fichas de Treino Editáveis",
      description: "Treinos de acordo com seus objetivos. Ajustes de séries, repetições e cargas.",
      icon: "clipboard"
    },
    {
      title: "Cardápios Alimentares Completos",
      description: "Planos nutricionais elaborados por especialista. Receitas saudáveis e deliciosas para cada objetivo.",
      icon: "utensils"
    },
    
    {
      title: "Suporte Humano Direto",
      description: "Tire suas dúvidas com nossa equipe especializada. Atendimento humanizado todos os dias.",
      icon: "headphones"
    },
    {
      title: "Garantia de 7 Dias",
      description: "Não gostou? Devolvemos 100% do seu dinheiro sem burocracia. Risco zero para você!",
      icon: "shield"
    }
  ],

  pricingPlans: [
    {
      name: "Mensal",
      price: "97",
      period: "/mês",
      description: "Acesso total à plataforma",
      features: [
        "Todos os treinos liberados",
        "Cardápios personalizados",
        "Aulas extras premium",
        "Suporte prioritário",
        "Atualizações semanais"
      ],
      ctaText: "QUERO ESSE PLANO",
      ctaLink: "[LINK DO CHECKOUT AQUI]",
      highlighted: false
    },
    {
      name: "Trimestral",
      price: "67",
      period: "/mês",
      originalPrice: "97",
      description: "Pague R$201 (3x de R$67)",
      badge: "Mais Popular",
      features: [
        "Todos os treinos liberados",
        "Cardápios personalizados",
        "Aulas extras premium",
        "Suporte prioritário",
        "Atualizações semanais",
        "E-book bônus grátis"
      ],
      ctaText: "GARANTIR DESCONTO",
      ctaLink: "[LINK DO CHECKOUT AQUI]",
      highlighted: true
    },
    {
      name: "Semestral",
      price: "57",
      period: "/mês",
      originalPrice: "97",
      description: "Pague R$342 (6x de R$57)",
      badge: "Melhor Custo-Benefício",
      features: [
        "Todos os treinos liberados",
        "Cardápios personalizados",
        "Aulas extras premium",
        "Suporte prioritário",
        "Atualizações semanais",
        "2 E-books bônus grátis",
        "Mentoria em grupo mensal"
      ],
      ctaText: "GARANTIR DESCONTO",
      ctaLink: "[LINK DO CHECKOUT AQUI]",
      highlighted: false
    },
    {
      name: "Anual",
      price: "47",
      period: "/mês",
      originalPrice: "97",
      description: "Pague R$564 (12x de R$47)",
      badge: "Maior Economia",
      features: [
        "Todos os treinos liberados",
        "Cardápios personalizados",
        "Aulas extras premium",
        "Suporte prioritário VIP",
        "Atualizações semanais",
        "Pack completo de E-books",
        "Mentoria em grupo mensal",
        "Consultoria individual trimestral"
      ],
      ctaText: "GARANTIR MAIOR DESCONTO",
      ctaLink: "[LINK DO CHECKOUT AQUI]",
      highlighted: false
    }
  ],

  testimonials: [
    {
      name: "Maria Silva",
      role: "Perdeu 18kg em 4 meses",
      content: "O Slim Club mudou minha vida! Consegui perder peso treinando em casa, nos meus horários. A plataforma é super completa e o suporte é incrível!",
      rating: 5,
      image: "placeholder"
    },
    {
      name: "João Santos",
      role: "Ganhou 8kg de massa muscular",
      content: "Treino há 3 anos, mas foi com o Slim Club que vi os melhores resultados. Os treinos são variados e os cardápios fazem toda diferença!",
      rating: 5,
      image: "placeholder"
    },
    {
      name: "Ana Costa",
      role: "Transformou o corpo em 6 meses",
      content: "Sempre tive dificuldade com dietas, mas os cardápios do Slim Club são deliciosos e fáceis de seguir. Já eliminei 22kg e me sinto incrível!",
      rating: 5,
      image: "placeholder"
    }
  ],

  faq: [
    {
      question: "Como funciona o acesso à plataforma Slim Club?",
      answer: "Após a confirmação do pagamento, você recebe imediatamente um e-mail com seus dados de acesso. Entre na plataforma e comece a treinar na hora! Todo o conteúdo fica disponível 24/7 para você acessar quando e onde quiser."
    },
    {
      question: "Preciso ter experiência prévia com treinos?",
      answer: "Não! O Slim Club é perfeito tanto para iniciantes quanto para avançados. Temos treinos para todos os níveis, com vídeos explicativos detalhados e orientações passo a passo. Você começa no seu ritmo e evolui gradualmente."
    },
    {
      question: "Posso treinar em casa sem equipamentos?",
      answer: "Sim! Temos centenas de treinos que podem ser feitos apenas com o peso do corpo, sem necessidade de equipamentos. Também oferecemos treinos com equipamentos mínimos (elásticos, halteres) e treinos completos para academia."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Simples: você tem 7 dias para testar toda a plataforma. Se por qualquer motivo não gostar, basta enviar um e-mail e devolvemos 100% do seu investimento, sem perguntas ou burocracia. Risco zero!"
    },
    {
      question: "Os cardápios são personalizados?",
      answer: "Sim! Oferecemos diversos planos alimentares para diferentes objetivos: emagrecimento, ganho de massa muscular, manutenção. Você escolhe o que se adequa ao seu objetivo e preferências alimentares."
    },
    {
      question: "Vou ter suporte se tiver dúvidas?",
      answer: "Com certeza! Nossa equipe está disponível para tirar todas as suas dúvidas sobre treinos, alimentação e uso da plataforma. O suporte é humanizado e responde rapidamente."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas adicionais. O acesso continua até o final do período já pago."
    },
    {
      question: "A plataforma funciona no celular?",
      answer: "Perfeitamente! O Slim Club é 100% responsivo e funciona em qualquer dispositivo: celular, tablet, computador. Você pode levar seus treinos para a academia ou fazer em casa com total praticidade."
    }
  ],

  footer: {
    description: "Slim Club - A plataforma fitness mais completa do Brasil. Transforme seu corpo, mude sua vida.",
    links: [
      { text: "Termos de Uso", url: "#" },
      { text: "Política de Privacidade", url: "#" },
      { text: "Contato", url: "#" },
      { text: "FAQ", url: "#faq" }
    ],
    social: [
      { platform: "Instagram", url: "#" },
      { platform: "Facebook", url: "#" },
      { platform: "YouTube", url: "#" }
    ],
    copyright: "© 2025 Slim Club. Todos os direitos reservados."
  }
};
