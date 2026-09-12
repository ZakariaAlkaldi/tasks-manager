"use client";
import CustomersSelect from "@/app/components/CustomersSelect";
import PageTitle from "@/app/components/PageTitle";
import { getAllCustomers } from "@/app/services/customer.service";
import { Cossette_Texte } from "next/font/google";
import { useState } from "react";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [error, setError] = useState("");
  const [created, setCreated] = useState("");

  const getCustomers = async () => {
    const customers = await getAllCustomers();

    return customers[0];
  };

  console.log(getCustomers());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description || !dueDate) {
      setError("قم بادخال كل البيانات");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      try {
        // const result = await addCustomer();

        // setCreated(`تمت اضافة العميل: ${result.data.name}`);
        setTimeout(() => {
          setCreated("");
        }, 2000);

        // Clear form
        setTitle("");
        setDescription("");
        setDueDate("");
      } catch (error) {
        setError(` ${error}حدث خطأ أثناء إضافة العميل`);
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    }
  };

  return (
    <div>
      <PageTitle title="أضافة مهمة"></PageTitle>
      <form
        onSubmit={handleSubmit}
        className="text-center w-full sm:w-100 flex flex-col"
      >
        {/* <CustomersSelect
          onSelectedChange={setCustomerId}
          selected={customerId}
          customers={getCustomers}
        /> */}
        <input
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none "
          type="text"
          placeholder="عنوان المهمة"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none "
          type="email"
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

export default AddTask;
