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
  title: "YG auto",
  description: "滋賀県野洲市の自動車販売・整備店。国家資格整備士が在籍し、販売から整備、車検、レッカーまで全て自社で完結。お客様のカーライフを全力でサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </body>
    </html>
  );
}
