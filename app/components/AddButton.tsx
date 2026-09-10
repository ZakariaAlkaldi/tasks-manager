import Link from "next/link";

const AddButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      className="w-fit h-full py-3 px-5 bg-[#141C2B] text-white font-bold cursor-pointer"
    >
      {text}
    </Link>
  );
};

export default AddButton;
