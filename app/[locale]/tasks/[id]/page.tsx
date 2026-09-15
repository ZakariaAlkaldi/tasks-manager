import StatusButtons from "../../components/StatusButtons";
import { getTaskById } from "../../services/task.service";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

type props = {
  params: Promise<{ id: string }>;
};
const TaskDetails = async ({ params }: props) => {
  const { id } = await params;
  const t = await getTranslations("TaskDetails");

  const task = await getTaskById(id);

  return (
    <section>
      <header className="relative">
        <Link
          href={"../tasks"}
          className="absolute left-0 top-0 hidden sm:flex items-center dark:text-white gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm  font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:bg-[#0F1E35]"
        >
          <span>{t("back")}</span>
        </Link>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
          {task.title}
        </h2>
      </header>
      <div className="sm:mt-10 mt-5 sm:pb-8 pb-4">
        <div className="grid grid-cols-3 gap-2 items-center">
          {/* Due Date */}
          <div className="flex flex-col items-start sm:gap-3 justify-center ">
            <p className="text-sm text-slate-500 dark:text-white">
              {t("dueDate")}
            </p>

            <p className="mt-2 font-semibold text-slate-800 dark:text-white">
              {task.dueDate}
            </p>
          </div>

          {/* Customer */}
          <div className="flex flex-col items-start sm:gap-3 justify-center">
            <p className="text-sm text-slate-500 dark:text-white">
              {t("customer")}
            </p>

            <p className="mt-2 font-semibold text-slate-800 dark:text-white">
              {task.customer.name}
            </p>
          </div>

          {/* Created Date */}
          <div className="flex flex-col items-start sm:gap-3 justify-center">
            <p className="text-sm text-slate-500 dark:text-white">
              {t("createdDate")}
            </p>

            <p className="mt-2 font-semibold text-slate-800 dark:text-white">
              {task.createdAt.slice(0, 10)}
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="w-full rounded-xl mb-5 border border-slate-200 bg-white dark:bg-[#0F1E35] sm:p-8 p-4 shadow-sm">
        <h3 className="sm:text-lg text-md font-bold text-slate-800 dark:text-white">
          {t("description")}
        </h3>
        <p className="mt-3 sm:text-md text-sm leading-8 text-slate-500 dark:text-white">
          {task.description}
        </p>
      </section>

      <div className="rounded-xl border border-slate-200 bg-white dark:bg-[#0F1E35] sm:p-8 p-4 shadow-sm">
        <section>
          <h3 className="sm:text-lg text-md font-bold text-slate-800 dark:text-white">
            {t("changeStatus")}
          </h3>
          <div className="mt-3 flex gap-3">
            <StatusButtons initialStatus={task.status} taskTd={task.id} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default TaskDetails;
