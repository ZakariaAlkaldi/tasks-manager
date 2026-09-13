"use client";
import { useState } from "react";
import { updateTask } from "../services/task.service";

const statuses = [
  {
    value: "PENDING",
    color: "blue",
    active: "bg-blue-600 text-white",
    inactive: "bg-blue-50 text-blue-600",
  },
  {
    value: "IN_PROGRESS",
    color: "orange",
    active: "bg-orange-600 text-white",
    inactive: "bg-orange-50 text-orange-600",
  },
  {
    value: "COMPLETED",
    color: "green",
    active: "bg-green-600 text-white",
    inactive: "bg-green-50 text-green-600",
  },
];

export default function StatusButtons({
  initialStatus,
  taskTd,
}: {
  initialStatus: string;
  taskTd: string;
}) {
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);

  return (
    <div className="mt-3 flex sm:gap-3 gap-1">
      {statuses.map((status) => {
        const isSelected = selectedStatus === status.value;

        return (
          <button
            key={status.value}
            type="button"
            onClick={async () => {
              setSelectedStatus(status.value);
              await updateTask(taskTd, status.value);
            }}
            className={`flex w-fit items-center gap-2 rounded-full sm:px-4 p-2 py-2 text-sm font-semibold cursor-pointer ${
              isSelected ? status.active : status.inactive
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                isSelected ? "bg-white" : `bg-${status.color}-600`
              }`}
            />
            {status.value}
          </button>
        );
      })}
    </div>
  );
}
