import Link from "next/link";
import { task } from "../types/task";

const Task = ({ task }: { task: task }) => {
  return (
    <tr className="text-[#141C2B] sm:text-xl">
      <td className="p-2">{task.title}</td>
      <td className="p-2">{task.customer.name}</td>
      <td className="p-2">{task.status}</td>
      <td className="p-2">{task.dueDate}</td>
      <td className=" cursor-pointer">
        <Link
          key={task.id}
          href={`../tasks/${task.id}`}
          className="py-1 px-2 bg-[#5F75B2] text-white rounded-sm"
        >
          المزيد
        </Link>
      </td>
    </tr>
  );
};

export default Task;
