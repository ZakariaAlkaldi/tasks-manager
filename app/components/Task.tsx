type taskType = {
  id: number;
  customer: string;
  task: string;
  status: string;
  dueTime: string;
};

const Task = ({ id, task, customer, status, dueTime }: taskType) => {
  return (
    <tr className="text-[#141C2B] sm:text-xl ">
      <td className="p-2">{task}</td>
      <td className="p-2">{customer}</td>
      <td className="p-2">{status}</td>
      <td className="p-2">{dueTime}</td>
      <td className="p-2">
        <button className="py-1 px-2 bg-[#5F75B2] text-white rounded-sm cursor-pointer">
          تعديل
        </button>
      </td>
    </tr>
  );
};

export default Task;
