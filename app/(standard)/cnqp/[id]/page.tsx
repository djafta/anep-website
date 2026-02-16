"use client";

import React, { use, useState } from "react";
import { motion } from "framer-motion";

import { useCnqp } from "@/hooks/use-cnqp";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { QualificationCard } from "@/components/cnqp/qualification-card";
import { CloudDownload } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
    <div className="flex-1 grow flex flex-col bg-white">
      <section className="pb-0 flex-1 px-4">
        <header className={ "sticky pt-10 top-10 bg-background z-20" }>
          <div className={ "max-w-7xl mx-auto py-3 flex justify-between items-center" }>
            <div>
              <h1 className={ "text-5xl text-primary pb-3" }>{ String(field?.name || "") }</h1>
              <div className={ "max-w-7xl mx-auto " }>
                <motion.div
                  animate={ { opacity: 1, y: 0 } }
                  className="flex flex-col md:flex-row gap-4 mb-5 justify-start"
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
              </div>
              <div>
                <p className={ 'text-sm text-gray-600' }>Use a { " " } <CloudDownload
                  className={ 'text-gray-600 inline-block size-4' }/> { " " } para descarregar o documento PDF da
                  qualificação.</p>
              </div>
            </div>
            <div>
              Qualificações: <span className={ 'aspect-square rounded-full bg-secondary p-1' }>{ filteredQualifications.length }</span>
            </div>
          </div>
        </header>
        <main
          className={ "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16 h-full flex-1" }>
          { filteredQualifications.map((qualification, index) => (
            <QualificationCard key={ qualification.id } qualification={ qualification }/>
          )) }
        </main>
      </section>
    </div>
  );
}
