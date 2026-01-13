"use client";

import React, { use, useState } from "react";
import { Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@heroui/react";
import { ChevronDown, Search } from "lucide-react";
import { motion } from "framer-motion";

import { useCnqp } from "@/hooks/use-cnqp";

const levels = ["Nível 3", "Nível 4", "Nível 5"];

export default function QualificationsPage({ params }: { params: Promise<{ id: string }> }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("Todos Níveis");

  const { id } = use(params);

  const { qualifications, fields } = useCnqp();

  const filteredQualifications = qualifications.filter(
    (qual) =>
      qual.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      selectedLevel === "Todos Níveis" &&
      qual.fieldCode.toLowerCase() === id,
  );

  const field = fields.find((f) => f.code === id);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="pb-0 flex-1 px-4">
        <div className={"max-w-7xl mx-auto py-3 mt-20"}>
          <h1 className={"text-5xl text-primary"}>{String(field?.name || "")}</h1>
        </div>
        <div className={"max-w-7xl mx-auto "}>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row gap-4 mb-12 justify-start"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Input
              className="max-w-md"
              placeholder="Pesquisar qualificações..."
              startContent={<Search className="text-gray-400" />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="border-gray-200 bg-white"
                  endContent={<ChevronDown className="text-small" />}
                  variant="bordered"
                >
                  {selectedLevel}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Níveis"
                selectedKeys={[selectedLevel]}
                selectionMode="single"
                onSelectionChange={(keys) => setSelectedLevel(Array.from(keys)[0] as string)}
              >
                {[
                  ...levels.map((level) => <DropdownItem key={level}>{level}</DropdownItem>),
                  <DropdownItem key={"Todos Níveis"}>Todos Níveis</DropdownItem>,
                ]}
              </DropdownMenu>
            </Dropdown>
          </motion.div>
          <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16"}>
            {filteredQualifications.map((qual, index) => (
              <motion.div
                key={qual.id}
                animate={{ opacity: 1, y: 0 }}
                className={"h-full w-full flex"}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="w-full h-full bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-1 border-[#003B71]">
                  <CardBody className="p-6">
                    <div className="flex justify-between mb-4 gap-1">
                      <h3 className="text-xl font-semibold text-gray-900">{qual.name}</h3>
                      <span
                        className={
                          "self-baseline bg-primary rounded-3xl text-primary-foreground px-2 py-1 text-sm min-w-fit"
                        }
                      >
                        {"C" + qual.certificate + qual.level}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      <span className="font-medium">Campo:</span> {qual.field}
                      <br />
                      <span className="font-medium">Nível:</span> {qual.level}
                      <br />
                      <span className="font-medium">Duração:</span> {0}
                    </p>
                    <p className="text-gray-700 mb-6">{""}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
