import Link from "next/link";

type customerProps = {
  id: string;
  name: string;
  email: string;
  company: string;
  display: (id: string) => void;
};

const Customer = ({ id, name, email, company, display }: customerProps) => {
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
        <button
          onClick={() => {
            display(id);
          }}
          className="py-1 px-2 mr-2 bg-[#f44336] text-white rounded-sm cursor-pointer"
        >
          حذف
        </button>
      </td>
    </tr>
  );
};

export default Customer;
