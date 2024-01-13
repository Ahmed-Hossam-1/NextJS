import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNaigation from "@/components/Header/MainNaigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNaigation />
        {children}
      </body>
    </html>
  );
}
