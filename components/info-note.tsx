export function InfoNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-gray-50 px-6 py-4 text-gray-700">
      {children}
    </div>
  );
}
