import React, { useState } from 'react';
import { 
  Quote, 
  Sparkles, 
  Star, 
  MessageCircle, 
  CheckCircle2, 
  TrendingUp, 
  Heart, 
  ShieldCheck,
  Filter
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export interface FeedbackItem {
  id: string;
  name: string;
  role?: string;
  age?: string;
  city?: string;
  initials?: string;
  timeWithCoach?: string;
  category?: 'emagrecimento' | 'hipertrofia' | 'rotina' | 'saude';
  categoryLabel?: string;
  rating?: number;
  title?: string;
  text: string;
  verified?: boolean;
  image?: string;
}

/**
 * FEEDBACKS EM TEXTO E PRINTS DOS ALUNOS
 * 
 * Para adicionar os feedbacks reais:
 * Basta preencher o array FEEDBACKS abaixo com os dados reais dos alunos.
 */
export const FEEDBACKS: FeedbackItem[] = [
  {
    id: 'maria-ozelir',
    name: 'Maria Ozelir',
    role: 'Aluna de Consultoria',
    city: 'Salvador — BA',
    initials: 'MO',
    timeWithCoach: 'Ganho Rápido de Massa',
    category: 'hipertrofia',
    categoryLabel: 'Hipertrofia & Massa Muscular',
    rating: 5,
    title: 'Ganho de massa muscular em pouco tempo!',
    text: 'Reinan é fantástico, dinâmico, incentivo constante sem perder o foco. Tive ganho de massa muscular em pouco tempo! Excelente profissional, dinâmico, incentivador. THE BEST! 🤗',
    verified: true
  },
  {
    id: 'vitor-viana',
    name: 'Vítor Viana',
    role: 'Aluno de Consultoria',
    city: 'Salvador — BA',
    initials: 'VV',
    timeWithCoach: 'Hipertrofia & Recuperação',
    category: 'hipertrofia',
    categoryLabel: 'Hipertrofia & Reabilitação',
    rating: 5,
    title: 'Melhora física e recuperação de lesões antigas',
    text: 'Gosto muito do trabalho com o professor Reinan, é um profissional que mostra amplo conhecimento em exercícios físicos e treinamento de hipertrofia. Além da melhora considerável no meu físico, Professor Reinan também vem me auxiliando a me recuperar de lesões que eu tinha na época em que eu treinava sozinho.',
    verified: true
  },
  {
    id: 'ioleides',
    name: 'Ioleides',
    role: 'Aluna de Consultoria',
    city: 'Salvador — BA',
    initials: 'IO',
    timeWithCoach: 'Mais Disposição & Bem-Estar',
    category: 'saude',
    categoryLabel: 'Saúde & Motivação',
    rating: 5,
    title: 'Meu corpo mudou pra melhor, com mais disposição e confiança',
    text: 'Reinan Silva é um profissional que se destaca pela pontualidade, pelo compromisso com seus alunos e acima de tudo pelo respeito com que nos trata. É um profissional dedicado, sério no que faz e sempre atento ao nosso bem-estar durante os treinos. Treinar com ele fez meu corpo mudar pra melhor, mas também me trouxe mais disposição, confiança e motivação. Ele me inspira a cuidar de mim com alegria e persistência, e isso faz toda a diferença no meu dia a dia. Sinto muita gratidão por conhecer um profissional como ele.',
    verified: true
  },
  {
    id: 'lais',
    name: 'Lais',
    role: 'Aluna de Consultoria',
    city: 'Salvador — BA',
    initials: 'LA',
    timeWithCoach: 'Acompanhamento Próximo',
    category: 'saude',
    categoryLabel: 'Atenção Individualizada',
    rating: 5,
    title: 'Competência, conhecimento técnico e atenção individualizada',
    text: 'O Reinan é um profissional de excelência, que se destaca pela competência, dedicação e comprometimento com seus alunos. Seu trabalho vai muito além de orientar exercícios: demonstra conhecimento técnico, atenção individualizada e uma preocupação genuína com a evolução e o bem-estar de cada aluno. Recomendo demais seu trabalho!',
    verified: true
  }
];

export const Testimonials: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Feedbacks' },
    { id: 'hipertrofia', label: 'Hipertrofia & Força' },
    { id: 'saude', label: 'Saúde & Bem-Estar' }
  ];

  const filteredFeedbacks = selectedCategory === 'todos'
    ? FEEDBACKS
    : FEEDBACKS.filter(item => item.category === selectedCategory);

  return (
    <section id="feedbacks" className="relative py-24 lg:py-32 bg-[#111512] overflow-hidden border-t border-b border-white/5 scroll-mt-20">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#A3F238]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#191F1B] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191F1B] border border-white/10 text-xs font-bold uppercase tracking-widest text-[#A3F238] mb-4 shadow-[0_0_15px_rgba(163,242,56,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Feedbacks Reais & Avaliações</span>
          </div>

          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-5">
            O QUE OS ALUNOS DIZEM <br />
            <span className="text-[#A3F238]">SOBRE O ACOMPANHAMENTO.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A0A69F] leading-relaxed">
            Relatos espontâneos de quem vive a transformação no dia a dia com suporte individualizado e metodologia comprovada.
          </p>
        </div>

        {/* METRICS TRUST BANNER */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
          <div className="p-4 rounded-2xl bg-[#191F1B] border border-white/5 text-center">
            <div className="flex items-center justify-center gap-1 text-[#A3F238] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#A3F238]" />
              ))}
            </div>
            <p className="text-2xl font-headline font-extrabold text-white">4.9 / 5.0</p>
            <p className="text-[11px] text-[#A0A69F] uppercase tracking-wider font-semibold">Avaliação Média</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#191F1B] border border-white/5 text-center">
            <div className="flex items-center justify-center text-[#A3F238] mb-1">
              <TrendingUp className="w-4 h-4" />
            </div>
            <p className="text-2xl font-headline font-extrabold text-[#A3F238]">+150</p>
            <p className="text-[11px] text-[#A0A69F] uppercase tracking-wider font-semibold">Alunos Transformados</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#191F1B] border border-white/5 text-center">
            <div className="flex items-center justify-center text-[#A3F238] mb-1">
              <Heart className="w-4 h-4" />
            </div>
            <p className="text-2xl font-headline font-extrabold text-white">98%</p>
            <p className="text-[11px] text-[#A0A69F] uppercase tracking-wider font-semibold">Taxa de Renovação</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#191F1B] border border-white/5 text-center">
            <div className="flex items-center justify-center text-[#A3F238] mb-1">
              <MessageCircle className="w-4 h-4" />
            </div>
            <p className="text-2xl font-headline font-extrabold text-white">100%</p>
            <p className="text-[11px] text-[#A0A69F] uppercase tracking-wider font-semibold">Suporte via WhatsApp</p>
          </div>
        </div>

        {/* CATEGORY FILTER PILLS (EXIBIDOS QUANDO HOUVER FEEDBACKS CADASTRADOS) */}
        {FEEDBACKS.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-headline font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-[#A3F238] text-[#080A09] font-bold shadow-[0_0_15px_rgba(163,242,56,0.3)]'
                    : 'bg-[#191F1B] text-[#A0A69F] border border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* FEEDBACK CARDS GRID OU ESTADO DE AGUARDO */}
        {filteredFeedbacks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 max-w-6xl mx-auto">
            {filteredFeedbacks.map((item) => {
              const rating = item.rating ?? 5;
              const initials = item.initials || item.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
              const categoryLabel = item.categoryLabel || 'Consultoria Online';

              return (
                <div
                  key={item.id}
                  className="relative rounded-3xl bg-[#191F1B] border border-white/5 hover:border-[#A3F238]/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* CARD TOP BAR */}
                    <div className="flex items-center justify-between mb-5">
                      {/* STAR RATING */}
                      <div className="flex items-center gap-1 text-[#A3F238]">
                        {[...Array(rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#A3F238]" />
                        ))}
                      </div>

                      {/* QUOTE ICON */}
                      <Quote className="w-6 h-6 text-[#A0A69F]/20 group-hover:text-[#A3F238]/30 transition-colors" />
                    </div>

                    {/* CATEGORY & HIGHLIGHT TITLE */}
                    <div className="mb-3">
                      <span className="inline-block text-[10px] font-headline font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#111512] text-[#A3F238] border border-white/5 mb-2">
                        {categoryLabel}
                      </span>
                      {item.title && (
                        <h4 className="text-base font-headline font-bold text-white group-hover:text-[#A3F238] transition-colors line-clamp-1">
                          {item.title}
                        </h4>
                      )}
                    </div>

                    {/* QUOTE TEXT */}
                    <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                      “{item.text}”
                    </p>

                    {/* PRINT IMAGE (SE FOR UM SCREENSHOT) */}
                    {item.image && (
                      <div className="mb-6 rounded-2xl overflow-hidden border border-white/10">
                        <img 
                          src={item.image} 
                          alt={`Print feedback de ${item.name}`} 
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {/* STUDENT PROFILE FOOTER */}
                  <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* AVATAR WITH INITIALS */}
                      <div className="w-11 h-11 rounded-full bg-[#111512] border-2 border-[#A3F238]/40 flex items-center justify-center font-headline font-extrabold text-xs text-[#A3F238] shadow-inner group-hover:border-[#A3F238] transition-colors">
                        {initials}
                      </div>

                      <div>
                        <h5 className="text-sm font-headline font-bold text-white leading-tight">
                          {item.name}
                        </h5>
                        {(item.role || item.age) && (
                          <p className="text-[11px] text-[#A0A69F] mt-0.5">
                            {[item.role, item.age].filter(Boolean).join(' • ')}
                          </p>
                        )}
                        {item.timeWithCoach && (
                          <p className="text-[10px] text-[#A3F238] font-medium">
                            {item.timeWithCoach}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* VERIFIED BADGE */}
                    {item.verified !== false && (
                      <div className="flex items-center gap-1 text-[10px] font-semibold text-[#A0A69F]" title="Aluno de consultoria verificado">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A3F238]" />
                        <span className="hidden sm:inline">Verificado</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-12 px-6 rounded-3xl bg-[#191F1B] border border-white/5 max-w-xl mx-auto mb-16 text-center">
            <Quote className="w-8 h-8 text-[#A3F238] mx-auto mb-3 opacity-60" />
            <h4 className="text-base font-headline font-bold text-white mb-2">
              Pronto para os Feedbacks Reais
            </h4>
            <p className="text-xs text-[#A0A69F] leading-relaxed">
              Os depoimentos genéricos foram removidos. Envie os textos, mensagens ou prints dos alunos para publicá-los aqui!
            </p>
          </div>
        )}

        {/* CONVERSION CALLOUT BOX */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#191F1B] via-[#111512] to-[#191F1B] border border-white/10 max-w-3xl mx-auto text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#A3F238]/10 rounded-full blur-[80px] pointer-events-none" />
          
          <h3 className="font-headline font-extrabold text-2xl sm:text-3xl text-white mb-3">
            Quer ser o próximo relato de sucesso?
          </h3>
          <p className="text-sm sm:text-base text-[#A0A69F] max-w-xl mx-auto mb-6">
            Dê o primeiro passo com um treino formulado para a sua realidade, sem fórmulas prontas e com suporte direto com o Reinan.
          </p>

          <a
            href={getWhatsAppUrl('feedback', 'Olá Reinan! Li os feedbacks dos seus alunos e quero iniciar meu acompanhamento com você.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-headline font-bold text-xs sm:text-sm uppercase tracking-wider text-[#080A09] bg-[#A3F238] hover:bg-[#8FE024] transition-all duration-300 shadow-[0_0_25px_rgba(163,242,56,0.4)] hover:shadow-[0_0_35px_rgba(163,242,56,0.6)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-[#080A09]" />
            <span>Falar com o Reinan no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
