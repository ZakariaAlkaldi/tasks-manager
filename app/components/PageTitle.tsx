const PageTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="w-full sm:w-100 pb-5 text-3xl sm:text-4xl text-[#141C2B] border-b border-[#141C2B]">
      {title}
    </h1>
  );
};

export default PageTitle;
