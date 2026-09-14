type StatCardProps = {
  title: string;
  value: string;
  borderColor: string;
};

export const StatCard = ({ title, value, borderColor }: StatCardProps) => {
  return (
    <div
      className={`w-fit relative rounded-xl border ${borderColor} bg-white p-5 shadow-sm`}
    >
      <div className="flex flex-col gap-3 items-center justify-center">
        <p className="text-sm text-slate-500">{title}</p>
        <span className=" text-2xl font-bold text-slate-800">{value}</span>
      </div>
    </div>
  );
};
