import React from 'react';
import { Heart, UserCheck } from 'lucide-react';

export const Differentials: React.FC = () => {
  const points = [
    {
      title: "Seu objetivo importa.",
      desc: "Não tentamos encaixar você em um padrão genérico. Ouvimos o que você quer conquistar e construímos um plano viável e empolgante."
    },
    {
      title: "Seu treinamento precisa respeitar suas necessidades.",
      desc: "Se você tem dores no joelho, rotina puxada no trabalho ou poucos dias na semana, o treino se adapta a você, e não o contrário."
    },
    {
      title: "Você recebe acompanhamento profissional.",
      desc: "Orientação direta de um profissional credenciado pelo CREF Bahia, com base científica e experiência prática comprovada."
    },
    {
      title: "Suas dúvidas têm espaço.",
      desc: "Não há perguntas bobas. Você tem abertura e canal direto para falar sobre cansaço, dúvidas de exercícios ou ajustes de rotina."
    },
    {
      title: "Sua evolução merece atenção.",
      desc: "Cada quilo perdido, cada repetição a mais e cada vitória no espelho são comemorados e analisados para o próximo degrau."
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#111512] overflow-hidden border-t border-b border-white/5">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#A3F238]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: 5 ARGUMENTS (7 COLS) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191F1B] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#A3F238] mb-4">
              <Heart className="w-3.5 h-3.5" />
              <span>Atendimento Humanizado</span>
            </div>

            <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              AQUI, VOCÊ NÃO É <br />
              <span className="text-[#A3F238]">APENAS MAIS UM ALUNO.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A0A69F] leading-relaxed mb-10">
              Na consultoria do Reinan Silva, a relação vai além do treino: é uma parceria sincera pelo seu desenvolvimento físico e mental.
            </p>

            {/* 5 ARGUMENTS LIST WITH SOPHISTICATED TIMELINE/EDITORIAL FEEL */}
            <div className="space-y-6">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#191F1B] border border-[#A3F238]/30 flex items-center justify-center text-[#A3F238] font-bold text-xs shrink-0 mt-0.5 group-hover:bg-[#A3F238] group-hover:text-[#080A09] transition-all">
                    0{idx + 1}
                  </div>
                  <div className="pb-4 border-b border-white/5 w-full">
                    <h3 className="font-headline font-bold text-base sm:text-lg text-white mb-1 group-hover:text-[#A3F238] transition-colors">
                      {pt.title}
                    </h3>
                    <p className="text-sm text-[#A0A69F] leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: REAL PHOTO WITH HIGHLIGHT BADGES (5 COLS) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] lg:max-w-none">
              
              {/* EDITORIAL CARD PHOTO */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-t from-[#080A09] via-[#191F1B] to-[#111512] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <img
                  src="/images/com-aluno.jpeg"
                  alt="Reinan Silva Orientando Aluno em Treino Personalizado"
                  className="w-full h-auto object-cover object-center filter drop-shadow-xl"
                  loading="lazy"
                />
              </div>

              {/* FLOATING PILL */}
              <div className="absolute -top-4 -left-4 p-3 rounded-2xl bg-[#191F1B] border border-[#A3F238]/40 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <UserCheck className="w-5 h-5 text-[#A3F238]" />
                <span className="text-xs font-headline font-bold text-white">Suporte Próximo</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
