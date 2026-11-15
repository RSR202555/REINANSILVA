import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Dumbbell, Flame, HeartPulse, ChevronDown } from 'lucide-react';
import { getWhatsAppUrl, PROFESSIONAL_INFO } from '../config/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#080A09] overflow-hidden">
      {/* BACKGROUND ATMOSPHERE & LIGHTING */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#A3F238]/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-[#191F1B] rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-subtle-mesh opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HEADLINE & ACTIONS (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* CREDENTIAL BADGE */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#191F1B]/90 border border-[#A3F238]/30 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(163,242,56,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#A3F238] animate-pulse" />
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-200">
                {PROFESSIONAL_INFO.cref} • Atendimento Individualizado
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-[#A3F238]" />
            </div>

            {/* HEADLINE */}
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.08] tracking-tight text-white mb-6">
              SEU CORPO. <br />
              <span className="text-gradient-green">SUA EVOLUÇÃO.</span> <br />
              MEU ACOMPANHAMENTO.
            </h1>

            {/* SUBHEADLINE */}
            <p className="text-base sm:text-lg md:text-xl text-[#A0A69F] max-w-2xl font-normal leading-relaxed mb-6 sm:mb-8">
              Treinamento personalizado e acompanhamento profissional para você alcançar seus objetivos com orientação, estratégia e atenção individualizada.
            </p>

            {/* MOBILE ONLY: REINAN SILVA HERO PHOTO IN FIRST SCREEN */}
            <div className="lg:hidden relative w-full max-w-[320px] mx-auto mb-8 mt-2 flex justify-center items-end">
              {/* GLOW DISK */}
              <div className="absolute bottom-2 w-64 h-64 rounded-full bg-gradient-to-t from-[#A3F238]/25 to-transparent blur-2xl pointer-events-none" />
              
              {/* FRAME */}
              <div className="absolute inset-x-4 bottom-0 top-8 rounded-3xl bg-gradient-to-b from-[#191F1B]/70 to-[#111512]/90 border border-white/10 backdrop-blur-sm shadow-xl" />

              {/* IMAGE */}
              <div className="relative z-10 w-full flex justify-center">
                <img
                  src="/images/reinan-hero.png"
                  alt="Reinan Silva Personal Trainer"
                  className="w-full h-auto max-h-[300px] object-contain object-bottom filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
                  loading="eager"
                />
              </div>

              {/* FLOATING BADGE MOBILE */}
              <div className="absolute -bottom-3 left-2 z-20 p-2.5 rounded-xl bg-[#111512]/95 border border-[#A3F238]/40 backdrop-blur-xl shadow-lg flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#A3F238]/15 border border-[#A3F238]/30 flex items-center justify-center text-[#A3F238]">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-[#A0A69F] font-semibold">Metodologia</p>
                  <p className="text-xs font-headline font-bold text-white">100% Personalizada</p>
                </div>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href={getWhatsAppUrl('hero')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-headline font-bold text-sm uppercase tracking-wider text-[#080A09] bg-[#A3F238] hover:bg-[#8FE024] transition-all duration-300 shadow-[0_0_30px_rgba(163,242,56,0.35)] hover:shadow-[0_0_40px_rgba(163,242,56,0.6)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 text-[#080A09]" />
                <span>Quero Minha Consultoria</span>
                <ArrowRight className="w-4 h-4 text-[#080A09] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#consultoria"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-headline font-semibold text-sm uppercase tracking-wider text-white bg-[#191F1B] hover:bg-[#222B25] border border-white/10 hover:border-[#A3F238]/40 transition-all duration-300 hover:text-[#A3F238]"
              >
                <span>Conheça o Acompanhamento</span>
              </a>
            </div>

            {/* THREE SPECIALTIES PREVIEW STRIP */}
            <div className="w-full pt-6 border-t border-white/10">
              <div className="text-xs uppercase tracking-widest text-[#A0A69F] font-semibold mb-3 flex items-center gap-2">
                <span>Especialidades de Atendimento</span>
                <span className="w-12 h-px bg-white/20" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="#especialidades"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-[#111512] border border-white/5 hover:border-[#A3F238]/40 hover:bg-[#191F1B] transition-all"
                >
                  <div className="p-2 rounded-lg bg-[#A3F238]/10 text-[#A3F238] group-hover:scale-110 transition-transform">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-[#A3F238] transition-colors">
                      Emagrecimento
                    </h4>
                    <p className="text-[11px] text-[#A0A69F]">Definição & saúde</p>
                  </div>
                </a>

                <a
                  href="#especialidades"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-[#111512] border border-white/5 hover:border-[#A3F238]/40 hover:bg-[#191F1B] transition-all"
                >
                  <div className="p-2 rounded-lg bg-[#A3F238]/10 text-[#A3F238] group-hover:scale-110 transition-transform">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-[#A3F238] transition-colors">
                      Hipertrofia
                    </h4>
                    <p className="text-[11px] text-[#A0A69F]">Massa muscular</p>
                  </div>
                </a>

                <a
                  href="#especialidades"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-[#111512] border border-white/5 hover:border-[#A3F238]/40 hover:bg-[#191F1B] transition-all"
                >
                  <div className="p-2 rounded-lg bg-[#A3F238]/10 text-[#A3F238] group-hover:scale-110 transition-transform">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-[#A3F238] transition-colors">
                      Qualidade de Vida
                    </h4>
                    <p className="text-[11px] text-[#A0A69F]">Condicionamento</p>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: REINAN SILVA PROFESSIONAL HERO PHOTOGRAPHY (5 COLS - DESKTOP ONLY) */}
          <div className="hidden lg:flex lg:col-span-5 relative justify-center items-end mt-8 lg:mt-0">
            {/* GLOW DISK BEHIND REINAN */}
            <div className="absolute bottom-4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-t from-[#A3F238]/25 to-transparent blur-3xl pointer-events-none" />
            
            {/* GEOMETRIC ACCENT FRAME */}
            <div className="absolute inset-x-8 bottom-0 top-16 rounded-3xl bg-gradient-to-b from-[#191F1B]/60 to-[#111512]/80 border border-white/10 -z-0 backdrop-blur-sm shadow-2xl" />

            {/* REAL PHOTOGRAPH OF REINAN SILVA */}
            <div className="relative z-10 w-full max-w-[420px] lg:max-w-none flex justify-center">
              <img
                src="/images/reinan-hero.png"
                alt="Reinan Silva Personal Trainer"
                className="w-full h-auto max-h-[620px] object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
                loading="eager"
              />
            </div>

            {/* FLOATING BADGE 1: METODOLOGIA */}
            <div className="absolute -bottom-4 left-0 sm:left-4 z-20 p-3 sm:p-4 rounded-2xl bg-[#111512]/95 border border-[#A3F238]/40 backdrop-blur-xl shadow-[0_15px_30px_rgba(0,0,0,0.8)] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#A3F238]/15 border border-[#A3F238]/30 flex items-center justify-center text-[#A3F238]">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#A0A69F] font-semibold">Metodologia</p>
                <p className="text-xs sm:text-sm font-headline font-bold text-white">100% Personalizada</p>
              </div>
            </div>

            {/* FLOATING BADGE 2: SLOGAN OFICIAL */}
            <div className="absolute top-12 right-0 sm:-right-4 z-20 hidden sm:flex flex-col p-3.5 rounded-2xl bg-[#191F1B]/95 border border-white/10 backdrop-blur-xl shadow-xl max-w-[210px]">
              <span className="text-[10px] uppercase font-bold text-[#A3F238] tracking-wider mb-0.5">Propósito</span>
              <p className="text-xs text-gray-200 font-medium italic">
                “Treinar é descobrir a sua melhor versão.”
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM SCROLL INDICATOR */}
        <div className="mt-16 flex justify-center">
          <a
            href="#sobre"
            className="flex flex-col items-center gap-1.5 text-xs text-[#A0A69F] hover:text-[#A3F238] transition-colors"
          >
            <span className="tracking-widest uppercase text-[10px]">Saiba Mais</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#A3F238]" />
          </a>
        </div>
      </div>
    </section>
  );
};
