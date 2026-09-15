"use client";
import PageTitle from "../../components/PageTitle";
import { addCustomer } from "../../services/customer.service";
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
          id: "",
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
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] dark:bg-[#0F1E35] text-[#334155] dark:text-white placeholder:text-[#64748B] sm:placeholder:text-xl outline-none dark:border dark:border-[#1D3858]"
          type="text"
          placeholder="أسم العميل"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] dark:bg-[#0F1E35] text-[#334155] dark:text-white placeholder:text-[#64748B] sm:placeholder:text-xl outline-none dark:border dark:border-[#1D3858]"
          type="email"
          placeholder="عنوان البريد"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] dark:bg-[#0F1E35] text-[#334155] dark:text-white placeholder:text-[#64748B] sm:placeholder:text-xl outline-none dark:border dark:border-[#1D3858]"
          type="text"
          placeholder="الشركة"
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-full h-full py-3 px-5 bg-[#141C2B] dark:bg-[#113E80] text-white font-bold cursor-pointer"
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
