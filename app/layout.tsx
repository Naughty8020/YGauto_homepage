import type { Metadata } from "next";
import { Geist, Geist_Mono, Shippori_Antique_B1 } from "next/font/google"; // 1. フォントをインポート
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Shippori Antique B1 を設定
const shipporiAntique = Shippori_Antique_B1({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shippori-antique",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yg-auto-official.com"),
  title: {
    template: "%s | 滋賀県野洲市のYG auto",
    default: "YG auto | 滋賀県野洲市の自動車販売・整備・車検",
  },
  description:
    "滋賀県野洲市の自動車販売・整備店YG auto。国家資格整備士が在籍し、車検・整備・修理・板金塗装・レッカー・中古車販売まで一貫対応。野洲市周辺のカーライフをサポートします。",
  keywords: [
    "滋賀県",
    "野洲市",
    "野洲市 整備",
    "野洲市 車検",
    "野洲市 自動車修理",
    "YG auto",
    "自動車販売",
    "整備",
    "車検",
    "レッカー",
    "中古車",
    "板金塗装",
    "自動車修理",
  ],
  authors: [{ name: "YG auto" }],
  openGraph: {
    title: "YG auto | 滋賀県野洲市の自動車販売・整備・車検",
    description:
      "野洲市で整備・車検・修理・中古車販売をお探しならYG autoへ。国家資格整備士が在籍し、販売から整備まで一貫対応します。",
    url: "/",
    siteName: "YG auto",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/YGauto1.jpg?v=1",
        width: 800,
        height: 417,
        alt: "YG auto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YG auto | 滋賀県野洲市の自動車販売・整備・車検",
    description:
      "滋賀県野洲市で整備・車検・修理・中古車販売をお探しならYG autoへ。販売から整備まで一貫対応。",
    images: ["/YGauto1.jpg?v=1"],
  },
  icons: {
    icon: "/YG-icon.jpg",
    shortcut: "/YG-icon.jpg",
    apple: "/YG-icon.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "geo.region": "JP-25",
    "geo.placename": "滋賀県野洲市",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    additionalType: "https://schema.org/AutoDealer",
    name: "YG auto",
    image: "https://yg-auto-official.com/og-image.png?v=3",
    description:
      "滋賀県野洲市のYG auto。車検・整備・修理・板金塗装・レッカー・中古車販売まで一貫対応。",
    telephone: "077-575-4089",
    address: {
      "@type": "PostalAddress",
      streetAddress: "比留田134",
      addressLocality: "野洲市",
      addressRegion: "滋賀県",
      postalCode: "520-2300",
      addressCountry: "JP",
    },
    areaServed: "滋賀県",
    priceRange: "¥¥",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "サービス一覧",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "車検・整備" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "中古車販売・買取" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "板金塗装" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "ロードサービス・レッカー" },
        },
      ],
    },
    openingHours: ["Mo-Sa 09:30-18:00"],
    url: "https://yg-auto-official.com",
  };

  return (
    <html lang="ja">
      {/* Next.jsでは <head> 内のリンクを直接書かなくても、
          next/font が最適化して読み込んでくれます。
      */}
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${shipporiAntique.variable} 
          antialiased
        `}
      >
        <ParticlesBackground />
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
