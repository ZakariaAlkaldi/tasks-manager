import { getTaskById } from "@/app/services/task.service";
import Link from "next/link";

type props = {
  params: Promise<{ id: string }>;
};
const TaskDetails = async ({ params }: props) => {
  const { id } = await params;

  const task = await getTaskById(id);

  return (
    <section>
      <header className="relative">
        <Link
          href={"../tasks"}
          className="absolute left-0 top-0 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          <span>العودة إلى المهام</span>
        </Link>

        {/* Title */}
        <div className="pr-2">
          <div className="mb-3 flex items-center gap-4">
            <h2 className="text-3xl font-bold text-[#111827]">{task.title}</h2>

            {/* Status Badge */}
            <span className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
              {task.status}
            </span>
          </div>
        </div>
      </header>
      <div className="mt-10 pb-8">
        <div className="grid grid-cols-5 gap-5 items-center">
          {/* Due Date */}
          <div className="flex items-start gap-3">
            <div>
              <p className="text-sm text-slate-500">تاريخ الاستحقاق</p>

              <p className="mt-2 font-semibold text-slate-800">
                {task.dueDate}
              </p>
            </div>
          </div>

          {/* Customer */}
          <div className="flex items-start gap-3">
            <div>
              <p className="text-sm text-slate-500">العميل</p>

              <p className="mt-2 font-semibold text-slate-800">
                {task.customer.name}
              </p>
            </div>
          </div>

          {/* Created Date */}
          <div className="flex items-start gap-3">
            <div>
              <p className="text-sm text-slate-500">تاريخ الإنشاء</p>

              <p className="mt-2 font-semibold text-slate-800">
                {task.createdAt.slice(0, 10)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl mb-5 border border-slate-200 bg-white p-8 shadow-sm">
        {/* Description */}
        <section>
          <h3 className="text-lg font-bold text-slate-800">تفاصيل المهمة</h3>
          <p className="mt-3 leading-8 text-slate-500">{task.description}</p>
        </section>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <section>
          <h3 className="text-lg font-bold text-slate-800">تغير الحالة</h3>
          <div className="mt-3 flex gap-3">
            <button className="flex items-center w-fit gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
              PENDING
            </button>

            <button className="flex items-center w-fit gap-2 rounded-full bg-[#FFFBEB] px-4 py-2 text-sm font-semibold text-[#F59E0B]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
              IN-PROGRESS
            </button>

            <button className="flex items-center w-fit gap-2 rounded-full bg-[#ECFDF5] px-4 py-2 text-sm font-semibold text-[#059669]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#059669]" />
              COMPLETED
            </button>

            <button className="flex items-center w-fit gap-2 rounded-full bg-[#a0a1a1] px-4 py-2 text-sm font-semibold text-[#353b3a]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#353b39]" />
              COMPLETED
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TaskDetails;
