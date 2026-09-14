interface DeleteTaskPopupProps {
  title: string;
  description: string;
  onClose: () => void;
}

const SuccPopUp = ({ title, description, onClose }: DeleteTaskPopupProps) => {
  return (
    <div
      dir="rtl"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-[2px]"
    >
      {/* Popup */}
      <div className="w-full max-w-110 rounded-2xl border border-slate-200 bg-white p-7 shadow-2xl">
        {/* Close */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            X
          </button>
        </div>

        {/* Warning Icon */}
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="mt-5 text-xl font-bold text-slate-800">{title}</h2>

          {/* Description */}
          <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
        </div>
        {/* Actions */}
        <div className="mt-7 flex gap-3">
          {/* Cancel */}
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            موافق
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccPopUp;
