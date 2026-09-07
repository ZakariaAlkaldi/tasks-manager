"use client";
const SearchForm = ({ placeHolder }: { placeHolder: string,  }) => {
  return (
    <form>
      <input
        type="text"
        placeholder={placeHolder}
        className="p-3 my-6 w-full sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchForm;
