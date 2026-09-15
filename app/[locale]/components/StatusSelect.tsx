"use client";

import { useState } from "react";

type statusType = {
  selected: string;
  onSelectedChange: (selected: string) => void;
};

export default function StatusSelect({
  onSelectedChange,
  selected,
}: statusType) {
  return (
    <div className="relative w-fit">
      <select
        value={selected}
        onChange={(e) => onSelectedChange(e.target.value)}
        className="cursor-pointer appearance-none rounded-md bg-[#eef2fc] px-4 py-3 pr-10 text-sm font-medium text-[#172033] outline-none transition-colors hover:bg-[#e5ebfa] focus:ring-2 focus:ring-[#d5def3] w-56 sm:w-49"
      >
        <option value="all">كل الحالات</option>
        <option value="IN_PROGRESS">قيد التنفيذ</option>
        <option value="PENDING">قيد الانتظار</option>
        <option value="COMPLETED">مكتملة</option>
      </select>

      {/* Custom arrow */}
      <svg
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#172033]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}
