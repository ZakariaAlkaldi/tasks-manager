import CustomersTable from "../components/CustomersTable";
import SearchForm from "../components/SearchForm";

const CustomersPage = () => {
  return (
    <section className="w-full">
      <h1 className="w-full sm:w-100 pb-5 text-3xl sm:text-4xl text-[#141C2B] border-b border-[#141C2B]">
        قائمة العملاء
      </h1>

      <SearchForm placeHolder="أبحث بأسم العميل" />

      <CustomersTable />
    </section>
  );
};

export default CustomersPage;
