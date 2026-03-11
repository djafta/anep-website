import React from "react";

export function Footer() {
  return (
    <footer className="order-last bg-muted text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-4">
          <p className="text-gray-600 text-sm">
            &copy; { new Date().getFullYear() } Autoridade Nacional de Educação Profissional (ANEP). Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
