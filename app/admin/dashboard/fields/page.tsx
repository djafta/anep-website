'use server';

import { Field } from "@/lib/types";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import React from "react";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { AddFieldForm } from "@/components/add-field-form";

export default async function FieldsPage() {
  const fields: Field[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields`, {
    cache: "no-store",
  }).then(response => response.json());
  return (
    <div className={ 'flex-1 flex flex-col' }>
      <div>

      </div>
      <div className={ 'flex-1 flex flex-col gap-6' }>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            fields.map((field) => (
              <Link key={ field.publicId } className={ "w-full h-full flex" }
                    href={ `/cnqp/${ field.publicId }` }>
                <Card className="w-full  hover:shadow-lg hover:ring-1 ring-primary transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div className={ "flex items-center gap-4" }>
                      <div className={ "overflow-hidden rounded-full p-3 bg-primary text-white aspect-square w-fit" }>
                        <DynamicIcon name={ field.icon as IconName || 'circle-question-mark' } className="w-6 h-6"/>
                      </div>
                      <h3 className="text-md text-gray-900 mb-2">{ field.name }</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )) }

          <Dialog modal={ true }>
            <DialogTrigger asChild>
              <Card className="w-full hover:shadow-lg hover:ring-1 ring-primary transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col justify-between">
                  <div className={ "flex items-center gap-4" }>
                    <div className={ "overflow-hidden rounded-full p-3 bg-primary text-white aspect-square w-fit" }>
                      <Plus className="w-6 h-6"/>
                    </div>
                    <h3 className="text-md text-gray-900 mb-2">
                      Adicionar Campo
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
              <DialogHeader>
                <DialogTitle>Adicionar Campo</DialogTitle>
                <DialogDescription>
                  Preencha as informações necessárias e clique em adicionar no final.ß
                </DialogDescription>
              </DialogHeader>
              <AddFieldForm/>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}