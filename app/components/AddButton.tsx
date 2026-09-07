import React from "react";

const AddButton = ({ text }: { text: string }) => {
  return (
    <button className="w-fit h-full py-3 px-5 bg-[#141C2B] text-white font-bold cursor-pointer">
      {text}
    </button>
  );
};

export default AddButton;
