'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CloudDownload } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export type QualificationCardProps = {
  qualification: {
    name: string;
    certificate: string;
    level: number;
    field: string;
    code: string
  }
}

export function QualificationCard({ qualification }: QualificationCardProps) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const url = `http://content.anep.gov.mz/qualifications/${ qualification.code }.pdf`;
      const response = await fetch(url, {
        method: 'HEAD',
      });
      if (response.ok) {
        setUrl(url)
      }
    })()
  }, []);

  return (
    <Card
      className="w-full h-52 bg-white hover:shadow-xl transition-all duration-300 border-1 border-[#003B71]">
      <CardContent className="p-6 relative h-full">
        <div className="flex justify-between mb-4 gap-1">
          <h3 className="text-xl font-semibold text-gray-900">{ qualification.name }</h3>
          <span
            className={ "self-baseline bg-primary rounded-3xl text-primary-foreground px-2 py-1 text-sm min-w-fit" }>
            { "C" + qualification.certificate + qualification.level }
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          <span className="font-medium">Campo:</span> { qualification.field }
          <br/>
          <span className="font-medium">Nível:</span> { qualification.level }
          <br/>
        </p>
        <p className="text-gray-700">{ "" }</p>
        {
          url && (
            <Button className={ 'absolute right-2 bottom-2' } size={ 'icon' } variant={ 'ghost' } asChild>
              <Link href={ url } target={ '_blanks' }>
                <CloudDownload/>
              </Link>
            </Button>
          )
        }
      </CardContent>
    </Card>
  )
}