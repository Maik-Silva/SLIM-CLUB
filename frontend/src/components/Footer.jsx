import React from 'react';
import { mockData } from '../mock';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const socialIcons = {
  Instagram: Instagram,
  Facebook: Facebook,
  YouTube: Youtube
};

const Footer = () => {
  const { footer } = mockData;

  return (
    <footer className="bg-[#0a0a0a] border-t border-purple-500/20 py-12 px-4">
      <div className="container mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Slim</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> Club</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {footer.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              {footer.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              {footer.social.map((social, index) => {
                const IconComponent = socialIcons[social.platform];
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-500/20 pt-8 text-center">
          <p className="text-gray-500 text-sm">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
