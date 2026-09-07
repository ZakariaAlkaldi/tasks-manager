import React from "react";
import Customer from "./Customer";

const CustomersTable = () => {
  type customer = {
    id: number;
    name: string;
    email: string;
    company: string;
  };

  const customers: customer[] = [
    { id: 1, name: "محمد", email: "mohammed@gmail.com", company: "ABC" },
    { id: 2, name: "محمد", email: "mohammed@gmail.com", company: "ABC" },
    { id: 3, name: "محمد", email: "mohammed@gmail.com", company: "ABC" },
    { id: 4, name: "محمد", email: "mohammed@gmail.com", company: "ABC" },
  ];
  return (
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
        {customers.map((customer) => {
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
  );
};

export default CustomersTable;
