import "./globals.css";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "MIN CAN DOKU",
  description: "みんなで楽しく読書の感想を共有しよう！",
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
