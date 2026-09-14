import PageTitle from "../components/PageTitle";
import { StatCard } from "../components/StatCard";
import { task } from "../types/task";

const API_URL = process.env.NEXT_PUBLIC_URL;

const Dashboard = async () => {
  const response = await fetch(`${API_URL}/dashboard`);
  if (!response.ok) {
    console.log("Failed to Fetch Dashboard Data");
  }
  const result = await response.json();

  const statistics = result.data["statistics"];
  const recentTasks = result.data["recentTasks"];

  return (
    <div dir="rtl">
      <main>
        <PageTitle title="لوحة التحكم" />

        <section className="w-fit mt-5 grid grid-cols-5 gap-3">
          {/* Total */}
          <StatCard
            title="إجمالي العملاء"
            value={statistics.totalCustomers}
            borderColor="border-slate-200"
          />

          {/* All */}
          <StatCard
            title="إجمالي المهام"
            value={statistics.totalTasks}
            borderColor="border-blue-100"
          />
          {/* Pending */}
          <StatCard
            title="المهام قيد الانتظار"
            value={statistics.pendingTasks}
            borderColor="border-blue-100"
          />

          {/* In progress */}
          <StatCard
            title="المهام قيد التنفيذ"
            value={statistics.inProgressTasks}
            borderColor="border-amber-100"
          />

          {/* Completed */}
          <StatCard
            title="المهام المكتملة"
            value={statistics.completedTasks}
            borderColor="border-emerald-100"
          />
        </section>

        <h3 className="mt-5 text-xl text-slate-800 dark:text-white">
          أحدث المهام
        </h3>

        <table className="w-full mt-5 border-collapse text-center table-auto ">
          <thead>
            <tr className="bg-[#141C2B] dark:bg-[#0E1D31] text-white">
              <th className="p-5 text-md sm:text-xl font-bold uppercase ">
                المهمة
              </th>
              <th className="p-5 text-md sm:text-xl font-bold uppercase ">
                العميل
              </th>
              <th className="p-5 text-md sm:text-xl font-bold uppercase ">
                الحالة
              </th>
              <th className="p-5 text-md sm:text-xl font-bold uppercase ">
                وقت التسليم
              </th>
            </tr>
          </thead>
          <tbody>
            {recentTasks.map((task: task) => {
              return (
                <tr
                  key={task.id}
                  className="text-[#141C2B] dark:text-white sm:text-xl"
                >
                  <td className="p-2">{task.title}</td>
                  <td className="p-2">{task.customer.name}</td>
                  <td className="p-2">{task.status}</td>
                  <td className="p-2">{task.dueDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dashboard;
