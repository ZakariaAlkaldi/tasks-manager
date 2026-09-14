"use client";
import { useState } from "react";
import Task from "./Task";
import StatusSelect from "./StatusSelect";
import SearchForm from "./SearchForm";
import AddButton from "./AddButton";
import CustomersSelect from "./CustomersSelect";
import { task } from "../types/task";
import { useRouter } from "next/navigation";
import PopUp from "./PopUp";
import SuccPopUp from "./SuccPopUp";
import { deleteTask } from "../services/task.service";

const TasksContent = ({ tasks }: { tasks: task[] }) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [customer, setCustomer] = useState("all");
  const [taskId, setTaskId] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const router = useRouter();

  const display = (id: string) => {
    setIsDisplay(true);
    setTaskId(id);
  };

  const onClose = () => {
    setIsDisplay(false);
    setIsDeleted(false);
  };

  const onConfirm = async () => {
    try {
      await deleteTask(taskId);
      setIsDisplay(false);
      router.refresh();
      setIsDeleted(true);
    } catch (e) {
      console.log(e);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = status === "all" || task.status === status;

    const matchesCustomer =
      customer === "all" || task.customer.name === customer;

    return matchesSearch && matchesStatus && matchesCustomer;
  });

  const customers: string[] = [
    ...new Set(tasks.map((task) => task.customer.name)),
  ];

  return (
    <>
      {isDisplay && (
        <PopUp
          title="حذف مهمة"
          description="هل أنت متأكد من حذف هذه المهمة؟"
          onClose={onClose}
          onConfirm={onConfirm}
        />
      )}
      {isDeleted && (
        <SuccPopUp
          title="حذف مهمة"
          description="تم حذف المهمة بنجاح"
          onClose={onClose}
        />
      )}
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
            return <Task key={task.id} task={task} display={display} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default TasksContent;
