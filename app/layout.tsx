// src/app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata: Metadata = {
  title: "Bizim Hikayemiz ❤️",
  description: "Seni çok seviyorum",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${playfair.variable} ${dancing.variable} font-sans bg-[#fffafb]`}>
        {children}
      </body>
    </html>
  );
}