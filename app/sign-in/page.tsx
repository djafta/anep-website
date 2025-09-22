"use client";

import React, { useState } from "react";
import { Button, Checkbox, Input, Link } from "@heroui/react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import { Header } from "@/app/sign-in/header";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
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
        className="max-w-sm mx-auto w-full px-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Entrar na sua conta ANEP</h1>
        <form className="space-y-6 w-full max-w-lg" onSubmit={handleSubmit}>
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
            className={"hidden"}
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <EyeOff className="text-2xl text-gray-400 pointer-events-none" />
                ) : (
                  <Eye className="text-2xl text-gray-400 pointer-events-none" />
                )}
              </button>
            }
            label="Senha"
            name="password"
            placeholder="Digite sua senha"
            startContent={<Lock className="text-gray-400" />}
            type={isVisible ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
          />
          <div className="flex items-center justify-between">
            <Checkbox checked={formData.rememberMe} name="rememberMe" onChange={handleInputChange}>
              Lembrar-me
            </Checkbox>
            <Link className="text-sm text-[#003B71] hover:underline" href="https://iforgot.anep.gov.mz">
              Esqueceu sua conta?
            </Link>
          </div>
          <Button className="w-full bg-[#003B71] text-white hover:bg-[#003B71]/90 transition-colors" type="submit">
            Entrar
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Não tem uma conta?{" "}
          <Link className="text-[#003B71] hover:underline" href="/sign-up">
            Cadastre-se
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
