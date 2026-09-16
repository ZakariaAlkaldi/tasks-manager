"use client";
import { useState } from "react";
import { customer } from "../types/customer";
import { updateCustomer } from "../services/customer.service";
import { useTranslations } from "next-intl";

const UpdateCustomerForm = ({ customer }: { customer: customer }) => {
  const t = useTranslations("Forms");
  const id = customer.id;
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [company, setCompany] = useState(customer.company);
  const [error, setError] = useState("");
  const [created, setCreated] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !company) {
      setError(t("required"));
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      if (!email.endsWith(".com") || !email.includes("@")) {
        setError(t("invalidEmail"));
        setTimeout(() => {
          setError("");
        }, 2000);
      } else {
        const updatedCustomer: customer = {
          id: id,
          name: name,
          email: email,
          company: company,
        };
        try {
          const result = await updateCustomer(updatedCustomer);

          setCreated(t("customerUpdated", { name: result.data.name }));
          setTimeout(() => {
            setCreated("");
          }, 2000);

          // Clear form
          setName("");
          setEmail("");
          setCompany("");
        } catch (error) {
          setError(t("customerUpdateError", { error: String(error) }));
          setTimeout(() => {
            setError("");
          }, 2000);
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-center w-full sm:w-100 flex flex-col"
    >
      <input
        className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none dark:text-white dark:bg-[#0F1E35] dark:border dark:border-[#1D3858]"
        type="text"
        defaultValue={customer.name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none dark:text-white dark:bg-[#0F1E35] dark:border dark:border-[#1D3858]"
        type="email"
        defaultValue={customer.email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none dark:text-white dark:bg-[#0F1E35] dark:border dark:border-[#1D3858]"
        type="text"
        defaultValue={customer.company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      <button
        type="submit"
        className="w-full h-full py-3 px-5 bg-[#141C2B] dark:bg-[#113E80] text-white font-bold cursor-pointer"
      >
        {t("update")}
      </button>
      <p className="mt-5 text-red-500">{error}</p>
      <p className="mt-5 text-green-800">{created}</p>
    </form>
  );
};

export default UpdateCustomerForm;
