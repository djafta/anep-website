export interface Accreditation {
  qualification: string;
  level: number;
  certificate: "A" | "B" | "C";
}

export interface Institution {
  id: string;
  name: string;
  location: string;
  type: "professional-education" | "higher-education";
  accreditations: Accreditation[];
}
