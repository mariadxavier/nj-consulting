import Data from '../util/Data';

export default function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://njconsulting.com.br';
  const phone = process.env.NEXT_PUBLIC_COMERCIAL_PHONE_NUMBER || '';
  const faqData = Data.getFAQ();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'NJ Consulting',
    description:
      'Correspondente autorizado CredBR especialista em cartão de crédito e benefício para servidores públicos municipais e estaduais.',
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    telephone: phone ? `+${phone}` : undefined,
    priceRange: 'R$',
    areaServed: [
      {
        '@type': 'Country',
        name: 'Brasil',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'São Paulo',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Minas Gerais',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Goiás',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Rondônia',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Maranhão',
      },
    ],
    serviceType: [
      'Cartão Benefício',
      'Cartão de Crédito Consignado',
      'Crédito para Servidores Públicos',
      'Saque Pix',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
