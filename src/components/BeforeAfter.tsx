import React, { useState } from 'react';
import { 
  Flame, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Target, 
  MessageCircle, 
  Maximize2, 
  X, 
  Award 
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export interface TransformationItem {
  id: string;
  name: string;
  location?: string;
  category: 'emagrecimento' | 'hipertrofia' | 'recomposicao' | 'saude';
  categoryLabel: string;
  highlightBadge: string;
  duration: string;
  image: string;
  alt: string;
  metrics: {
    label: string;
    value: string;
  }[];
  quote: string;
}

/**
 * DADOS DAS TRANSFORMAÇÕES REAIS (FOTOS DOS ALUNOS DO REINAN)
 */
export const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 'aluna-1',
    name: 'Aluna Consultoria',
    location: 'Salvador — BA',
    category: 'emagrecimento',
    categoryLabel: 'Emagrecimento & Definição',
    highlightBadge: 'Redução de Cintura & Glúteos',
    duration: '12 semanas de consultoria',
    image: '/images/antes-depois/aluno1-completo.jpg',
    alt: 'Antes e Depois - Aluna com redução de medidas, abdômen e glúteos',
    metrics: [
      { label: 'Abdômen', value: 'Definido' },
      { label: 'Glúteos', value: 'Tonificados' },
      { label: 'Postura', value: 'Alinhada' }
    ],
    quote: 'O acompanhamento do Reinan me deu a disciplina que eu nunca tive. Os treinos são dinâmicos, certeiros e os ajustes na postura mudaram completamente o desenho da minha cintura e quadril.'
  },
  {
    id: 'aluno-4',
    name: 'Aluno Consultoria',
    location: 'Salvador — BA',
    category: 'hipertrofia',
    categoryLabel: 'Hipertrofia & Volume Muscular',
    highlightBadge: '+Volume Peitoral, Ombros & Dorsais',
    duration: '16 semanas de acompanhamento',
    image: '/images/antes-depois/aluno4-completo.jpg',
    alt: 'Antes e Depois - Aluno com ganho muscular notável de peitoral e costas',
    metrics: [
      { label: 'Massa Magra', value: 'Ganho Notável' },
      { label: 'Dorsais', value: 'V-Taper' },
      { label: 'Densidade', value: 'Peitoral & Braços' }
    ],
    quote: 'Treinava sem periodização correta e não saía do lugar. Com o Reinan ajustando a cadência das repetições, volume semanal e o descanso, a evolução nas costas e peitoral foi nítida!'
  },
  {
    id: 'aluna-2',
    name: 'Aluna Consultoria',
    location: 'Salvador — BA',
    category: 'recomposicao',
    categoryLabel: 'Tonificação & Definição Dorsal',
    highlightBadge: 'Costas Desenhadas & Braços Firmes',
    duration: '14 semanas',
    image: '/images/antes-depois/aluno2-completo.jpg',
    alt: 'Antes e Depois - Aluna com costas marcadas e braços tonificados',
    metrics: [
      { label: 'Dorsais', value: 'Desenhadas' },
      { label: 'Bíceps/Tríceps', value: 'Tonificados' },
      { label: 'Cintura', value: 'Reduzida' }
    ],
    quote: 'Achava que mulher ficava masculinizada pegando peso, mas o Reinan desenhou um treino que deixou minhas costas lindas, cintura fina e braços sequinhos sem gordura.'
  },
  {
    id: 'aluna-3',
    name: 'Aluna Consultoria',
    location: 'Salvador — BA',
    category: 'saude',
    categoryLabel: 'Condicionamento & Glúteos',
    highlightBadge: 'Abdômen Trincado & Pernas Fortes',
    duration: 'Acompanhamento Contínuo',
    image: '/images/antes-depois/aluna3-sem-insta.jpg',
    alt: 'Antes e Depois - Aluna com abdômen trincado e quadríceps desenvolvidos',
    metrics: [
      { label: 'Abdômen', value: 'Trincado' },
      { label: 'Quadríceps', value: 'Volume Notável' },
      { label: 'Glúteos', value: 'Fortes & Rígidos' }
    ],
    quote: 'Com constância, acompanhamento de verdade e método individualizado, os resultados aparecem em cada ângulo. O Reinan é fora de série no suporte!'
  }
];

export const BeforeAfter: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section id="resultados" className="relative py-24 lg:py-32 bg-[#080A09] overflow-hidden border-t border-b border-white/5 scroll-mt-20">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#A3F238]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-[#191F1B] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191F1B] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#A3F238] mb-4 shadow-[0_0_15px_rgba(163,242,56,0.15)]">
            <Flame className="w-3.5 h-3.5 text-[#A3F238]" />
            <span>Antes & Depois • Resultados Reais</span>
          </div>

          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-5">
            TRANSFORMAÇÕES REAIS <br />
            <span className="text-[#A3F238]">DE QUEM CONFIOU NO MÉTODO.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A0A69F] leading-relaxed">
            Sem promessas milagrosas: apenas treino individualizado, correção de postura pelo WhatsApp e acompanhamento consistente com Reinan Silva.
          </p>
        </div>

        {/* GRID OF TRANSFORMATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRANSFORMATIONS.map((item, index) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#111512] border border-white/10 hover:border-[#A3F238]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl hover:-translate-y-1.5"
            >
              {/* PHOTO CONTAINER (CLIQUE PARA AMPLIAR) */}
              <div 
                className="relative aspect-[4/5] bg-[#080A09] overflow-hidden cursor-pointer flex items-center justify-center p-2"
                onClick={() => setModalImage(item.image)}
                title="Clique para ampliar a foto"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-contain filter contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-500 rounded-2xl"
                  loading="lazy"
                />

                {/* EXPAND ICON PILL */}
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-[#080A09]/80 backdrop-blur-md border border-white/10 text-white group-hover:text-[#A3F238] group-hover:border-[#A3F238]/40 transition-all shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* HIGHLIGHT BADGE */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1.5 rounded-xl bg-[#A3F238] text-[#080A09] font-headline font-extrabold text-xs uppercase tracking-wider shadow-lg">
                    {item.highlightBadge}
                  </span>
                </div>
              </div>

              {/* CARD BODY */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-headline font-bold uppercase tracking-wider text-[#A3F238]">
                      {item.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-[#A0A69F]">
                      <Clock className="w-3 h-3 text-[#A3F238]" />
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-headline font-extrabold text-white mb-3">
                    {item.name} #{index + 1}
                  </h3>

                  {/* METRICS PILLS */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {item.metrics.map((m, i) => (
                      <div key={i} className="p-2 rounded-xl bg-[#191F1B] border border-white/5 text-center">
                        <span className="block text-[10px] text-[#A0A69F] leading-tight truncate">{m.label}</span>
                        <span className="block text-xs font-headline font-bold text-[#A3F238] mt-0.5 truncate">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* STUDENT QUOTE */}
                  <p className="text-xs text-gray-300 leading-relaxed italic mb-5">
                    “{item.quote}”
                  </p>
                </div>

                {/* ACTION BUTTONS */}
                <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
                  <a
                    href={getWhatsAppUrl('resultados', `Olá Reinan! Vi o caso de ${item.name} #${index + 1} (${item.highlightBadge}) na sua página e quero começar minha consultoria para ter um resultado como esse!`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-headline font-bold text-xs uppercase tracking-wider text-[#080A09] bg-[#A3F238] hover:bg-[#8FE024] transition-all duration-300 shadow-[0_0_15px_rgba(163,242,56,0.3)] hover:shadow-[0_0_25px_rgba(163,242,56,0.5)]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#080A09]" />
                    <span>Quero Essa Evolução</span>
                  </a>

                  <button
                    onClick={() => setModalImage(item.image)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-headline font-semibold text-[#A0A69F] hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#A3F238]" />
                    <span>Clique para Ampliar Foto</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* MODAL ZOOM DE FOTO ORIGINAL */}
        {modalImage && (
          <div 
            className="fixed inset-0 z-50 bg-[#080A09]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setModalImage(null)}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] bg-[#111512] border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#080A09]/80 border border-white/20 text-white hover:text-[#A3F238] transition-colors"
                aria-label="Fechar foto"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={modalImage}
                alt="Foto ampliada do comparativo de antes e depois"
                className="w-full max-h-[85vh] object-contain rounded-2xl"
              />
            </div>
          </div>
        )}

        {/* REINAN'S TRANSPARENCY NOTICE */}
        <div className="mt-16 p-6 rounded-2xl bg-[#111512]/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#191F1B] border border-[#A3F238]/30 flex items-center justify-center text-[#A3F238] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-headline font-bold text-white">
                Resultados Reais & Sustentáveis
              </p>
              <p className="text-[11px] sm:text-xs text-[#A0A69F]">
                Todas as fotos retratam alunos reais com acompanhamento técnico, respeitando individualidade e rotina.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppUrl('consultoria')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-headline font-bold text-[#A3F238] hover:text-white uppercase tracking-wider shrink-0 transition-colors"
          >
            Fazer Minha Avaliação Inicial →
          </a>
        </div>

      </div>
    </section>
  );
};
