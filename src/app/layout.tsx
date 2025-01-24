import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "皆can読",
  description: "日本人と中国人が新しい言語表現で交流できる掲示板",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <Header />
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1fr,min(598px,100%),1fr] gap-4">
            {/* 左サイドバー */}
            <div className="hidden lg:block" />

            {/* メインコンテンツ */}
            <main className="w-full max-w-[598px] mx-auto py-4 px-4 lg:px-0">{children}</main>

            {/* 右サイドバー */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </body>
    </html>
  );
}
