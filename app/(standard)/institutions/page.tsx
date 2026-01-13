"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold text-center mb-16">IEP's Acreditadas</h2>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold text-center mb-16">IES's Acreditadas</h2>
        </motion.div>
      </div>
    </div>
  );
}
