import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SideBar = () => {
  const t = useTranslations("Navigation");
  return (
    <aside className="md:w-[20%] md:p-10 w-fit h-screen flex flex-col gap-6 text-[#ffffff] pt-10 bg-[#141C2B] dark:bg-[#091527]">
      <h2 className="lg:text-3xl text-2xl lg:font-extrabold font-normal border-b border-[#374151] pb-6 md:block hidden">
        {t("title")}
      </h2>
      <ul className="flex flex-col gap-3">
        <Link href={"/"}>
          <li className="flex gap-2 items-center lg:text-2xl text-base font-light cursor-pointer hover:bg-[#374151] active:bg-[#374151] w-full hover:rounded-sm py-1.25 px-2.5">
            <Image
              src={"/icons/dashboard.svg"}
              alt="dashboard"
              width={35}
              height={35}
              className="md:hidden block"
            />
            <p className="md:block hidden">{t("dashboard")}</p>
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
            <p className="md:block hidden">{t("customers")}</p>
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
            <p className="md:block hidden">{t("tasks")}</p>
          </li>
        </Link>
        <Link href={"/settings"}>
          <li className="flex gap-2 items-center lg:text-2xl text-base font-light cursor-pointer hover:bg-[#374151] w-full hover:rounded-sm py-1.25 px-2.5">
            <Image
              src={"/icons/task.svg"}
              alt="tasks"
              width={35}
              height={35}
              className="md:hidden block"
            />
            <p className="md:block hidden">{t("settings")}</p>
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default SideBar;
