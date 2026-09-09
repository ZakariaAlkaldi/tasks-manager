"use client";
import { useState } from "react";
import Customer from "./Customer";
import SearchForm from "./SearchForm";
import AddButton from "./AddButton";

const CustomersContent = () => {
  type customer = {
    id: number;
    name: string;
    email: string;
    company: string;
  };

  const customers: customer[] = [
    { id: 1, name: "محمد", email: "mohammed@gmail.com", company: "ABC" },
    { id: 2, name: "علي", email: "mohammed@gmail.com", company: "ABC" },
    { id: 3, name: "صالح", email: "mohammed@gmail.com", company: "ABC" },
    { id: 4, name: "أحمد", email: "mohammed@gmail.com", company: "ABC" },
  ];

  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <SearchForm
          placeHolder="أبحث بأسم العميل"
          onSearchChanges={setSearch}
        />
        <AddButton text="أضافة عميل" />
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
            ? customers.map((customer) => {
                return (
                  <Customer
                    key={customer.id}
                    id={customer.id}
                    name={customer.name}
                    email={customer.email}
                    company={customer.company}
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
                  />
                );
              })}
        </tbody>
      </table>
    </>
  );
};

export default CustomersContent;
