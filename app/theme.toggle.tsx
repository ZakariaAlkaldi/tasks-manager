"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-3">
      <button
        className="w-fit py-2 px-8 rounded-lg text-md text-[#141c2b] dark:text-white border-2 border-[#141c2b] dark:bg-[#0F1E35] bg-white  cursor-pointer"
        onClick={() => setTheme("light")}
      >
        فاتح
      </button>
      <button
        className="w-fit py-2 px-8 rounded-lg text-md text-[#141c2b] dark:text-white border-2 border-[#141c2b] bg-white dark:bg-[#0F1E35] cursor-pointer"
        onClick={() => setTheme("dark")}
      >
        ليلي
      </button>
    </div>
  );
}
