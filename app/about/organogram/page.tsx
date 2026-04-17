import React from "react";
import Image from "next/image";

export default async function Page() {
  return (
    <div className="min-h-screen bg-white">
      <main className="overflow-hidden">
        <Image src={ '/images/organogram.svg' } alt={ 'Organigram' } fill className={ 'object-contain' }/>
      </main>
    </div>
  );
}
