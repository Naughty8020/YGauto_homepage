import type { Metadata } from "next";
import { Geist, Geist_Mono, Shippori_Antique_B1 } from "next/font/google"; // 1. フォントをインポート
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "学校管理システム", // サイト名に合わせて変更
  description: "魅力を伝え、成果を生み出すデジタル体験",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
