type PageHeaderProps = {
  title: string
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <header className={ "flex max-w-7xl w-full mx-auto h-full min-h-40 max-h-40 p-3 justify-between items-center" }>
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-medium">
          { title }
        </h1>

        { description && (
          <p className="text-sm text-muted-foreground max-w-3xl">
            { description }
          </p>
        ) }
      </div>
      { children }
    </header>
  );
}
