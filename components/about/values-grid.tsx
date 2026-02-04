import { ValuePill } from "@/components/about/value-pill";

export function ValuesGrid({ values }: { values: string[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      { values.map((value) => (
        <ValuePill key={ value } label={ value }/>
      )) }
    </ul>
  );
}
