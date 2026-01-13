export type StatsCardProps = {
  readonly number: string;
  readonly description: string;
  readonly icon: React.ElementType;
};

export function StatsCard({ number, icon: A, description }: StatsCardProps) {
  return (
    <div className={"flex gap-3 border bg-white shadow p-4 rounded-2xl"}>
      <div className={"bg-primary text-3xl text-primary w-16 h-16 flex items-center justify-center rounded-2xl"}>
        {<A className={"w-8  h-8 fill-white stroke-primary"} />}
      </div>
      <div className={"grid grid-rows-2"}>
        <p className={"text-primary text-xl font-bold"}>{number}</p>
        <p className={"text-sm text-primary"}>{description}</p>
      </div>
    </div>
  );
}
