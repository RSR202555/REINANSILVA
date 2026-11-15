import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { getWhatsAppUrl, PROFESSIONAL_INFO } from '../config/whatsapp';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#111512] overflow-hidden border-t border-white/5">
      {/* POWERFUL AMBIENT LIGHTING */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#A3F238]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-subtle-mesh opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-[40px] bg-gradient-to-b from-[#191F1B] to-[#080A09] border border-[#A3F238]/30 p-8 sm:p-14 lg:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.9)] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* TEXT & CTA (7 COLS) */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080A09] border border-[#A3F238]/30 text-xs font-bold uppercase tracking-widest text-[#A3F238] mb-6 shadow-md">
                <Zap className="w-3.5 h-3.5 text-[#A3F238]" />
                <span>Chegou o seu momento</span>
              </div>

              {/* HEADLINE */}
              <h2 className="font-headline font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-6">
                SUA EVOLUÇÃO COMEÇA <br />
                <span className="text-gradient-green">COM UMA DECISÃO.</span>
              </h2>

              {/* PARAGRAPH */}
              <p className="text-base sm:text-xl text-[#A0A69F] max-w-xl font-normal leading-relaxed mb-10">
                Conte com orientação profissional e um acompanhamento pensado para seus objetivos.
              </p>

              {/* BUTTON */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href={getWhatsAppUrl('hero')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-9 py-5 rounded-xl font-headline font-bold text-sm uppercase tracking-wider text-[#080A09] bg-[#A3F238] hover:bg-[#8FE024] transition-all duration-300 shadow-[0_0_35px_rgba(163,242,56,0.45)] hover:shadow-[0_0_50px_rgba(163,242,56,0.7)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 text-[#080A09]" />
                  <span>Quero Começar Minha Consultoria</span>
                  <ArrowRight className="w-4 h-4 text-[#080A09] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* GUARANTEE NOTE */}
              <div className="flex items-center gap-2 mt-6 text-xs text-[#A0A69F]">
                <ShieldCheck className="w-4 h-4 text-[#A3F238]" />
                <span>Atendimento direto com o {PROFESSIONAL_INFO.name} ({PROFESSIONAL_INFO.cref})</span>
              </div>

            </div>

            {/* REINAN SILVA PROFILE SPOTLIGHT (4 COLS) */}
            <div className="lg:col-span-4 hidden lg:flex justify-end relative">
              <div className="relative w-72 h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#080A09]">
                <img
                  src="/images/reinan-hero.png"
                  alt="Reinan Silva Personal Trainer"
                  className="w-full h-full object-cover object-top filter contrast-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="font-headline font-bold text-sm text-white block">
                    {PROFESSIONAL_INFO.name}
                  </span>
                  <span className="text-[11px] text-[#A3F238] uppercase tracking-wider font-semibold block">
                    {PROFESSIONAL_INFO.slogan}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
