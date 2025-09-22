"use client";

import React, { useState } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Link } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Filter, Search } from "lucide-react";

import { Footer } from "@/app/footer";
import { Header } from "@/components/header";

type NewsArticle = {
  title: string;
  date: string;
  link: string;
  category: string;
};

type FeaturedArticle = {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  image: string;
};

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [newsArticles] = useState<NewsArticle[]>([]);
  const [featuredArticle] = useState<FeaturedArticle | null>(null);
  const categories = ["Todas", "Educação", "Tecnologia", "Parcerias", "Eventos"];

  const filteredArticles = newsArticles.filter(
    (article) =>
      (selectedCategory === "Todas" || article.category === selectedCategory) &&
      article.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto px-4 py-16 max-w-5xl">
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Notícias e Atualizações
        </motion.h1>

        <div className="mb-12 flex flex-col md:flex-row gap-4">
          <Input
            className="md:w-2/3"
            placeholder="Pesquisar notícias..."
            startContent={<Search className="text-gray-400" />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Dropdown>
            <DropdownTrigger>
              <Button className="md:w-1/3" startContent={<Filter className="text-gray-400" />} variant="bordered">
                {selectedCategory}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Categorias"
              selectedKeys={[selectedCategory]}
              selectionMode="single"
              onSelectionChange={(keys) => setSelectedCategory(keys.currentKey as string)}
            >
              {categories.map((category) => (
                <DropdownItem key={category}>{category}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        <section className="mb-24">
          {featuredArticle && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-[400px] mb-8 overflow-hidden rounded-lg">
                <Image
                  alt={featuredArticle.title}
                  className="transition-transform duration-300 group-hover:scale-105"
                  layout="fill"
                  objectFit="cover"
                  src={featuredArticle.image}
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{featuredArticle.date}</p>
              <h2 className="text-3xl font-semibold mb-4 text-gray-900">{featuredArticle.title}</h2>
              <p className="text-xl text-gray-600 mb-6">{featuredArticle.excerpt}</p>
              <Link
                className="text-[#003B71] font-semibold inline-flex items-center hover:underline"
                href={featuredArticle.link}
              >
                Ler mais <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </motion.div>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Últimas Notícias</h2>
          {filteredArticles.length > 0 ? (
            <div className="space-y-8">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={index}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-b border-gray-200 pb-8 last:border-b-0"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{article.title}</h3>
                  <Link
                    className="text-[#003B71] font-semibold inline-flex items-center hover:underline"
                    href={article.link}
                  >
                    Ler mais <ChevronRight className="ml-1 w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              Nenhuma notícia encontrada para os critérios de busca selecionados.
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
