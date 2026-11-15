import React from 'react';
import { Check, Star, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export interface PlanData {
  id: string;
  name: string;
  durationBadge: string;
  description: string;
  isPopular?: boolean;
  messageKey: 'planoMensal' | 'planoTrimestral' | 'planoSemestral';
  features: string[];
  ctaLabel: string;
}

export const PLANS: PlanData[] = [
  {
    id: 'mensal',
    name: 'MENSAL',
    durationBadge: '1 Mês de Consultoria',
    description: 'Ideal para quem deseja iniciar e conhecer a metodologia de acompanhamento individualizado.',
    messageKey: 'planoMensal',
    ctaLabel: 'Quero o Plano Mensal',
    features: [
      'Treino 100% personalizado',
      'Vídeos demonstrativos de execução',
      'Avaliação inicial de objetivos',
      'Acompanhamento pelo WhatsApp',
      'Suporte para tirar dúvidas',
      'Orientações durante todo o mês'
    ]
  },
  {
    id: 'trimestral',
    name: 'TRIMESTRAL',
    durationBadge: '3 Meses de Consultoria',
    description: 'O período perfeito para consolidar novos hábitos e notar transformações reais no corpo.',
    isPopular: true,
    messageKey: 'planoTrimestral',
    ctaLabel: 'Quero o Plano Trimestral',
    features: [
      'Tudo do Plano Mensal incluído',
      'Ajustes periódicos nas planilhas',
      'Periodização para 3 meses completos',
      'Acompanhamento contínuo no WhatsApp',
      'Análise de evolução corporal',
      'Maior aderência e consistência'
    ]
  },
  {
    id: 'semestral',
    name: 'SEMESTRAL',
    durationBadge: '6 Meses de Consultoria',
    description: 'Para quem busca uma evolução profunda, consistente e duradoura ao longo do semestre.',
    messageKey: 'planoSemestral',
    ctaLabel: 'Quero o Plano Semestral',
    features: [
      'Tudo do Plano Trimestral incluído',
      'Periodização estratégica de longo prazo',
      'Suporte contínuo para evolução contínua',
      'Prioridade de atendimento no WhatsApp',
      'Ajustes sistemáticos antiestagnação',
      'Máxima consistência e evolução duradoura'
    ]
  }
];

export const Plans: React.FC = () => {
  return (
    <section id="planos" className="relative py-24 lg:py-32 bg-[#080A09] overflow-hidden">
      {/* BACKGROUND AMBIENCE */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#A3F238]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191F1B] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#A3F238] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Planos de Acompanhamento</span>
          </div>
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-5">
            ESCOLHA COMO QUER <br />
            <span className="text-gradient-green">COMEÇAR SUA EVOLUÇÃO.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0A69F] leading-relaxed">
            Treinamento individualizado com orientação direta do Reinan. Selecione a opção ideal para o seu momento e fale diretamente no WhatsApp.
          </p>
        </div>

        {/* PRICING CARDS (SEM VALORES) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => {
            const isFeatured = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#191F1B] border-2 border-[#A3F238] shadow-[0_0_40px_rgba(163,242,56,0.25)] lg:-translate-y-3'
                    : 'bg-[#111512] border border-white/10 hover:border-[#A3F238]/30 shadow-xl'
                }`}
              >
                {/* POPULAR BADGE */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#A3F238] text-[#080A09] font-headline font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-[#080A09]" />
                    <span>Recomendado • Mais Escolhido</span>
                  </div>
                )}

                <div>
                  {/* PLAN NAME & DESC */}
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-widest font-bold text-[#A0A69F]">
                      Plano
                    </span>
                    <h3 className="font-headline font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A0A69F] mt-2 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* DURATION BLOCK (SEM VALORES) */}
                  <div className="pb-6 mb-8 border-b border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#A0A69F] font-semibold block">
                        Período de Treino
                      </span>
                      <span className="font-headline font-bold text-lg sm:text-xl text-white mt-0.5 block">
                        {plan.durationBadge}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-[#A3F238]">
                      Consultoria Online
                    </span>
                  </div>

                  {/* FEATURES LIST */}
                  <div className="space-y-3.5 mb-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
                      O que está incluso:
                    </span>
                    {plan.features.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`p-0.5 rounded-full mt-0.5 shrink-0 ${isFeatured ? 'bg-[#A3F238] text-[#080A09]' : 'bg-white/10 text-[#A3F238]'}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WHATSAPP CTA BUTTON */}
                <div>
                  <a
                    href={getWhatsAppUrl(plan.messageKey)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-xl font-headline font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                      isFeatured
                        ? 'bg-[#A3F238] text-[#080A09] hover:bg-[#8FE024] shadow-[0_0_25px_rgba(163,242,56,0.4)] hover:scale-[1.02]'
                        : 'bg-[#191F1B] text-white hover:text-[#080A09] hover:bg-[#A3F238] border border-white/10 hover:border-transparent'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  
                  <p className="text-center text-[10px] text-[#A0A69F] mt-3">
                    Fale diretamente com o Reinan no WhatsApp
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
