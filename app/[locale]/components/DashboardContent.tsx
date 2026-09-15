import PageTitle from "./PageTitle";
import { statistics } from "../types/statistics";
import { task } from "../types/task";
import { StatCard } from "./StatCard";
import { useLocale, useTranslations } from "next-intl";

const DashboardContent = ({
  statistics,
  recentTasks,
}: {
  statistics: statistics;
  recentTasks: task[];
}) => {
  const t = useTranslations("Dashboard");
  const statusT = useTranslations("Status");
  const local = useLocale();
  const dir = local === "ar" ? "rtl" : "ltr";
  return (
    <main dir={dir}>
      <PageTitle title={t("pageTitle")} />

      <section className="w-fit mt-5 grid grid-cols-5 gap-3">
        {/* Total */}
        <StatCard
          title={t("totalCustomers")}
          value={statistics.totalCustomers}
          borderColor="border-slate-200"
        />

        {/* All */}
        <StatCard
          title={t("totalTasks")}
          value={statistics.totalTasks}
          borderColor="border-blue-100"
        />
        {/* Pending */}
        <StatCard
          title={t("pendingTasks")}
          value={statistics.pendingTasks}
          borderColor="border-blue-100"
        />

        {/* In progress */}
        <StatCard
          title={t("inProgressTasks")}
          value={statistics.inProgressTasks}
          borderColor="border-amber-100"
        />

        {/* Completed */}
        <StatCard
          title={t("completedTasks")}
          value={statistics.completedTasks}
          borderColor="border-emerald-100"
        />
      </section>

      <h3 className="mt-5 text-xl text-slate-800 dark:text-white">
        {t("recentTasksTitle")}
      </h3>

      <table className="w-full mt-5 border-collapse text-center table-auto ">
        <thead>
          <tr className="bg-[#141C2B] dark:bg-[#0E1D31] text-white">
            <th className="p-5 text-md sm:text-xl font-bold uppercase ">
              {t("tableTask")}
            </th>
            <th className="p-5 text-md sm:text-xl font-bold uppercase ">
              {t("tableCustomer")}
            </th>
            <th className="p-5 text-md sm:text-xl font-bold uppercase ">
              {t("tableStatus")}
            </th>
            <th className="p-5 text-md sm:text-xl font-bold uppercase ">
              {t("tableDueDate")}
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
                <td className="p-2">
                  {statusT(
                    task.status === "PENDING"
                      ? "pending"
                      : task.status === "IN_PROGRESS"
                        ? "inProgress"
                        : "completed",
                  )}
                </td>
                <td className="p-2">{task.dueDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default DashboardContent;
