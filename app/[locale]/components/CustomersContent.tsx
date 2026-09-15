"use client";
import { useState } from "react";
import Customer from "./Customer";
import SearchForm from "./SearchForm";
import AddButton from "./AddButton";
import { customer } from "../types/customer";
import PopUp from "./PopUp";
import { deleteCustomer } from "../services/customer.service";
import SuccPopUp from "./SuccPopUp";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const CustomersContent = ({ customers }: { customers: customer[] }) => {
  const t = useTranslations("Customers");
  const [search, setSearch] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [customerId, setCustomerId] = useState("");

  const router = useRouter();

  const display = (id: string) => {
    setIsDisplay(true);
    setCustomerId(id);
  };
  const onClose = () => {
    setIsDisplay(false);
    setIsDeleted(false);
  };
  const onConfirm = async () => {
    try {
      await deleteCustomer(customerId);
      setIsDisplay(false);
      router.refresh();
      setIsDeleted(true);
    } catch (e) {
      console.log(e);
    }
  };

  const filteredCustomers = customers?.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {isDisplay && (
        <PopUp
          title={t("deleteTitle")}
          description={t("deleteDescription")}
          onClose={onClose}
          onConfirm={onConfirm}
        />
      )}
      {isDeleted && (
        <SuccPopUp
          title={t("deleteTitle")}
          description={t("deletedDescription")}
          onClose={onClose}
        />
      )}
      <div className="w-full flex items-center justify-between">
        <SearchForm placeHolder={t("search")} onSearchChanges={setSearch} />
        <AddButton text={t("add")} link="../customers/addCustomer" />
      </div>

      <table className="w-full border-collapse text-center table-auto ">
        <thead>
          <tr className="bg-[#141C2B] dark:bg-[#0E1D31] text-white">
            <th className="p-5 text-md sm:text-xl font-bold uppercase ">
              {t("name")}
            </th>
            <th className="p-5 text-md sm:text-xl font-bold uppercase ">
              {t("email")}
            </th>
            <th className="p-5 text-md sm:text-xl font-bold uppercase ">
              {t("company")}
            </th>
            <th className="p-5 text-md sm:text-xl font-bold uppercase ">
              {t("actions")}
            </th>
          </tr>
        </thead>
        <tbody>
          {!filteredCustomers
            ? customers?.map((customer) => {
                return (
                  <Customer
                    key={customer.id}
                    id={customer.id}
                    name={customer.name}
                    email={customer.email}
                    company={customer.company}
                    display={display}
                  />
                );
              })
            : filteredCustomers.map((customer) => {
                return (
                  <Customer
                    key={customer.id}
                    id={customer.id}
                    name={customer.name}
                    email={customer.email}
                    company={customer.company}
                    display={display}
                  />
                );
              })}
        </tbody>
      </table>
    </>
  );
};

export default CustomersContent;
