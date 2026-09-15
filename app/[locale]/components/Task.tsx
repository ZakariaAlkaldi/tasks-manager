import Link from "next/link";
import { task } from "../types/task";
import { useTranslations } from "next-intl";

const Task = ({
  task,
  display,
}: {
  task: task;
  display: (id: string) => void;
}) => {
  const t = useTranslations("Tasks");
  const statusT = useTranslations("Status");
  return (
    <tr className="text-[#141C2B] dark:text-white sm:text-xl">
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
      <td className=" cursor-pointer">
        <Link
          key={task.id}
          href={`../tasks/${task.id}`}
          className="py-1 px-2 bg-[#5F75B2] text-white rounded-sm"
        >
          {t("more")}
        </Link>
        <button
          onClick={() => {
            display(task.id);
          }}
          className="py-1 px-2 mr-2 ml-2 bg-[#f44336] text-white rounded-sm cursor-pointer"
        >
          {t("delete")}
        </button>
      </td>
    </tr>
  );
};

export default Task;
