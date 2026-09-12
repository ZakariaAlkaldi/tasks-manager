"use client";
import { useState } from "react";
import Task from "./Task";
import StatusSelect from "./StatusSelect";
import SearchForm from "./SearchForm";
import AddButton from "./AddButton";
import CustomersSelect from "./CustomersSelect";
import { task } from "../types/task";
import Link from "next/link";

const TasksContent = ({ tasks }: { tasks: task[] }) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [customer, setCustomer] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = status === "all" || task.status === status;

    const matchesCustomer =
      customer === "all" || task.customer.name === customer;

    return matchesSearch && matchesStatus && matchesCustomer;
  });

  const customers = tasks.map((task) => {
    return task.customer.name;
  });

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <SearchForm
          placeHolder="أبحث بأسم المهمة"
          onSearchChanges={setSearch}
        />
        <AddButton text="أضافة مهمة" link="../tasks/addTask" />
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
            return <Task key={task.id} task={task} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default TasksContent;
