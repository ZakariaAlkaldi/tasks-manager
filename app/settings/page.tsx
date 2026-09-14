import React from "react";
import PageTitle from "../components/PageTitle";
import { ThemeToggle } from "../theme.toggle";

const Settings = () => {
  return (
    <section className="transition-all duration-300">
      <PageTitle title="صفحة الاعدادات" />
      <section>
        <h3 className="my-5 text-xl text-[#141c2b] dark:text-white font-bold">
          أختر الوضع
        </h3>

        <ThemeToggle />
      </section>
      <section>
        <h3 className="my-5 text-xl text-[#141c2b] dark:text-white font-bold">
          أختر اللغة
        </h3>
        <div className="flex gap-3">
          <button className="px-8 py-2 text-[#141c2b] dark:text-white text-md  rounded-[10px] border-2 border-[#141c2b] dark:border-white font-bold cursor-pointer">
            عربي
          </button>
          <button className="px-8 py-2 text-[#141c2b] dark:text-white text-md  rounded-[10px] border-2 border-[#141c2b] dark:border-white font-bold cursor-pointer">
            انجليزي
          </button>
        </div>
      </section>
    </section>
  );
};

export default Settings;
