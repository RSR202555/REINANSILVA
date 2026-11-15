/**
 * CONFIGURAÇÃO CENTRALIZADA DO WHATSAPP E DADOS PROFISSIONAIS
 * 
 * Para alterar o número de telefone do WhatsApp que recebe as mensagens,
 * basta modificar o valor da constante WHATSAPP_PHONE abaixo.
 * Formato: DDI + DDD + Número (apenas dígitos).
 * Exemplo para Salvador/BA: "5571987654321"
 */

export const PROFESSIONAL_INFO = {
  name: "Reinan Silva",
  role: "Personal Trainer",
  cref: "CREF 01094-G/BA", // Identificação profissional CREF
  location: "Salvador — Bahia",
  instagram: "@reinansilvaapersonal",
  instagramUrl: "https://www.instagram.com/reinansilvaapersonal?exln=NnIxdmN5ajgwZWQ0",
  slogan: "Treinar é descobrir a sua melhor versão.",
};

// Número de WhatsApp oficial: (71) 99281-3049
export const WHATSAPP_PHONE = "5571992813049"; 

export const WHATSAPP_MESSAGES = {
  hero: "Olá Reinan! Vi sua página e quero começar minha consultoria online personalizada para transformar meus resultados.",
  consultoria: "Olá Reinan! Gostaria de entender mais como funciona o seu acompanhamento na consultoria online.",
  sobre: "Olá Reinan! Gostei da sua metodologia e quero saber como funciona o seu acompanhamento individualizado.",
  planoMensal: "Olá Reinan! Gostaria de saber mais e iniciar o Plano Mensal da sua consultoria online.",
  planoTrimestral: "Olá Reinan! Gostaria de saber mais e iniciar o Plano Trimestral (Mais Escolhido) da sua consultoria online!",
  planoSemestral: "Olá Reinan! Gostaria de saber mais e iniciar o Plano Semestral da sua consultoria online para um acompanhamento consistente.",
  emagrecimento: "Olá Reinan! Meu foco principal é Emagrecimento e definição corporal. Como funciona o treino personalizado para o meu perfil?",
  hipertrofia: "Olá Reinan! Meu objetivo é Hipertrofia e ganho de massa muscular. Quero saber como estruturar meu treino com sua consultoria.",
  saude: "Olá Reinan! Quero treinar para melhorar minha Saúde, Postura e Qualidade de Vida. Como é o seu acompanhamento?",
  resultados: "Olá Reinan! Vi as transformações e fotos de antes e depois na sua página e quero começar minha consultoria para evoluir meu corpo também!",
  feedback: "Olá Reinan! Li os feedbacks dos seus alunos e quero iniciar meu acompanhamento com você.",
  duvidas: "Olá Reinan! Tenho algumas dúvidas sobre a consultoria online antes de começar.",
  floating: "Olá Reinan! Quero saber mais sobre sua consultoria online de treino.",
  footer: "Olá Reinan! Gostaria de falar com você sobre sua consultoria personalizada.",
};

/**
 * Gera o link direto para o WhatsApp com a mensagem codificada
 */
export function getWhatsAppUrl(messageKey: keyof typeof WHATSAPP_MESSAGES = "hero", customMessage?: string): string {
  const text = customMessage || WHATSAPP_MESSAGES[messageKey] || WHATSAPP_MESSAGES.hero;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
