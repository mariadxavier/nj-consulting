import { City, GoogleReview, NavLinkProps } from '../types';

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
        author: '',
        text: 'Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.',
        rate: 4,
      },
      {
        id: '2',
        author: '',
        text: 'Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.',
        rate: 5,
      },
      {
        id: '3',
        author: '',
        text: 'Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.',
        rate: 5,
      },
    ];
    return googleReviews;
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
