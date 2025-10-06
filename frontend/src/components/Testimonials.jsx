import React from 'react';
import { mockData } from '../mock';
import { Card } from './ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const { testimonials } = mockData;

  return (
    <section id="testimonials" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resultados
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> Reais</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Veja o que nossos alunos têm a dizer sobre suas transformações
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#1a1a1a] border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
            >
              {/* Avatar Placeholder */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-2xl font-bold text-white mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-purple-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
