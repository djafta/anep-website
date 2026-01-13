import React from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal";
import { Button } from "@heroui/button";

export function MissionModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button className="bg-white text-[#003B71] hover:bg-gray-100" color="primary" size="lg" onPress={onOpen}>
        Descubra Nossa Missão
      </Button>
      <Modal className="bg-white" isOpen={isOpen} scrollBehavior="inside" size={"4xl"} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Nossa Missão</ModalHeader>
          <ModalBody className="prose prose-lg max-w-none">
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
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
