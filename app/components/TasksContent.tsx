"use client";
import { useState } from "react";
import Task from "./Task";
import StatusSelect from "./StatusSelect";
import SearchForm from "./SearchForm";
import AddButton from "./AddButton";

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
      task: "تصميم",
      status: "inprogress",
      dueTime: "2026-9-15",
    },
    {
      id: 4,
      customer: "محمد",
      task: "تصميم",
      status: "pending",
      dueTime: "2026-9-15",
    },
    {
      id: 2,
      customer: "محمد",
      task: "تحليل",
      status: "pending",
      dueTime: "2026-9-15",
    },
    {
      id: 5,
      customer: "محمد",
      task: "تحليل",
      status: "completed",
      dueTime: "2026-9-15",
    },
    {
      id: 3,
      customer: "محمد",
      task: "تخطيط",
      status: "completed",
      dueTime: "2026-9-15",
    },
    {
      id: 6,
      customer: "محمد",
      task: "تخطيط",
      status: "completed",
      dueTime: "2026-9-15",
    },
  ];

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const filteredTasks = tasks.filter((task) =>
    task.task.toLowerCase().includes(search.toLowerCase()),
  );
  // const filteredStatus = tasks.filter((task) => task.status == status);

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <SearchForm
          placeHolder="أبحث بأسم المهمة"
          onSearchChanges={setSearch}
        />

        <AddButton text="أضافة مهمة" />
      </div>

      <div className="w-full sm:w-100 flex gap-2 mb-5">
        <StatusSelect onStatusChange={setStatus} status={status} />
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
          {status == "all"
            ? !filteredTasks
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
              : filteredTasks.map((task) => {
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
            : tasks.map((task) => {
                return task.status == status ? (
                  <Task
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    customer={task.customer}
                    status={task.status}
                    dueTime={task.dueTime}
                  />
                ) : null;
              })}
        </tbody>
      </table>
    </>
  );
};

export default TasksContent;
