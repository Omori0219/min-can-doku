import "./globals.css";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "皆can読",
  description: "皆can読 is 模索 場所 for new 話 way to 日本人 and 中文民",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="relative min-h-screen">
          <Header />
          <main className="container mx-auto max-w-2xl px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
