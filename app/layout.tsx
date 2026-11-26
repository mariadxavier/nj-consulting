import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { JsonLd } from "@/src/components";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://njconsulting.com.br";

export const viewport: Viewport = {
  themeColor: "#0F3E2F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NJ Consulting | Cartão de Crédito e Benefício para Servidores Públicos",
    template: "%s | NJ Consulting",
  },
  description:
    "Cartão de crédito e benefício para servidores públicos municipais e estaduais com atendimento humanizado. Sem anuidade, sem consulta ao SPC/Serasa e saque via Pix em até 2 horas. Correspondente CredBR.",
  keywords: [
    "NJ Consulting",
    "cartão de crédito servidor público",
    "cartão benefício servidor",
    "crédito consignado",
    "CredBR",
    "BRCard",
    "cartão sem consulta SPC Serasa",
    "cartão sem anuidade",
    "saque pix servidor público",
    "servidor público municipal",
    "servidor público estadual",
  ],
  authors: [{ name: "NJ Consulting" }],
  creator: "NJ Consulting",
  publisher: "NJ Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NJ Consulting | Cartão de Crédito e Benefício para Servidores Públicos",
    description:
      "Cartão de benefício e crédito para servidores públicos sem burocracia, sem anuidade e sem consulta ao SPC/Serasa. Saque via Pix em até 2h.",
    url: siteUrl,
    siteName: "NJ Consulting",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo-nj.jpeg",
        width: 800,
        height: 600,
        alt: "NJ Consulting - Cartão e Soluções para Servidores Públicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NJ Consulting | Cartão de Crédito e Benefício para Servidores Públicos",
    description:
      "Cartão de benefício e crédito para servidores públicos sem burocracia, sem anuidade e sem consulta ao SPC/Serasa.",
    images: ["/logo-nj.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
