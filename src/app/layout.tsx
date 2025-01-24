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
          <div className="mx-auto min-h-[calc(100vh-3.5rem)] grid grid-cols-1 lg:grid-cols-[1fr,min(598px,100%),1fr] lg:container">
            {/* 左サイドバー */}
            <div className="hidden lg:block" />

            {/* メインコンテンツ */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 -left-px w-px bg-gray-100" />
              <div className="absolute inset-y-0 -right-px w-px bg-gray-100" />
              <main className="w-full max-w-[598px] mx-auto py-4 lg:px-0">{children}</main>
            </div>

            {/* 右サイドバー */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </body>
    </html>
  );
}
