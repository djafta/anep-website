interface VisionStatementProps {
  title: string;
  text: string;
}

export function VisionStatement({ title, text }: VisionStatementProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {title}
      </h2>

      <blockquote className="relative pl-10 text-gray-600 text-lg leading-relaxed">
        <span className="absolute left-0 top-0 text-5xl text-primary font-serif">
          “
        </span>

        {text}
      </blockquote>
    </div>
  );
}
