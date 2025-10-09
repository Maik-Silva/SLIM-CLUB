"use client";

import { Dumbbell, ClipboardList, Utensils, Sparkles, Headphones, Shield } from "lucide-react";

const iconsMap = {
  dumbbell: Dumbbell,
  clipboardList: ClipboardList,
  utensils: Utensils,
  sparkles: Sparkles,
  headphones: Headphones,
  shield: Shield,
};

// Lista de benefícios
const benefits = [
  {
    icon: "dumbbell",
    title: "Treinos personalizados",
    description: "Protocolos elaborados para diferentes níveis e objetivos.",
  },
  {
    icon: "clipboardList",
    title: "Planos prontos",
    description: "Monte sua rotina com base em treinos pré-estruturados e eficazes.",
  },
  {
    icon: "utensils",
    title: "Orientação nutricional",
    description: "Estratégias de alimentação para potencializar seus resultados.",
  },
  {
    icon: "sparkles",
    title: "Transformações reais",
    description: "Resultados visíveis com acompanhamento e constância.",
  },
  {
    icon: "headphones",
    title: "Suporte e comunidade",
    description: "Tenha acesso a uma comunidade que compartilha conquistas e motivações.",
  },
  {
    icon: "shield",
    title: "Profissionais qualificados",
    description: "Equipe formada por especialistas em saúde, treino e nutrição.",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-green-700">
          Benefícios da Comunidade
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => {
            const Icon = iconsMap[benefit.icon];

            // Fallback seguro: se o ícone não for encontrado, usa Dumbbell
            const SafeIcon = Icon ? Icon : Dumbbell;

            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <SafeIcon className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
