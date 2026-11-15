import React from 'react';
import { Award, Target, Users, Zap, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, PROFESSIONAL_INFO } from '../config/whatsapp';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-[#111512] overflow-hidden border-t border-b border-white/5 scroll-mt-20">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#A3F238]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#191F1B] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* EDITORIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: EDITORIAL PHOTO & CREDENTIAL SPOTLIGHT (5 COLS) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[380px] lg:max-w-none">
              {/* IMAGE CONTAINER WITH EDITORIAL FRAME */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#191F1B] to-[#080A09] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-transparent to-transparent z-10 opacity-70" />
                <img
                  src="/images/sobre-o-profissional.jpeg"
                  alt="Reinan Silva Personal Trainer em Salvador"
                  className="w-full h-auto object-cover object-top filter contrast-[1.05]"
                  loading="lazy"
                />

                {/* BOTTOM CAPTION */}
                <div className="absolute bottom-6 inset-x-6 z-20">
                  <div className="p-4 rounded-2xl bg-[#080A09]/90 backdrop-blur-xl border border-white/10">
                    <p className="text-xs uppercase tracking-wider text-[#A3F238] font-bold">
                      Profissional de Educação Física
                    </p>
                    <p className="text-white font-headline font-bold text-base mt-0.5">
                      {PROFESSIONAL_INFO.name}
                    </p>
                    <p className="text-xs text-[#A0A69F] mt-0.5">
                      {PROFESSIONAL_INFO.cref} • {PROFESSIONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* FLOATING STAT BADGE */}
              <div className="absolute -top-4 -right-4 sm:-right-6 p-4 rounded-2xl bg-[#191F1B] border border-[#A3F238]/30 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#A3F238] flex items-center justify-center text-[#080A09] font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xl font-headline font-extrabold text-white">100%</span>
                    <span className="block text-[11px] uppercase tracking-wider text-[#A0A69F] font-semibold">
                      Compromisso
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: EDITORIAL TEXT & 4 PILLARS (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A3F238] mb-3">
              <span className="w-6 h-px bg-[#A3F238]" />
              <span>Sobre o Profissional</span>
            </div>

            {/* TITLE */}
            <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              MAIS DO QUE TREINAR. <br />
              <span className="text-[#A3F238]">É ACOMPANHAR SUA EVOLUÇÃO.</span>
            </h2>

            {/* INTRODUCTORY ESSAY */}
            <div className="space-y-4 text-base sm:text-lg text-[#A0A69F] leading-relaxed mb-8">
              <p>
                Sou <strong className="text-white">Reinan Silva</strong>, profissional de Educação Física credenciado pelo CREF Bahia. Minha missão vai além de apenas prescrever fichas de exercícios: é guiar você em uma jornada consciente de evolução corporal, saúde e autoconfiança.
              </p>
              <p>
                Acredito que não existem treinos milagrosos nem fórmulas prontas. Cada organismo responde de maneira única ao esforço, à rotina e aos estímulos. Por isso, meu método é fundamentado em <strong className="text-white">ciência do movimento, periodização estratégica e acompanhamento humano de perto</strong>.
              </p>
            </div>

            {/* QUOTE BLOCK */}
            <blockquote className="relative p-5 rounded-2xl bg-[#191F1B] border-l-4 border-[#A3F238] mb-10">
              <p className="text-white font-headline text-base sm:text-lg italic font-medium">
                “{PROFESSIONAL_INFO.slogan}”
              </p>
              <cite className="block text-xs uppercase tracking-wider text-[#A0A69F] mt-2 font-semibold not-italic">
                — {PROFESSIONAL_INFO.name}, Personal Trainer
              </cite>
            </blockquote>

            {/* 4 PILLARS LIST (EDITORIAL FORMAT, NOT GENERIC CARDS) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#191F1B] border border-white/5 text-[#A3F238] shrink-0 mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-headline font-bold text-white mb-1">
                    Atendimento Próximo
                  </h3>
                  <p className="text-sm text-[#A0A69F] leading-snug">
                    Canal direto para dúvidas, feedbacks contínuos e motivação em todas as fases da sua rotina.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#191F1B] border border-white/5 text-[#A3F238] shrink-0 mt-1">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-headline font-bold text-white mb-1">
                    Atenção Individualizada
                  </h3>
                  <p className="text-sm text-[#A0A69F] leading-snug">
                    Respeito às suas limitações articulares, histórico de atividade, horários e objetivos reais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#191F1B] border border-white/5 text-[#A3F238] shrink-0 mt-1">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-headline font-bold text-white mb-1">
                    Orientação Profissional
                  </h3>
                  <p className="text-sm text-[#A0A69F] leading-snug">
                    Exercícios com metodologia validada, biomecânica correta e progressão de carga segura.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#191F1B] border border-white/5 text-[#A3F238] shrink-0 mt-1">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-headline font-bold text-white mb-1">
                    Compromisso com sua Evolução
                  </h3>
                  <p className="text-sm text-[#A0A69F] leading-snug">
                    Ajustes periódicos e avaliações para garantir que você continue evoluindo mês a mês.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div>
              <a
                href={getWhatsAppUrl('sobre')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-headline font-bold text-[#080A09] bg-[#A3F238] hover:bg-[#8FE024] px-7 py-3.5 rounded-xl tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(163,242,56,0.3)] hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com Reinan no WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
