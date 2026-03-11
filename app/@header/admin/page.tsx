import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

export default async function AdminHeader() {
  return (
    <header
      className={ cn(
        "fixed w-full h-12 top-0 z-50 backdrop-blur-xs flex items-center justify-between border-b",
      ) }>
      <div className="px-4 max-w-7xl w-full h-full mx-auto flex justify-between gap-4">
        {/* Logo */ }
        <div className="my-auto">
          <Image
            alt="ANEP Logo"
            className={ cn("w-8") }
            height={ 1000 }
            src="/logo-min.png"
            width={ 1000 }
          />
        </div>
      </div>
    </header>
  )
}