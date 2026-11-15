import React from 'react';
import { 
  Smartphone, 
  PlayCircle, 
  ClipboardCheck, 
  RotateCcw, 
  MessageSquare, 
  HelpCircle, 
  Compass, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Check
} from 'lucide-react';
import { getWhatsAppUrl, PROFESSIONAL_INFO } from '../config/whatsapp';

export const OnlineConsulting: React.FC = () => {
  const consultingFeatures = [
    {
      icon: <ClipboardCheck className="w-5 h-5 text-[#A3F238]" />,
      title: "Avaliação Inicial Completa",
      desc: "Análise profunda de histórico esportivo, rotina diária, limitações articulares e preferências."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-[#A3F238]" />,
      title: "Treinos 100% Personalizados",
      desc: "Planilhas exclusivas estruturadas para a sua academia ou treinos em casa, focadas no seu objetivo."
    },
    {
      icon: <PlayCircle className="w-5 h-5 text-[#A3F238]" />,
      title: "Vídeos Demonstrativos",
      desc: "Acesso visual direto à execução correta, postura, cadência e respiração de cada exercício."
    },
    {
      icon: <RotateCcw className="w-5 h-5 text-[#A3F238]" />,
      title: "Ajustes Periódicos",
      desc: "Atualização sistemática das séries, cargas e métodos para evitar estagnação dos seus resultados."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#A3F238]" />,
      title: "Acompanhamento pelo WhatsApp",
      desc: "Contato direto com o Reinan para feedback rápido de postura, carga e incentivo contínuo."
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-[#A3F238]" />,
      title: "Suporte para Dúvidas",
      desc: "Sem ficar perdido na academia: envie suas dúvidas e vídeos para correção sempre que precisar."
    },
    {
      icon: <Compass className="w-5 h-5 text-[#A3F238]" />,
      title: "Orientações Durante o Processo",
      desc: "Dicas de consistência, recuperação muscular e ajustes na rotina conforme sua evolução avança."
    }
  ];

  return (
    <section id="consultoria" className="relative py-24 lg:py-32 bg-[#111512] overflow-hidden border-t border-b border-white/5 scroll-mt-20">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#A3F238]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191F1B] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#A3F238] mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Consultoria Online</span>
          </div>
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-5">
            SEU TREINO PERSONALIZADO. <br />
            <span className="text-[#A3F238]">SEU ACOMPANHAMENTO DE PERTO.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A0A69F] leading-relaxed">
            Mesmo à distância, você conta com orientação profissional e acompanhamento para manter sua evolução.
          </p>
        </div>

        {/* MAIN GRID: SMARTPHONE MOCKUP + 7 FEATURES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: HIGH-END DIGITAL SMARTPHONE MOCKUP (5 COLS) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              
              {/* BACK AMBIENT PHONE GLOW */}
              <div className="absolute inset-0 bg-[#A3F238]/20 blur-3xl rounded-[50px] -z-0" />

              {/* PHONE CHASSIS */}
              <div className="relative z-10 rounded-[44px] bg-[#080A09] border-[6px] border-[#28342D] shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
                
                {/* STATUS BAR & NOTCH */}
                <div className="bg-[#080A09] pt-3 pb-2 px-6 flex items-center justify-between border-b border-white/5 text-[10px] text-gray-400 font-semibold">
                  <span>09:41</span>
                  <div className="w-16 h-4 bg-[#191F1B] rounded-full mx-auto" />
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-2 rounded-sm border border-gray-400 block" />
                  </div>
                </div>

                {/* APP HEADER */}
                <div className="bg-[#111512] p-4 border-b border-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#A3F238] tracking-wider">Consultoria Ativa</span>
                      <h4 className="text-sm font-headline font-bold text-white">Treino A • Membros Superiores</h4>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-[#A3F238]/10 text-[#A3F238] flex items-center justify-center font-bold text-xs">
                      RS
                    </div>
                  </div>
                </div>

                {/* APP WORKOUT CONTENT */}
                <div className="p-4 space-y-3 bg-[#080A09] min-h-[380px]">
                  
                  {/* WORKOUT SUMMARY PILL */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#191F1B] border border-white/5 text-xs text-[#A0A69F]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#A3F238]" />
                      <span>45 min estimado</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-[#A3F238]" />
                      <span>6 Exercícios</span>
                    </div>
                  </div>

                  {/* EXERCISE 1 */}
                  <div className="p-3 rounded-xl bg-[#111512] border border-[#A3F238]/30 shadow-md">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-white">1. Supino Inclinado c/ Halteres</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#A3F238]/15 text-[#A3F238] font-bold">Vídeo HD</span>
                    </div>
                    <p className="text-[11px] text-[#A0A69F] mb-2">4 séries × 10 a 12 repetições • Descanso 75s</p>
                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px]">
                      <span className="text-gray-300">Carga registrada: <strong>24 kg</strong></span>
                      <span className="flex items-center gap-1 text-[#A3F238] font-semibold">
                        <Check className="w-3 h-3" /> Concluído
                      </span>
                    </div>
                  </div>

                  {/* EXERCISE 2 */}
                  <div className="p-3 rounded-xl bg-[#191F1B] border border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">2. Puxada Aberta no Pulley</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300">Técnica</span>
                    </div>
                    <p className="text-[11px] text-[#A0A69F]">4 séries × 12 repetições • Foco na contração</p>
                  </div>

                  {/* EXERCISE 3 */}
                  <div className="p-3 rounded-xl bg-[#191F1B] border border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">3. Elevação Lateral Controlada</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300">Vídeo</span>
                    </div>
                    <p className="text-[11px] text-[#A0A69F]">3 séries × 15 repetições • Sem impulso</p>
                  </div>

                  {/* REAL-TIME WHATSAPP FEEDBACK NOTIFICATION */}
                  <div className="p-2.5 rounded-xl bg-[#191F1B] border border-[#A3F238]/40 flex items-start gap-2.5 shadow-lg">
                    <div className="w-6 h-6 rounded-full bg-[#A3F238] text-[#080A09] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      RS
                    </div>
                    <div className="text-[10px]">
                      <span className="font-bold text-white block">Reinan Silva (WhatsApp)</span>
                      <p className="text-gray-300">“Vídeo conferido! Excelente controle excêntrico na última série.”</p>
                    </div>
                  </div>

                </div>

                {/* PHONE BOTTOM BAR */}
                <div className="bg-[#111512] py-2 px-6 flex justify-center border-t border-white/5">
                  <div className="w-28 h-1 bg-white/20 rounded-full" />
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT: THE 7 CONSULTING RESOURCES (7 COLS) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="space-y-4 mb-8">
              {consultingFeatures.map((feat, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#191F1B]/60 hover:bg-[#191F1B] border border-white/5 hover:border-[#A3F238]/30 transition-all duration-200"
                >
                  <div className="p-2 rounded-xl bg-[#111512] border border-white/10 shrink-0 mt-0.5">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-headline font-bold text-white mb-0.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A0A69F] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <a
                href={getWhatsAppUrl('consultoria')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-headline font-bold uppercase tracking-wider text-[#080A09] bg-[#A3F238] hover:bg-[#8FE024] px-8 py-4 rounded-xl transition-all shadow-[0_0_25px_rgba(163,242,56,0.35)] hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quero Meu Plano Personalizado na Consultoria</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
