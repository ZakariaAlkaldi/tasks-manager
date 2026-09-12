"use client";
import { useState } from "react";
import { customer } from "../types/customer";
import { task } from "../types/task";
import { addTask } from "../services/task.service";

const TaskForm = ({ customers }: { customers: customer[] }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [customerId, setCustomerId] = useState("all");
  const [error, setError] = useState("");
  const [created, setCreated] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description || !dueDate) {
      setError("قم بادخال كل البيانات");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      try {
        if (customerId !== "all") {
          const task: task = {
            id: "",
            title: title,
            description: description,
            dueDate: dueDate,
            customerId: customerId,
            status: "PENDING",
            customer: {
              id: "",
              name: "",
              email: "",
              company: "",
            },
            createdAt: "",
            updatedAt: "",
          };

          const result = await addTask(task);

          setCreated(`تمت اضافة المهمة: ${result.data.title}`);
          setTimeout(() => {
            setCreated("");
          }, 2000);

          // Clear form
          setTitle("");
          setDescription("");
          setDueDate("");
        } else {
          setError("الرجاء اختيار احد العملاء");
          setTimeout(() => {
            setError("");
          }, 2000);
        }
      } catch (error) {
        setError(` ${error}حدث خطأ أثناء إضافة المهمة`);
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="text-center w-full sm:w-100 flex flex-col"
      >
        <div>
          <select
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            className="cursor-pointer appearance-none rounded-md bg-[#eef2fc] px-4 py-3 pr-10 text-sm font-medium text-[#172033] outline-none transition-colors hover:bg-[#e5ebfa] focus:ring-2 focus:ring-[#d5def3] w-full mt-5"
          >
            <option value="all">اختر احد العملاء</option>
            {customers.map((customer: customer) => {
              return (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              );
            })}
          </select>
        </div>

        <input
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none "
          type="text"
          placeholder="عنوان المهمة"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="p-3 my-2 w-full h-20 resize-none  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none "
          placeholder="وصف المهمة"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none "
          type="date"
          placeholder="تاريخ الأنتهاء"
          onChange={(e) => {
            setDueDate(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-full h-full py-3 px-5 bg-[#141C2B] text-white font-bold cursor-pointer"
        >
          اضافة
        </button>
        <p className="mt-5 text-red-500">{error}</p>
        <p className="mt-5 text-green-800">{created}</p>
      </form>
    </div>
  );
};

export default TaskForm;
