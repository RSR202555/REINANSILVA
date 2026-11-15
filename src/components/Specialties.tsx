import React from 'react';
import { Flame, Dumbbell, HeartPulse, ArrowRight, Check, Activity, TrendingUp, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export const Specialties: React.FC = () => {
  return (
    <section id="especialidades" className="relative py-24 lg:py-32 bg-[#080A09] overflow-hidden scroll-mt-20">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#A3F238]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-subtle-mesh opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191F1B] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#A3F238] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Foco e Metodologia</span>
          </div>
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-5">
            UM TREINAMENTO ALINHADO <br className="hidden sm:inline" />
            <span className="text-gradient-green">AO SEU OBJETIVO.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0A69F] leading-relaxed">
            Nada de rotinas genéricas. Cada protocolo é desenhado sob medida para o seu estilo de vida, tempo disponível e a meta que você quer alcançar.
          </p>
        </div>

        {/* THREE DISTINCT VISUAL COMPOSITIONS */}
        <div className="space-y-10">
          
          {/* SPECIALTY 1: EMAGRECIMENTO (PANORAMIC DYNAMIC SPLIT) */}
          <div className="relative rounded-3xl bg-gradient-to-r from-[#111512] via-[#191F1B] to-[#111512] border border-[#A3F238]/20 p-8 sm:p-12 overflow-hidden shadow-2xl group hover:border-[#A3F238]/40 transition-all duration-300">
            {/* AMBIENT ORANGE/LIME GLOW */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#A3F238]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#A3F238]/10 text-[#A3F238] text-xs font-bold uppercase tracking-wider mb-4 border border-[#A3F238]/20">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Protocolo de Definição & Queima</span>
                </div>

                <h3 className="font-headline font-extrabold text-3xl sm:text-4xl text-white mb-4 tracking-tight">
                  EMAGRECIMENTO
                </h3>

                <p className="text-base sm:text-lg text-[#A0A69F] leading-relaxed mb-6 max-w-xl">
                  Treinamento direcionado à evolução física e à busca por uma rotina mais saudável. O foco é acelerar o gasto calórico sem perder massa muscular, promovendo firmeza e definição corporal.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2.5 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#A3F238] shrink-0" />
                    <span>Aceleração metabólica pós-treino</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#A3F238] shrink-0" />
                    <span>Preservação da massa magra</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#A3F238] shrink-0" />
                    <span>Treinos dinâmicos e motivantes</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#A3F238] shrink-0" />
                    <span>Ajustes com base nas suas medidas</span>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl('emagrecimento')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[#080A09] bg-[#A3F238] hover:bg-[#8FE024] px-6 py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(163,242,56,0.3)] hover:scale-[1.02]"
                >
                  <span>Quero Emagrecer com Orientação</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* RIGHT VISUAL: METABOLIC METRIC CARD */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm p-6 rounded-2xl bg-[#080A09]/90 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col gap-5">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-white">Indicadores de Foco</span>
                    <Activity className="w-4 h-4 text-[#A3F238]" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs text-[#A0A69F] mb-1.5 font-medium">
                        <span>Queima de Gordura Eficiente</span>
                        <span className="text-[#A3F238] font-bold">100%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-[#A3F238] rounded-full w-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-[#A0A69F] mb-1.5 font-medium">
                        <span>Definição Muscular & Tônus</span>
                        <span className="text-[#A3F238] font-bold">Progressivo</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#A3F238] to-[#79C92B] rounded-full w-[90%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-[#A0A69F] mb-1.5 font-medium">
                        <span>Adaptação à Rotina Corrida</span>
                        <span className="text-[#A3F238] font-bold">Otimizado</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-[#79C92B] rounded-full w-[95%]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#191F1B] border border-white/5 text-[11px] text-[#A0A69F]">
                    <strong className="text-white">Resultado planejado:</strong> Sem perda de vigor, sem dietas extremas desnecessárias, com estratégia sustentável.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DUAL COMPOSITION: HIPERTROFIA & QUALIDADE DE VIDA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* SPECIALTY 2: HIPERTROFIA */}
            <div className="relative rounded-3xl bg-[#111512] border border-white/10 p-8 sm:p-10 flex flex-col justify-between group hover:border-[#A3F238]/40 transition-all duration-300 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3F238]/5 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#A3F238]/10 text-[#A3F238] text-xs font-bold uppercase tracking-wider mb-4 border border-[#A3F238]/20">
                  <Dumbbell className="w-3.5 h-3.5" />
                  <span>Construção & Força</span>
                </div>

                <h3 className="font-headline font-extrabold text-2xl sm:text-3xl text-white mb-3 tracking-tight">
                  HIPERTROFIA
                </h3>

                <p className="text-sm sm:text-base text-[#A0A69F] leading-relaxed mb-6">
                  Treinamento estruturado para quem deseja desenvolver massa muscular e evoluir fisicamente. Baseado em sobrecarga progressiva, volume de treino dosado e amplitude de movimento correta.
                </p>

                <div className="space-y-2.5 mb-8">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#A3F238] shrink-0" />
                    <span>Periodização inteligente com foco em hipertrofia</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#A3F238] shrink-0" />
                    <span>Divisão de treino alinhada à sua frequência semanal</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#A3F238] shrink-0" />
                    <span>Progressão sistemática de cargas e repetições</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#A3F238] shrink-0" />
                    <span>Estímulo muscular sem sobrecarregar tendões</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#A0A69F] font-semibold">Meta Principal</span>
                  <span className="text-sm font-headline font-bold text-white">Massa Magra & Densidade</span>
                </div>
                <a
                  href={getWhatsAppUrl('hipertrofia')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-headline font-bold uppercase tracking-wider text-[#A3F238] hover:text-white transition-colors"
                >
                  <span>Quero Hipertrofia</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* SPECIALTY 3: SAÚDE E QUALIDADE DE VIDA */}
            <div className="relative rounded-3xl bg-[#191F1B] border border-white/10 p-8 sm:p-10 flex flex-col justify-between group hover:border-[#A3F238]/40 transition-all duration-300 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#79C92B]/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 text-gray-200 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                  <HeartPulse className="w-3.5 h-3.5 text-[#A3F238]" />
                  <span>Longevidade & Bem-Estar</span>
                </div>

                <h3 className="font-headline font-extrabold text-2xl sm:text-3xl text-white mb-3 tracking-tight">
                  SAÚDE E QUALIDADE DE VIDA
                </h3>

                <p className="text-sm sm:text-base text-[#A0A69F] leading-relaxed mb-6">
                  Atividades planejadas para melhorar o condicionamento físico e promover mais qualidade de vida. Treinar para ter energia no dia a dia, mobilidade articular, postura ereta e ausência de dores crônicas.
                </p>

                <div className="space-y-2.5 mb-8">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#A3F238] shrink-0" />
                    <span>Fortalecimento do core e estabilização da coluna</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#A3F238] shrink-0" />
                    <span>Mobilidade e flexibilidade para movimentos do cotidiano</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#A3F238] shrink-0" />
                    <span>Aumento da capacidade cardiorrespiratória</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#A3F238] shrink-0" />
                    <span>Redução de estresse e melhora profunda do sono</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#A0A69F] font-semibold">Meta Principal</span>
                  <span className="text-sm font-headline font-bold text-white">Disposição & Longevidade</span>
                </div>
                <a
                  href={getWhatsAppUrl('saude')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-headline font-bold uppercase tracking-wider text-[#A3F238] hover:text-white transition-colors"
                >
                  <span>Quero Mais Saúde</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
