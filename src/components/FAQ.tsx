import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqItems = [
    {
      question: "Como funciona a consultoria online?",
      answer: "Após escolher o seu plano, você responde a uma avaliação detalhada sobre seu histórico, rotina, objetivo e limitações. Com base nessas respostas, o Reinan elabora sua planilha de treinamento personalizada e envia com vídeos de cada exercício, além de dar suporte contínuo pelo WhatsApp para tirar dúvidas e corrigir execuções."
    },
    {
      question: "Preciso frequentar academia?",
      answer: "Não necessariamente. Seu treino pode ser planejado tanto para academias convencionais ou de condomínio quanto para treinos em casa com pesos livres, elásticos ou apenas com o peso corporal. O plano é adaptado aos recursos que você tiver à disposição."
    },
    {
      question: "Os treinos são personalizados?",
      answer: "Sim, 100% individualizados. Não há fichas prontas. O treinamento respeita sua condição física atual, restrições articulares, frequência semanal disponível e meta específica (emagrecimento, hipertrofia ou saúde)."
    },
    {
      question: "Como recebo os exercícios?",
      answer: "Você recebe todo o seu programa de treino organizado de forma digital e prática, contendo as divisões dos dias, ordem dos exercícios, séries, repetições, intervalos de descanso e vídeos demonstrativos em alta definição mostrando a execução correta de cada movimento."
    },
    {
      question: "Existe acompanhamento pelo WhatsApp?",
      answer: "Sim. O WhatsApp é o canal direto de comunicação entre você e o Reinan. Você pode enviar dúvidas sobre os exercícios, pedir orientações e enviar vídeos dos seus movimentos para receber correções de postura e carga."
    },
    {
      question: "Posso contratar mesmo sendo iniciante?",
      answer: "Com certeza. A consultoria é especialmente indicada para quem está começando, pois ensina desde o início a postura correta, evita lesões e impede que você perca tempo fazendo exercícios ineficazes."
    },
    {
      question: "Como faço para começar?",
      answer: "Basta clicar em um dos botões desta página para falar diretamente com o Reinan no WhatsApp, escolher seu plano e dar início à sua avaliação inicial."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-[#080A09] overflow-hidden">
      {/* BACKGROUND ACCENT */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#A3F238]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191F1B] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#A3F238] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-5">
            DÚVIDAS SOBRE <br />
            <span className="text-gradient-green">A CONSULTORIA?</span>
          </h2>
          <p className="text-base text-[#A0A69F] leading-relaxed">
            Confira as respostas para as principais dúvidas sobre como funciona o acompanhamento online.
          </p>
        </div>

        {/* ACCORDION ITEMS */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#191F1B] border-[#A3F238]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                    : 'bg-[#111512] border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-headline font-bold text-base sm:text-lg text-white pr-4">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#A3F238] text-[#080A09]' : 'bg-[#191F1B] text-[#A0A69F]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#A0A69F] leading-relaxed border-t border-white/5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* EXTRA QUESTION WHATSAPP CARD */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-[#111512] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-headline font-bold text-white text-base sm:text-lg mb-1">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="text-xs sm:text-sm text-[#A0A69F]">
              Fale diretamente com o Reinan e receba um atendimento atencioso.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('duvidas')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-wider text-[#080A09] bg-[#A3F238] hover:bg-[#8FE024] px-6 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(163,242,56,0.3)] shrink-0 hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
