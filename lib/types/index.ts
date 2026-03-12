import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Field = {
  publicId: string;
  name: string;
  code: string;
  icon?: string;
  description?: string;
  sortOrder: number;
  subfields: number;
}

export type Subfield = {
  publicId: string;
  fieldPublicId: string;
  name: string;
  code: string;
  description?: string;
  sortOrder: number;
  qualifications: number;
}

export type Qualification = {
  publicId: string;
  name: string
  code: string
  level: string;
  specUrl: string
  description?: string;
}

export type Stats = {
  fields: number;
  subfields: number;
  qualifications: number;
}