"use client";

import React, { useState } from "react";
import { Button, Input, Link } from "@heroui/react";
import { motion } from "framer-motion";
import { Calendar, Mail, User } from "lucide-react";

import { Header } from "@/app/sign-up/header";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Header />
      <motion.main
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto w-full px-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Crie sua conta ANEP</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            required
            label="Primeiro Nome"
            name="firstName"
            placeholder="Digite seu primeiro nome"
            startContent={<User className="text-gray-400" />}
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <Input
            required
            label="Último Nome"
            name="lastName"
            placeholder="Digite seu último nome"
            startContent={<User className="text-gray-400" />}
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <Input
            required
            label="E-mail"
            name="email"
            placeholder="Digite seu e-mail"
            startContent={<Mail className="text-gray-400" />}
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            required
            label="Data de Nascimento"
            name="dateOfBirth"
            placeholder="Selecione sua data de nascimento"
            startContent={<Calendar className="text-gray-400" />}
            type="date"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
          <Button className="w-full bg-[#003B71] text-white hover:bg-[#003B71]/90 transition-colors" type="submit">
            Criar Conta
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Já tem uma conta?{" "}
          <Link className="text-[#003B71] hover:underline" href="/sign-in">
            Entrar
          </Link>
        </p>
      </motion.main>

      <footer className="bg-gray-50 border-t border-gray-200 py-3 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 py-3">
            &copy; 2024 Autoridade Nacional de Educação Profissional (ANEP). Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
