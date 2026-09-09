import Link from "next/link";
import React from "react";

const AddButton = ({ text }: { text: string }) => {
  return (
    <Link href={"/app/addCustomer"}>
      <button className="w-fit h-full py-3 px-5 bg-[#141C2B] text-white font-bold cursor-pointer">
        {text}
      </button>
    </Link>
  );
};

export default AddButton;
