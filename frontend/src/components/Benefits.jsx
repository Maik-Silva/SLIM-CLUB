import React from 'react';
import { mockData } from '../mock';
import {
  Users,
  Activity,
  Repeat,
  Clock,
  Zap,
  Coffee,
  Utensils,
  Award,
  TrendingUp,
  Headphones,
  Shield
} from 'lucide-react';
import { Card } from './ui/card';

const iconMap = {
  Users: Users,
  Activity: Activity,
  Repeat: Repeat,
  Clock: Clock,
  Zap: Zap,
  coffee: Coffee
  Utensils: Utensils,
  Award: Award,
  TrendingUp: TrendingUp,
  Headphones: Headphones,
  Shield: Shield
};

const Benefits = () => {
  const { benefits } = mockData;

  return (
    <section id="benefits" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tudo que Você Precisa em
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              {' '}
              Um Só Lugar
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Plataforma completa com recursos exclusivos para sua transformação
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <Card
                key={index}
                className="bg-[#1a1a1a] border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
