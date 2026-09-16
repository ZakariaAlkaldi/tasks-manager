"use client";
import PageTitle from "../../components/PageTitle";
import { addCustomer } from "../../services/customer.service";
import { useState } from "react";
import { useTranslations } from "next-intl";

const AddCustomer = () => {
  const t = useTranslations("Forms");
  const customerT = useTranslations("Customers");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
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
        const customer = {
          id: "",
          name: name,
          email: email,
          company: company,
        };
        try {
          const result = await addCustomer(customer);

          setCreated(t("customerAdded", { name: result.data.name }));
          setTimeout(() => {
            setCreated("");
          }, 2000);
        } catch (error) {
          setError(t("customerAddError", { error: String(error) }));
          setTimeout(() => {
            setError("");
          }, 2000);
        }
      }
    }
  };

  return (
    <div>
      <PageTitle title={customerT("addTitle")} />
      <form
        onSubmit={handleSubmit}
        className="text-center w-full sm:w-100 flex flex-col"
      >
        <input
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] dark:bg-[#0F1E35] text-[#334155] dark:text-white placeholder:text-[#64748B] sm:placeholder:text-xl outline-none dark:border dark:border-[#1D3858]"
          type="text"
          placeholder={t("customerName")}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] dark:bg-[#0F1E35] text-[#334155] dark:text-white placeholder:text-[#64748B] sm:placeholder:text-xl outline-none dark:border dark:border-[#1D3858]"
          type="email"
          placeholder={t("customerEmail")}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="p-3 my-2 w-full  sm:w-100 bg-[#EEF2FF] dark:bg-[#0F1E35] text-[#334155] dark:text-white placeholder:text-[#64748B] sm:placeholder:text-xl outline-none dark:border dark:border-[#1D3858]"
          type="text"
          placeholder={t("customerCompany")}
          onChange={(e) => {
            setCompany(e.target.value);
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

export default AddCustomer;
