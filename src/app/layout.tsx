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
          <main className="container mx-auto py-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
