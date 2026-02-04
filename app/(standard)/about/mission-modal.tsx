import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function MissionModal() {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={ 'secondary' }>
          Descubra Nossa Missão
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white w-full max-w-3xl">
        <DialogHeader className="flex flex-col gap-1">
          <DialogTitle>
            Nossa Missão
          </DialogTitle>
        </DialogHeader>
        <div className="prose prose-lg max-w-none">
          <p>
            A missão da ANEP é transformar a educação profissional no Brasil, preparando indivíduos para os desafios
            do mercado de trabalho atual e futuro. Nosso compromisso é:
          </p>
          <ul>
            <li>Desenvolver qualificações de alta qualidade que atendam às necessidades da indústria</li>
            <li>Promover a inovação e a excelência no ensino profissional</li>
            <li>Facilitar a colaboração entre instituições de ensino e empregadores</li>
            <li>Garantir que as qualificações sejam reconhecidas nacionalmente e internacionalmente</li>
            <li>Apoiar o desenvolvimento econômico através da formação de profissionais altamente qualificados</li>
          </ul>
          <p>
            Trabalhamos incansavelmente para criar um sistema educacional que capacite os indivíduos, impulsione a
            inovação e contribua para o crescimento sustentável do país.
          </p>
        </div>
        <DialogFooter>
          <DialogClose>
            Fechar
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
