const StatCard = ({ title, value, change, note, badge }) => {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{title}</p>
        <span className={`rounded-md px-2 py-1 text-xs font-medium ${badge}`}>
          {change}
        </span>
      </div>

      <h2 className="mt-2 text-2xl font-semibold text-gray-900">{value}</h2>

      <p className="mt-1 text-sm text-gray-400">{note}</p>
    </div>
  );
};

export default StatCard;
