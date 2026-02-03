import StatCard from "../Components/UI/statCard";

const Dashboard = () => {
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold text-gray-900">Overview</h1>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="2,543"
          change="+12%"
          note="Increased by 257 since last month"
          badge="bg-blue-100 text-blue-600"
        />
        <StatCard
          title="Revenue"
          value="$45,257"
          change="+8%"
          note="Increased by $3,257 since last month"
          badge="bg-green-100 text-green-600"
        />
        <StatCard
          title="Active Sessions"
          value="1,325"
          change="+5%"
          note="Increased by 103 since yesterday"
          badge="bg-yellow-100 text-yellow-600"
        />
        <StatCard
          title="Conversion Rate"
          value="12.3%"
          change="-2%"
          note="Decreased by 1.8% since last week"
          badge="bg-red-100 text-red-600"
        />
      </div>

      {/* Charts */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium">User Activity</h2>
          <div className="flex h-56 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
            Chart Placeholder
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium">Revenue Overview</h2>
          <div className="flex h-56 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
            Chart Placeholder
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
