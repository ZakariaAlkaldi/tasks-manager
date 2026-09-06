import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <aside className="w-[20%] h-screen flex flex-col gap-6 text-[#ffffff] p-10 bg-[#141C2B]">
      <h2 className="text-3xl font-extrabold border-b border-[#374151] pb-6">
        نظام ادارة العملاء
      </h2>
      <ul className="flex flex-col gap-3">
        <Link href={"/"}>
          <li className="text-2xl font-light cursor-pointer hover:bg-[#374151] w-full hover:rounded-sm py-[5px] px-[10px]">
            لوحة التحكم
          </li>
        </Link>
        <Link href={"/customers"}>
          <li className="text-2xl font-light cursor-pointer hover:bg-[#374151] w-full hover:rounded-sm py-[5px] px-[10px]">
            العملاء
          </li>
        </Link>
        <Link href={"/tasks"}>
          <li className="text-2xl font-light cursor-pointer hover:bg-[#374151] w-full hover:rounded-sm py-[5px] px-[10px]">
            المهام
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default SideBar;
