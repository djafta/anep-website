"use client";

import React, { use, useState } from "react";
import { motion } from "framer-motion";

import { useCnqp } from "@/hooks/use-cnqp";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { QualificationCard } from "@/components/cnqp/qualification-card";

const levels = ["Nível 3", "Nível 4", "Nível 5"];

export default function QualificationsPage({ params }: { params: Promise<{ id: string }> }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("Todos Níveis");

  const { id } = use(params);

  const { qualifications, fields } = useCnqp();

  const allLevels = "Todos Níveis";

  const filteredQualifications = qualifications.filter(
    (qual) => {
      if (selectedLevel === allLevels) {
        return qual.name.toLowerCase().includes(searchTerm.toLowerCase()) && qual.fieldCode.toLowerCase() === id
      } else {
        return qual.name.toLowerCase().includes(searchTerm.toLowerCase()) && qual.fieldCode.toLowerCase() === id
          && selectedLevel.toLowerCase().includes(qual.level.toString())
      }
    }
  );

  const field = fields.find((f) => f.code === id);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="pb-0 flex-1 px-4">
        <div className={ "max-w-7xl mx-auto py-3 mt-20" }>
          <h1 className={ "text-5xl text-primary" }>{ String(field?.name || "") }</h1>
        </div>
        <div className={ "max-w-7xl mx-auto " }>
          <motion.div
            animate={ { opacity: 1, y: 0 } }
            className="flex flex-col md:flex-row gap-4 mb-12 justify-start"
            initial={ { opacity: 0, y: 20 } }
            transition={ { duration: 0.5, delay: 0.2 } }
          >
            <Input
              className="max-w-md"
              placeholder="Pesquisar qualificações..."
              value={ searchTerm }
              onChange={ (e) => setSearchTerm(e.target.value) }
            />
            <Select onValueChange={ setSelectedLevel }>
              <SelectTrigger className={ 'max-w-32' }>
                { selectedLevel }
              </SelectTrigger>
              <SelectContent
                aria-label="Níveis"
              >
                { [
                  ...levels.map((level) => <SelectItem key={ level } value={ level }>{ level }</SelectItem>),
                  <SelectItem value={ allLevels } key={ allLevels }>{ allLevels }</SelectItem>,
                ] }
              </SelectContent>
            </Select>
          </motion.div>
          <div className={ "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16" }>
            { filteredQualifications.map((qualification, index) => (
              <QualificationCard key={ qualification.id } qualification={ qualification }/>
            )) }
          </div>
        </div>
      </main>
    </div>
  );
}
