'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

const galleryImages: GalleryItem[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    title: 'Conferência de Educação Profissional 2024',
    description: 'Evento anual reunindo educadores e profissionais da área',
    category: 'eventos',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
    title: 'Programa de Formação Técnica',
    description: 'Estudantes em aulas práticas de especialização técnica',
    category: 'formacao',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop',
    title: 'Laboratório de Inovação',
    description: 'Infraestrutura moderna para pesquisa e desenvolvimento',
    category: 'infraestrutura',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80',
    title: 'Cerimônia de Graduação',
    description: 'Celebração da conclusão de curso pelos alunos',
    category: 'graduacao',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&q=80',
    title: 'Workshop de Habilidades Digitais',
    description: 'Capacitação em tecnologias emergentes',
    category: 'workshops',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop&q=80',
    title: 'Sala de Aula Interativa',
    description: 'Ambiente moderno com recursos tecnológicos',
    category: 'infraestrutura',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=70',
    title: 'Encontro de Profissionais',
    description: 'Networking e compartilhamento de experiências',
    category: 'eventos',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&q=70',
    title: 'Programa de Mentoria',
    description: 'Orientação especializada para carreira',
    category: 'formacao',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop&q=70',
    title: 'Workshop de Empreendedorismo',
    description: 'Desenvolvimento de habilidades para negócios',
    category: 'workshops',
  },
];

const categories = [
  { id: 'todas', label: 'Todas' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'formacao', label: 'Formação' },
  { id: 'infraestrutura', label: 'Infraestrutura' },
  { id: 'graduacao', label: 'Graduação' },
  { id: 'workshops', label: 'Workshops' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === 'todas'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const currentImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  return (
    <div className="flex-1 mt-11 bg-white"
         style={ { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif' } }>
      {/* Header */ }
      <div className="sticky top-11 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light tracking-tight text-black">Galeria</h1>
              <p className="mt-1 text-sm font-light text-black/60">
                Autoridade Nacional da Educação Profissional
              </p>
            </div>
          </div>

          {/* Filters */ }
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            { categories.map((category) => (
              <button
                key={ category.id }
                onClick={ () => setSelectedCategory(category.id) }
                className={ cn("whitespace-nowrap rounded-full px-4 py-2 text-sm font-light transition-all",
                  selectedCategory === category.id ? "bg-primary text-white" : "bg-white text-black/60 hover:bg-primary/5") }
              >
                { category.label }
              </button>
            )) }
          </div>
        </div>
      </div>

      {/* Main Content */ }
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        { filteredImages.length > 0 ? (
          <div className="space-y-8">
            {/* Item 1 - Featured Large */ }
            { filteredImages[0] && (
              <div
                onClick={ () => setSelectedImageIndex(0) }
                className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl"
              >
                <Image
                  src={ filteredImages[0].src }
                  alt={ filteredImages[0].title }
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                <div
                  className="absolute inset-0 flex flex-col justify-end p-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h2 className="text-3xl font-light">{ filteredImages[0].title }</h2>
                  <p className="mt-2 text-sm font-light text-white/80">{ filteredImages[0].description }</p>
                </div>
              </div>
            ) }

            {/* Item 2 - Secondary Featured */ }
            { filteredImages[1] && (
              <div
                onClick={ () => setSelectedImageIndex(1) }
                className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl"
              >
                <Image
                  src={ filteredImages[1].src }
                  alt={ filteredImages[1].title }
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h2 className="text-2xl font-light">{ filteredImages[1].title }</h2>
                  <p className="mt-1 text-xs font-light text-white/70">{ filteredImages[1].description }</p>
                </div>
              </div>
            ) }

            {/* Items 3 & 4 - Featured Grid */ }
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              { [2, 3].map((idx) =>
                filteredImages[idx] ? (
                  <div
                    key={ idx }
                    onClick={ () => setSelectedImageIndex(idx) }
                    className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl"
                  >
                    <Image
                      src={ filteredImages[idx].src }
                      alt={ filteredImages[idx].title }
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                    <div
                      className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="text-lg font-light">{ filteredImages[idx].title }</h3>
                      <p className="mt-1 text-xs font-light text-white/70">
                        { filteredImages[idx].description }
                      </p>
                    </div>
                  </div>
                ) : null
              ) }
            </div>

            {/* Items 5+ - Grid */ }
            { filteredImages.length > 4 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                { filteredImages.slice(4).map((image, idx) => (
                  <div
                    key={ image.id }
                    onClick={ () => setSelectedImageIndex(idx + 4) }
                    className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                  >
                    <Image
                      src={ image.src }
                      alt={ image.title }
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                    <div
                      className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="text-sm font-light">{ image.title }</h3>
                    </div>
                  </div>
                )) }
              </div>
            ) }
          </div>
        ) : (
          <div className="py-24 text-center">
            <h2 className="text-2xl font-light text-black">Nenhuma imagem encontrada</h2>
            <p className="mt-2 text-sm font-light text-black/60">Tente outro filtro</p>
          </div>
        ) }
      </div>

      {/* Lightbox */ }
      { currentImage && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={ () => setSelectedImageIndex(null) }
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={ (e) => e.stopPropagation() }
          >
            {/* Close Button */ }
            <button
              onClick={ () => setSelectedImageIndex(null) }
              className="absolute -top-14 right-0 rounded-full p-2 text-white/60 transition-colors hover:text-white"
            >
              <X size={ 32 } strokeWidth={ 1.5 }/>
            </button>

            {/* Image */ }
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
              <Image
                src={ currentImage.src }
                alt={ currentImage.title }
                fill
                className="object-contain"
                priority
              />

              {/* Navigation */ }
              <button
                onClick={ (e) => {
                  e.stopPropagation();
                  handlePrevious();
                } }
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/60 transition-colors hover:text-white hover:bg-white/10"
              >
                <ChevronLeft size={ 32 } strokeWidth={ 1.5 }/>
              </button>

              <button
                onClick={ (e) => {
                  e.stopPropagation();
                  handleNext();
                } }
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/60 transition-colors hover:text-white hover:bg-white/10"
              >
                <ChevronRight size={ 32 } strokeWidth={ 1.5 }/>
              </button>
            </div>

            {/* Info */ }
            <div className="mt-6 space-y-3">
              <div>
                <h2 className="text-2xl font-light text-white">{ currentImage.title }</h2>
                <p className="mt-2 text-sm font-light text-white/70">{ currentImage.description }</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-light"
                  style={ {
                    backgroundColor: 'oklch(0.789 0.119 83.079 / 0.2)',
                    color: 'oklch(0.789 0.119 83.079)',
                  } }
                >
                  { currentImage.category }
                </span>
                <span className="text-xs font-light text-white/50">
                  { selectedImageIndex + 1 } de { filteredImages.length }
                </span>
              </div>
            </div>
          </div>
        </div>
      ) }
    </div>
  );
}