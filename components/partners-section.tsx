import { motion } from "framer-motion";
import React from "react";

export function PartnersSection() {
  return (
    <section className="py-24 px-4 bg-primary h-200">
      <div className="max-w-7xl mx-auto text-white">
        <motion.div
          animate={ { opacity: 1, y: 0 } }
          className="text-center"
          initial={ { opacity: 0, y: 50 } }
          transition={ { duration: 0.8 } }
        >
          <h2 className="text-4xl font-bold mb-8">Nossos Parceiros</h2>
          <p className="text-xl mb-12 max-w-5xl mx-auto">
            Colaboramos com uma rede global de instituições educacionais, empregadores e organizações para
            desenvolver qualificações que atendam às necessidades do mercado de trabalho e promovam o crescimento
            profissional.
          </p>
        </motion.div>
      </div>
    </section>
  )
}