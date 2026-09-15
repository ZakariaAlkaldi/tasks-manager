"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const t = useTranslations("Settings");
  return (
    <div className="flex gap-3">
      <button
        className="w-fit py-2 px-8 rounded-lg text-md text-[#141c2b] dark:text-white border-2 border-[#141c2b] dark:bg-[#0F1E35] bg-white  cursor-pointer"
        onClick={() => setTheme("light")}
      >
        {t("light")}
      </button>
      <button
        className="w-fit py-2 px-8 rounded-lg text-md text-[#141c2b] dark:text-white border-2 border-[#141c2b] bg-white dark:bg-[#0F1E35] cursor-pointer"
        onClick={() => setTheme("dark")}
      >
        {t("dark")}
      </button>
    </div>
  );
}
