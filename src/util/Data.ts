import { GoogleReview, NavLinkProps } from "../types";

class Data {
    getGoogleReviews(): GoogleReview[] {
        const googleReviews: GoogleReview[] = [
            {
                id: '1',
                author: '',
                text: 'Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.',
                rate: 4,
            },
        ];
        return googleReviews;

    };
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
                name: 'Cidades de atuação',
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