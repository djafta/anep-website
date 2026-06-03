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
  totalSubfields: number;
}

export type Subfield = {
  publicId: string;
  fieldPublicId: string;
  name: string;
  code: string;
  description?: string;
  sortOrder: number;
  totalQualifications: number;
}

export type Qualification = {
  publicId: string;
  name: string
  code: string
  level: string;
  specUrl: string
  description?: string;
  title: string;
  sortOrder: number;
  subfieldPublicId: string;
  certificate: string
}

export type IndependentModule = {
  publicId: string;
  name: string
  code: string
  specUrl: string
  description?: string;
  title: string;
  sortOrder: number;
}

export type Stats = {
  fields: number;
  subfields: number;
  qualifications: number;
}

export type User = {
  publicId: string;
  email: string;
  name: string;
  role: string;
}