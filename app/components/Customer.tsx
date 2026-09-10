import Link from "next/link";
import { customer } from "../types/customer";

const Customer = ({ id, name, email, company }: customer) => {
  return (
    <tr className="text-[#141C2B] sm:text-xl ">
      <td className="p-2">{name}</td>
      <td className="p-2">{email}</td>
      <td className="p-2">{company}</td>
      <td className="p-2">
        <Link
          href={`../customers/${id}`}
          className="py-1 px-2 bg-[#5F75B2] text-white rounded-sm cursor-pointer"
        >
          تعديل
        </Link>
      </td>
    </tr>
  );
};

export default Customer;
