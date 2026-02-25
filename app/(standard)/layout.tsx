import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import localFont from "next/font/local";

import "@/styles/globals.css";
import { Footer } from "@/components/footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const sfProText = localFont({
  src: [
    {
      path: "../../public/fonts/sf-pro-text/SF-Pro-Text-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro-text/SF-Pro-Text-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-text",
});

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
    <html lang="en" className={ "h-full w-full min-h-0" }>
    <body className={ `${ sfProText.className }` }>
    { header }
    { children }
    <Footer/>
    </body>
    </html>
  );
}
