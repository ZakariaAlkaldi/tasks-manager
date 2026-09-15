"use client";
import { useState } from "react";
import { customer } from "../types/customer";
import { task } from "../types/task";
import { addTask } from "../services/task.service";
import { useTranslations } from "next-intl";

const TaskForm = ({ customers }: { customers: customer[] }) => {
  const t = useTranslations("Forms");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [customerId, setCustomerId] = useState("all");
  const [error, setError] = useState("");
  const [created, setCreated] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description || !dueDate) {
      setError(t("required"));
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

          setCreated(t("taskAdded", { title: result.data.title }));
          setTimeout(() => {
            setCreated("");
          }, 2000);
        } else {
          setError(t("customerRequired"));
          setTimeout(() => {
            setError("");
          }, 2000);
        }
      } catch (error) {
        setError(t("taskError", { error: String(error) }));
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
        className="text-right w-full sm:w-100 flex flex-col"
      >
        <div>
          <select
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            className="cursor-pointer appearance-none rounded-md bg-[#eef2fc] px-4 py-3 pr-10 text-sm font-medium text-[#172033] outline-none transition-colors hover:bg-[#e5ebfa] focus:ring-2 focus:ring-[#d5def3] w-full mt-5"
          >
            <option value="all">{t("customerSelect")}</option>
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
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none dark:text-white dark:bg-[#0F1E35] dark:border dark:border-[#1D3858]"
          type="text"
          placeholder={t("titlePlaceholder")}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="p-3 my-2 w-full h-20 resize-none  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none dark:text-white dark:bg-[#0F1E35] dark:border dark:border-[#1D3858]"
          placeholder={t("descriptionPlaceholder")}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <label htmlFor="date">{t("dueDate")}</label>
        <input
          id="date"
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none dark:text-white dark:bg-[#0F1E35] dark:border dark:border-[#1D3858]"
          type="date"
          onChange={(e) => {
            setDueDate(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-full h-full py-3 px-5 bg-[#141C2B] dark:bg-[#113E80] text-white font-bold cursor-pointer"
        >
          {t("add")}
        </button>
        <p className="mt-5 text-red-500">{error}</p>
        <p className="mt-5 text-green-800">{created}</p>
      </form>
    </div>
  );
};

export default TaskForm;
