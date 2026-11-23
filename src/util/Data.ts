import { City, FAQ, GoogleReview, NavLinkProps } from '../types';

class Data {
  getOurPlaces(): City[] {
    const ourPlaces = [
      {
        id: '1',
        name: 'Mariana - MG',
        imgSrc:
          'https://scwqngibmkqfotxnuhwo.supabase.co/storage/v1/object/public/nj-consulting/mariana-prefeitura.webp',
        address: 'Servidores públicos da Prefeitura',
      },
      {
        id: '2',
        name: 'Caldas Novas - GO',
        imgSrc:
          'https://scwqngibmkqfotxnuhwo.supabase.co/storage/v1/object/public/nj-consulting/caldas-novas-prefeitura.webp',
        address: 'Servidores públicos do Estado e da Prefeitura',
      },
      {
        id: '3',
        name: 'Araraquara - SP',
        imgSrc:
          'https://scwqngibmkqfotxnuhwo.supabase.co/storage/v1/object/public/nj-consulting/araraquara-prefeitura.jpg',
        address: 'Servidores públicos da Prefeitura',
      },
      {
        id: '4',
        name: 'Itajubá - MG',
        imgSrc:
          'https://scwqngibmkqfotxnuhwo.supabase.co/storage/v1/object/public/nj-consulting/itajuba-prefeitura.jpg',
        address: 'Servidores públicos da Prefeitura',
      },
      {
        id: '5',
        name: 'São José dos Campos - SP',
        imgSrc:
          'https://scwqngibmkqfotxnuhwo.supabase.co/storage/v1/object/public/nj-consulting/sao-jose-dos-campos-prefeitura.jpg',
        address: 'Servidores públicos da Prefeitura',
      },
      {
        id: '6',
        name: 'São Luís - MA',
        imgSrc:
          'https://scwqngibmkqfotxnuhwo.supabase.co/storage/v1/object/public/nj-consulting/sao-luis-prefeitura.jpg',
        address: 'Servidores públicos da Prefeitura',
      },
      {
        id: '7',
        name: 'Boa Esperança - MG',
        imgSrc:
          'https://scwqngibmkqfotxnuhwo.supabase.co/storage/v1/object/public/nj-consulting/boa-esperanca-prefeitura.jpg',
        address: 'Servidores públicos da Prefeitura',
      },
      {
        id: '8',
        name: 'Ribeirão Preto - SP',
        imgSrc:
          'https://scwqngibmkqfotxnuhwo.supabase.co/storage/v1/object/public/nj-consulting/ribeirao-preto-prefeitura.jpeg',
        address: 'Servidores públicos da Prefeitura',
      },
      {
        id: '9',
        name: 'Boa Vista - RO',
        imgSrc:
          'https://scwqngibmkqfotxnuhwo.supabase.co/storage/v1/object/public/nj-consulting/boa-vista-prefeitura.jpg',
        address: 'Servidores públicos da Prefeitura',
      },
      {
        id: '10',
        name: 'Goiás',
        imgSrc:
          'https://scwqngibmkqfotxnuhwo.supabase.co/storage/v1/object/public/nj-consulting/goias-estado.jpeg',
        address: 'Servidores públicos do Estado',
      },
    ];
    return ourPlaces;
  }

  getGoogleReviews(): GoogleReview[] {
    const googleReviews: GoogleReview[] = [
      {
        id: '1',
        author: 'Jane',
        text: 'Fui muito bem atendida. São resolutivos',
        rate: 5,
      },
      {
        id: '2',
        author: 'Daniela Dias',
        text: 'Excelente consultoria empresarial! Serviço de qualidade, com profissionalismo e competência. Recomendo!',
        rate: 5,
      },
      {
        id: '3',
        author: 'Karla Aline',
        text: '',
        rate: 5,
      },
      {
        id: '4',
        author: 'William Bailo',
        text: '',
        rate: 5,
      },
    ];
    return googleReviews;
  }

  getFAQ(): FAQ[] {
    const FAQ = [
      {
        question: "Quem pode solicitar o cartão?",
        answer:
          "Servidores públicos (efetivos, comissionados ou contratados) dos municípios e órgãos estaduais conveniados. A elegibilidade é confirmada durante uma análise rápida do seu vínculo funcional.",
        defaultOpen: true,
      },
      {
        question: "Quem está negativado no SPC ou Serasa pode solicitar?",
        answer:
          "Sim! Aqui seu nome não é obstáculo. A análise não realiza consulta ao SPC ou Serasa, permitindo o acesso ao cartão de benefício mesmo para quem possui restrições no nome.",
        defaultOpen: false,
      },
      {
        question: "Como funciona o saque e qual o prazo de liberação?",
        answer:
          "Você pode transferir parte do limite disponível no cartão direto para sua conta bancária. Após a aprovação da operação, o dinheiro é transferido via Pix em até 2 horas.",
        defaultOpen: false,
      },
      {
        question: "O cartão possui taxa de anuidade?",
        answer:
          "Não. O cartão não possui taxa de anuidade. Você conta com total transparência, sem taxas ocultas e com acompanhamento do nosso time em todas as etapas.",
        defaultOpen: false,
      },
    ];
    return FAQ;
  }

  getSections(): NavLinkProps[] {
    const sections: NavLinkProps[] = [
      {
        href: '#hero',
        name: 'Início',
      },
      {
        href: '#about-us',
        name: 'Quem somos',
      },
      {
        href: '#brcard',
        name: 'BRCard',
      },
      {
        href: '#how-it-works',
        name: 'Como funciona',
      },
      {
        href: '#public-audience',
        name: 'Para quem somos',
      },
      {
        href: '#our-places',
        name: 'Locais de atuação',
      },
      {
        href: '#faq',
        name: 'Dúvidas',
      },
      {
        href: '#reviews',
        name: 'Avaliações',
      },
      {
        href: '#contact-us',
        name: 'Contato',
      },
    ];
    return sections;
  }
}

export default new Data();
