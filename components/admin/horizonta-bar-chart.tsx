type BarItem = {
  label: string;
  count: number;
  total: number;
};

export function HorizontalBarChart({ data }: { data: BarItem[] }) {
  return (
    <div className="space-y-4 w-full">
      { data.map((item) => {
        const percentage =
          item.total > 0 ? (item.count / item.total) * 100 : 0;

        return (
          <div key={ item.label } className="space-y-1">
            {/* Header */ }
            <div className="flex justify-between text-sm">
              <span className="font-medium text-sm">{ item.label }</span>
              <span className="text-muted-foreground">
                { item.count }/{ item.total }
              </span>
            </div>

            {/* Bar */ }
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={ { width: `${ percentage }%` } }
              />
            </div>
          </div>
        );
      }) }
    </div>
  );
}