"use client";
import { useState } from "react";
import Task from "./Task";
import StatusSelect from "./StatusSelect";
import SearchForm from "./SearchForm";
import AddButton from "./AddButton";
import CustomersSelect from "./CustomersSelect";

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
      customer: "أحمد",
      task: "تصميم",
      status: "pending",
      dueTime: "2026-9-15",
    },
    {
      id: 2,
      customer: "علي",
      task: "تحليل",
      status: "pending",
      dueTime: "2026-9-15",
    },
    {
      id: 5,
      customer: "صاح",
      task: "تحليل",
      status: "completed",
      dueTime: "2026-9-15",
    },
    {
      id: 3,
      customer: "أيمن",
      task: "تخطيط",
      status: "completed",
      dueTime: "2026-9-15",
    },
    {
      id: 6,
      customer: "سالم",
      task: "تخطيط",
      status: "completed",
      dueTime: "2026-9-15",
    },
  ];

  const customers = tasks.map((task) => {
    return task.customer;
  });

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [customer, setCustomer] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.task
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = status === "all" || task.status === status;

    const matchesCustomer = customer === "all" || task.customer === customer;

    return matchesSearch && matchesStatus && matchesCustomer;
  });

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <SearchForm
          placeHolder="أبحث بأسم المهمة"
          onSearchChanges={setSearch}
        />
        <AddButton text="أضافة مهمة" link="/" />
      </div>

      <div className="w-full sm:w-100 flex gap-2 mb-5">
        <StatusSelect onSelectedChange={setStatus} selected={status} />
        <CustomersSelect
          onSelectedChange={setCustomer}
          selected={customer}
          customers={customers}
        />
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
          {filteredTasks.map((task) => {
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
