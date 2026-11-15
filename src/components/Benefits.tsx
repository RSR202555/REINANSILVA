import React from 'react';
import { Compass, Target, ShieldCheck, HeartHandshake, RefreshCw, CalendarCheck, Sparkles } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      num: "01",
      icon: <Compass className="w-5 h-5 text-[#A3F238]" />,
      title: "Mais clareza sobre o que fazer",
      desc: "Chega de dúvidas na academia ou de pular de aparelho em aparelho sem rumo. Você sabe exatamente a ordem, a carga e o número de séries a cada sessão."
    },
    {
      num: "02",
      icon: <Target className="w-5 h-5 text-[#A3F238]" />,
      title: "Treinos adaptados aos seus objetivos",
      desc: "Seja para secar gordura localizada, construir massa magra ou ganhar vitalidade, cada exercício tem uma razão fisiológica clara de estar ali."
    },
    {
      num: "03",
      icon: <ShieldCheck className="w-5 h-5 text-[#A3F238]" />,
      title: "Orientação profissional",
      desc: "Segurança total nos movimentos. Você aprende a biomecânica correta para proteger suas articulações e extrair a máxima contração do músculo."
    },
    {
      num: "04",
      icon: <HeartHandshake className="w-5 h-5 text-[#A3F238]" />,
      title: "Acompanhamento mais próximo",
      desc: "Você não está sozinho. Tem o Reinan na palma da mão para tirar dúvidas, corrigir vídeos de execução e receber motivação real."
    },
    {
      num: "05",
      icon: <RefreshCw className="w-5 h-5 text-[#A3F238]" />,
      title: "Ajustes conforme sua evolução",
      desc: "O corpo se adapta rápido aos estímulos. Seu treino é ajustado progressivamente para que você continue quebrando platôs e evoluindo mês a mês."
    },
    {
      num: "06",
      icon: <CalendarCheck className="w-5 h-5 text-[#A3F238]" />,
      title: "Mais organização e consistência",
      desc: "Planejamento que cabe na sua rotina real de trabalho e família. A previsibilidade que você precisa para manter o foco e nunca mais desistir."
    }
  ];

  return (
    <section id="beneficios" className="relative py-24 lg:py-32 bg-[#080A09] overflow-hidden scroll-mt-20">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#A3F238]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#191F1B] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* EDITORIAL HEADER WITH ASYMMETRIC HIGHLIGHT */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191F1B] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#A3F238] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Vantagens Reais</span>
            </div>
            <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              VOCÊ NÃO PRECISA <br />
              <span className="text-gradient-green">TREINAR SOZINHO.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#A0A69F] leading-relaxed">
            Ter um profissional ao seu lado muda completamente a sua relação com o treino, acelera seus ganhos e evita perdas de tempo e lesões.
          </p>
        </div>

        {/* ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.num}
              className="relative rounded-3xl bg-[#111512] border border-white/5 hover:border-[#A3F238]/40 p-8 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              {/* TOP ROW: ICON + NUMBER */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#191F1B] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#A3F238]/40 transition-all">
                    {b.icon}
                  </div>
                  <span className="text-3xl font-headline font-extrabold text-white/10 group-hover:text-[#A3F238]/30 transition-colors">
                    {b.num}
                  </span>
                </div>

                <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-3 group-hover:text-[#A3F238] transition-colors">
                  {b.title}
                </h3>

                <p className="text-sm text-[#A0A69F] leading-relaxed">
                  {b.desc}
                </p>
              </div>

              {/* BOTTOM SUBTLE LINE */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-[11px] font-semibold text-[#A0A69F] group-hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3F238]" />
                <span>Pilar de resultado</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
