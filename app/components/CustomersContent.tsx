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

const CustomersContent = ({ customers }: { customers: customer[] }) => {
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
          title="حذف عميل"
          description="هل أنت متأكد من حذف هذا العميل؟"
          onClose={onClose}
          onConfirm={onConfirm}
        />
      )}
      {isDeleted && (
        <SuccPopUp
          title="حذف عميل"
          description="تم حذف العميل بنجاح"
          onClose={onClose}
        />
      )}
      <div className="w-full flex items-center justify-between">
        <SearchForm
          placeHolder="أبحث بأسم العميل"
          onSearchChanges={setSearch}
        />
        <AddButton text="أضافة عميل" link="../customers/addCustomer" />
      </div>

      <table className="w-full border-collapse text-center table-auto ">
        <thead>
          <tr className="bg-[#141C2B] text-white">
            <th className="p-5 text-md sm:text-xl font-bold uppercase ">
              أسم العميل
            </th>
            <th className="p-5 text-md sm:text-xl font-bold uppercase ">
              الايميل
            </th>
            <th className="p-5 text-md sm:text-xl font-bold uppercase ">
              الشركة
            </th>
            <th className="p-5 text-md sm:text-xl font-bold uppercase ">
              الأفعال
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
