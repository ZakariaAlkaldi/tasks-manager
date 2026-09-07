type customerType = {
  id: number;
  name: string;
  email: string;
  company: string;
};

const Customer = ({ id, name, email, company }: customerType) => {
  return (
    <tr className="text-[#141C2B] sm:text-xl ">
      <td className="p-2">{name}</td>
      <td className="p-2">{email}</td>
      <td className="p-2">{company}</td>
      <td className="p-2">
        <button className="py-1 px-2 bg-[#5F75B2] text-white rounded-sm cursor-pointer">
          تعديل
        </button>
      </td>
    </tr>
  );
};

export default Customer;
