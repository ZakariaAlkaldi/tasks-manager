import Link from "next/link";
import Image from "next/image";

const SideBar = () => {
  return (
    <aside className="md:w-[20%] md:p-10 w-fit h-screen flex flex-col gap-6 text-[#ffffff] pt-10 bg-[#141C2B]">
      <h2 className="lg:text-3xl text-2xl lg:font-extrabold font-normal border-b border-[#374151] pb-6 md:block hidden">
        نظام ادارة العملاء
      </h2>
      <ul className="flex flex-col gap-3">
        <Link href={"/"}>
          <li className="flex gap-2 items-center lg:text-2xl text-base font-light cursor-pointer hover:bg-[#374151] w-full hover:rounded-sm py-1.25 px-2.5">
            <Image
              src={"/icons/dashboard.svg"}
              alt="dashboard"
              width={35}
              height={35}
              className="md:hidden block"
            />
            <p className="md:block hidden">لوحة التحكم</p>
          </li>
        </Link>
        <Link href={"/customers"}>
          <li className="flex gap-2 items-center lg:text-2xl text-base font-light cursor-pointer hover:bg-[#374151] w-full hover:rounded-sm py-1.25 px-2.5">
            <Image
              src={"/icons/customer.svg"}
              alt="customers"
              width={35}
              height={35}
              className="md:hidden block"
            />
            <p className="md:block hidden">العملاء</p>
          </li>
        </Link>
        <Link href={"/tasks"}>
          <li className="flex gap-2 items-center lg:text-2xl text-base font-light cursor-pointer hover:bg-[#374151] w-full hover:rounded-sm py-1.25 px-2.5">
            <Image
              src={"/icons/task.svg"}
              alt="tasks"
              width={35}
              height={35}
              className="md:hidden block"
            />
            <p className="md:block hidden">المهام</p>
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default SideBar;
