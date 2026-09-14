"use client";
type searchType = {
  placeHolder: string;
  onSearchChanges: (search: string) => void;
};
const SearchForm = ({ placeHolder, onSearchChanges }: searchType) => {
  return (
    <form>
      <input
        type="text"
        placeholder={placeHolder}
        className="p-3 my-6  sm:w-100 bg-[#EEF2FF] dark:bg-[#0F1E35] text-[#334155] dark:text-white placeholder:text-[#64748B] sm:placeholder:text-xl outline-none dark:border dark:border-[#1D3858]"
        onChange={(e) => {
          onSearchChanges(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchForm;
