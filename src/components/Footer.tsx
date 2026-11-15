import React from 'react';
import { MessageCircle, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { getWhatsAppUrl, PROFESSIONAL_INFO } from '../config/whatsapp';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080A09] text-white pt-16 pb-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW: BRAND & NAVIGATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          
          {/* BRAND COL (2 COLS) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <a href="#inicio" className="flex items-center gap-3 group mb-4">
              <img
                src="/images/logo-reinan.jpg"
                alt="Reinan Silva Personal Trainer Logo"
                className="w-12 h-12 rounded-full object-cover border border-white/15 shadow-[0_0_15px_rgba(0,0,0,0.8)]"
              />
              <div className="flex flex-col">
                <span className="font-headline font-bold text-lg tracking-wider text-white uppercase whitespace-nowrap">
                  Reinan Silva
                </span>
                <span className="text-[10px] tracking-[0.22em] text-[#A0A69F] uppercase -mt-0.5 font-medium whitespace-nowrap">
                  Personal Trainer
                </span>
              </div>
            </a>

            <p className="text-sm text-[#A0A69F] max-w-sm leading-relaxed mb-6">
              Treinamento individualizado e consultoria online de alto padrão para quem busca evolução física, disciplina e mais saúde.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#A0A69F] mb-2">
              <MapPin className="w-4 h-4 text-[#A3F238]" />
              <span>{PROFESSIONAL_INFO.location}</span>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-[#A0A69F]">
              <ShieldCheck className="w-4 h-4 text-[#A3F238]" />
              <span>{PROFESSIONAL_INFO.cref}</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-[#A3F238] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A0A69F]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre o Reinan</a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors">Especialidades</a>
              </li>
              <li>
                <a href="#consultoria" className="hover:text-white transition-colors">Consultoria Online</a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
              </li>
            </ul>
          </div>

          {/* SERVICES & PLANS */}
          <div>
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-[#A3F238] mb-4">
              Planos & FAQ
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A0A69F]">
              <li>
                <a href="#planos" className="hover:text-white transition-colors">Plano Mensal</a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">Plano Trimestral</a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">Plano Semestral</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* SOCIAL & CONTACT */}
          <div>
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-[#A3F238] mb-4">
              Atendimento Direto
            </h4>
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl('footer')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#111512] border border-white/5 hover:border-[#A3F238]/40 text-sm text-gray-200 hover:text-white transition-all group"
              >
                <MessageCircle className="w-4 h-4 text-[#A3F238] group-hover:scale-110 transition-transform" />
                <span>Conversar no WhatsApp</span>
              </a>

              <a
                href={PROFESSIONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#111512] border border-white/5 hover:border-[#A3F238]/40 text-sm text-gray-200 hover:text-white transition-all group"
              >
                <InstagramIcon className="w-4 h-4 text-[#A3F238] group-hover:scale-110 transition-transform" />
                <span>{PROFESSIONAL_INFO.instagram}</span>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT & TOP BUTTON */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A69F]">
          <div>
            © {new Date().getFullYear()} {PROFESSIONAL_INFO.name} — Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span>Salvador — Bahia</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Educação Física • Personal Trainer</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#111512] border border-white/10 hover:border-[#A3F238] hover:text-[#A3F238] text-white transition-all ml-2"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
