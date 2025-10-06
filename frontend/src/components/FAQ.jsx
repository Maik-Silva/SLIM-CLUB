import React from 'react';
import { mockData } from '../mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  const { faq } = mockData;

  return (
    <section id="faq" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Perguntas
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> Frequentes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tire todas as suas dúvidas sobre o Slim Club
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#1a1a1a] border border-purple-500/20 rounded-2xl px-6 hover:border-purple-500/40 transition-all duration-300"
            >
              <AccordionTrigger className="text-white hover:text-purple-400 text-left py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
