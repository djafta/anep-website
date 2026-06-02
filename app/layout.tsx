import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "ANEP",
  description: "Autoridade Nacional da Educação Profissional",
};

export type StandardLayoutProps = {
  children: ReactNode;
  header?: ReactNode;
}

export default function Layout({ children, header }: StandardLayoutProps) {
  return (
    <html lang="en" className={ cn("flex flex-1 min-h-full font-sans", "font-sans", inter.variable) }>
    <body className={ `min-h-0 flex-1 flex flex-col` }>
    { header }
    { children }
    <Toaster/>
    <Footer/>
    </body>
    </html>
  );
}
