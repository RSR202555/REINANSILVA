import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, PROFESSIONAL_INFO } from '../config/whatsapp';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Canais de Atendimento e Redes Sociais" className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-3">
      {/* QUICK FLOATING GREETING TOOLTIP */}
      {showTooltip && (
        <div className="relative p-3.5 pr-8 rounded-2xl bg-[#111512]/95 border border-[#A3F238]/40 text-left shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl max-w-[240px] animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#A0A69F] hover:text-white transition-colors"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#A3F238] animate-ping" />
            <span className="text-[10px] uppercase font-bold text-[#A3F238] tracking-wider">
              {PROFESSIONAL_INFO.name} Online
            </span>
          </div>
          <p className="text-xs text-gray-200 font-medium leading-snug">
            Quer transformar seu treino? Clique aqui para conversar comigo!
          </p>
        </div>
      )}

      {/* FLOATING ACTION BUTTONS */}
      <div className="flex flex-col items-center gap-2.5">
        {/* FLOATING INSTAGRAM BUTTON */}
        <a
          href={PROFESSIONAL_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Seguir Reinan Silva no Instagram"
          title="Siga no Instagram @reinansilvaapersonal"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_0_20px_rgba(220,39,67,0.4)] hover:shadow-[0_0_30px_rgba(220,39,67,0.7)] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <InstagramIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </a>

        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href={getWhatsAppUrl('floating')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp com Reinan Silva"
          title="Conversar no WhatsApp"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#A3F238] hover:bg-[#8FE024] text-[#080A09] shadow-[0_0_30px_rgba(163,242,56,0.5)] hover:shadow-[0_0_45px_rgba(163,242,56,0.8)] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <span className="absolute inset-0 rounded-full bg-[#A3F238] opacity-75 animate-ping -z-10" />
          <MessageCircle className="w-7 h-7 text-[#080A09]" />
        </a>
      </div>
    </aside>
  );
};
