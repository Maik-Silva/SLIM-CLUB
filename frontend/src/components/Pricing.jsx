import React from 'react';
import { mockData } from '../mock';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Check } from 'lucide-react';

const Pricing = () => {
  const { pricingPlans } = mockData;

  return (
    <section id="pricing" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Escolha Seu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> Plano Ideal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comece sua transformação hoje com garantia de 7 dias
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-[#1a1a1a] rounded-3xl p-6 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.highlighted
                  ? 'border-2 border-purple-500 shadow-lg shadow-purple-500/20'
                  : 'border border-purple-500/20 hover:border-purple-500/40'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6 mt-2">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                {plan.originalPrice && (
                  <p className="text-gray-500 line-through text-sm">De R${plan.originalPrice}/mês</p>
                )}
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-start justify-center">
                  <span className="text-2xl text-white font-semibold mt-2">R$</span>
                  <span className="text-5xl font-bold text-white mx-1">{plan.price}</span>
                  <span className="text-gray-400 text-lg mt-4">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={() => window.location.href = plan.ctaLink}
                className={`w-full rounded-full py-6 font-bold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/50'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-purple-500/30'
                }`}
              >
                {plan.ctaText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-[#1a1a1a] border border-purple-500/20 rounded-full px-6 py-3">
            <Check className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-gray-300">Garantia de 7 dias - Devolução sem complicações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
