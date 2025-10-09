import React from 'react';
import { mockData } from '../mock';
import { Button } from './ui/button';
import { TrendingUp, Users, Award } from 'lucide-react';

const Hero = () => {
  const { hero } = mockData;

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {hero.headline}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>

          {/* CTA Button */}
          <div className="mb-12 px-4 md:px-0">
            <Button
              onClick={() => window.location.href = hero.ctaLink}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm md:text-lg px-6 md:px-10 py-4 md:py-6 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 w-full md:w-auto max-w-full whitespace-normal leading-tight"
            >
              {hero.ctaText}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {hero.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  {index === 0 && <Users className="w-8 h-8 text-purple-400 mb-3" />}
                  {index === 1 && <TrendingUp className="w-8 h-8 text-pink-400 mb-3" />}
                  {index === 2 && <Award className="w-8 h-8 text-purple-400 mb-3" />}
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Video */}
          <div className="mt-16 rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-lg shadow-purple-500/20">
            <div className="aspect-video bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0xGNHKKD_jA"
                title="Slim Club - Vídeo de Apresentação"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
