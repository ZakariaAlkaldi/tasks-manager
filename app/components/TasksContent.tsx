"use client";
import { useState } from "react";
import Task from "./Task";
import StatusSelect from "./StatusSelect";

const TasksContent = () => {
  type task = {
    id: number;
    customer: string;
    task: string;
    status: string;
    dueTime: string;
  };

  const tasks: task[] = [
    {
      id: 1,
      customer: "محمد",
      task: "محمد",
      status: "قيد التنفيذ",
      dueTime: "2026-9-15",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredCustomers = tasks.filter((task) =>
    task.task.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <form>
          <input
            type="text"
            placeholder="أبحث بأسم المهمة"
            className="p-3 my-6  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none "
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        <button className="w-fit h-full py-3 px-5 bg-[#141C2B] text-white font-bold cursor-pointer">
          أضافة مهمة
        </button>
      </div>

      <div className="w-full sm:w-100 flex gap-2 mb-5">
        <StatusSelect />
        <StatusSelect />
      </div>

      <table className="w-full border-collapse text-center table-auto ">
        <thead>
          <tr className="bg-[#141C2B] text-white">
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
            <th className="p-5 text-md sm:text-xl font-bold uppercase ">
              الأفعال
            </th>
          </tr>
        </thead>
        <tbody>
          {!filteredCustomers
            ? tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    customer={task.customer}
                    status={task.status}
                    dueTime={task.dueTime}
                  />
                );
              })
            : filteredCustomers.map((task) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    customer={task.customer}
                    status={task.status}
                    dueTime={task.dueTime}
                  />
                );
              })}
        </tbody>
      </table>
    </>
  );
};

export default TasksContent;
