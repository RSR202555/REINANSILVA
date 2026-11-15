import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, PROFESSIONAL_INFO } from '../config/whatsapp';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Feedbacks', href: '#feedbacks' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080A09]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.9)]'
          : 'bg-[#080A09]/70 backdrop-blur-md py-3.5 sm:py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0 group focus:outline-none">
          <img
            src="/images/logo-reinan.jpg"
            alt="Reinan Silva Personal Trainer Logo"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border border-white/15 shadow-[0_0_15px_rgba(0,0,0,0.8)] group-hover:border-white/30 group-hover:scale-105 transition-all"
          />
          <div className="flex flex-col shrink-0">
            <span className="font-headline font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-[#A3F238] transition-colors uppercase whitespace-nowrap">
              Reinan Silva
            </span>
            <span className="text-[10px] tracking-[0.22em] text-[#A0A69F] uppercase -mt-0.5 font-medium whitespace-nowrap">
              Personal Trainer
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden xl:flex items-center gap-1.5 bg-[#111512]/90 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-[#A0A69F] hover:text-[#A3F238] px-3 py-1.5 rounded-full transition-all hover:bg-white/5 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* HEADER CTA BUTTONS & INSTAGRAM */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href={PROFESSIONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil do Instagram de Reinan Silva"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#191F1B] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-gray-200 hover:text-white border border-white/10 hover:border-transparent transition-all duration-300 group shadow-md"
            title="Instagram @reinansilvaapersonal"
          >
            <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href={getWhatsAppUrl('hero')}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-headline font-bold text-xs uppercase tracking-wider text-[#080A09] bg-[#A3F238] hover:bg-[#8FE024] transition-all duration-300 shadow-[0_0_25px_rgba(163,242,56,0.35)] hover:shadow-[0_0_35px_rgba(163,242,56,0.6)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#080A09]" />
            <span>Quero Minha Consultoria</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#080A09] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden p-2 rounded-xl bg-[#191F1B] border border-white/10 text-white hover:text-[#A3F238] focus:outline-none transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#080A09]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 flex flex-col gap-5 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-200 hover:text-[#A3F238] py-2.5 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#A0A69F]" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={getWhatsAppUrl('hero')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-headline font-bold text-xs uppercase tracking-wider text-[#080A09] bg-[#A3F238] hover:bg-[#8FE024] shadow-[0_0_20px_rgba(163,242,56,0.4)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quero Minha Consultoria</span>
            </a>

            <a
              href={PROFESSIONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-headline font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[0_0_20px_rgba(220,39,67,0.3)] hover:opacity-90 transition-opacity"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Seguir no Instagram</span>
            </a>

            <div className="text-center text-xs text-[#A0A69F] pt-2">
              <span>{PROFESSIONAL_INFO.location} • {PROFESSIONAL_INFO.cref}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
