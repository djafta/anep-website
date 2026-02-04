interface ValuePillProps {
  label: string;
}

export function ValuePill({ label }: ValuePillProps) {
  return (
    <li className="group relative flex items-center gap-4 rounded-2xl border bg-white px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      <span
        aria-hidden
        className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
      >
        {label.charAt(0)}
      </span>

      <span className="text-base font-semibold text-gray-900 tracking-tight">
        {label}
      </span>

    </li>
  );
}
