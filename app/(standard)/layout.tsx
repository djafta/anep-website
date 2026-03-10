import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { Footer } from "@/components/footer";

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

export default function StandardLayout({ children, header }: StandardLayoutProps) {
  return (
    <html lang="en" className={ "flex min-h-full" }>
    <body className={ `min-h-0 flex-1 flex flex-col` }>
    { header }
    { children }
    <Footer/>
    </body>
    </html>
  );
}
