"use client";
import PageTitle from "@/app/components/PageTitle";
import { addCustomer } from "@/app/libs/addCustomer";
import { useState } from "react";

const AddCustomer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");
  const [created, setCreated] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !company) {
      setError("قم بادخال كل البيانات");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      if (!email.endsWith(".com") || !email.includes("@")) {
        setError("الرجاء كتابة البريد بالشكل الصحيح");
        setTimeout(() => {
          setError("");
        }, 2000);
      } else {
        const customer = {
          name: name,
          email: email,
          company: company,
        };
        try {
          const result = await addCustomer(customer);

          setCreated(`تمت اضافة العميل: ${result.data.name}`);
          setTimeout(() => {
            setCreated("");
          }, 2000);

          // Clear form
          setName("");
          setEmail("");
          setCompany("");
        } catch (error) {
          setError(` ${error}حدث خطأ أثناء إضافة العميل`);
          setTimeout(() => {
            setError("");
          }, 2000);
        }
      }
    }
  };

  return (
    <div>
      <PageTitle title="أضافة عميل"></PageTitle>
      <form
        onSubmit={handleSubmit}
        className="text-center w-full sm:w-100 flex flex-col"
      >
        <input
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none "
          type="text"
          placeholder="أسم العميل"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none "
          type="email"
          placeholder="عنوان البريد"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none "
          type="text"
          placeholder="الشركة"
          onChange={(e) => {
            setCompany(e.target.value);
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

export default AddCustomer;
