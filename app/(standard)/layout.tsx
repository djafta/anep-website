import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
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
    <>
      { header }
      { children }
      <Footer/>
    </>
  );
}
