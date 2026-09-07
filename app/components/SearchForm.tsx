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
        className="p-3 my-6  sm:w-100 bg-[#EEF2FF] text-[#334155] placeholder:text-[#64748B] sm:placeholder:text-xl outline-none "
        onChange={(e) => {
          onSearchChanges(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchForm;
