import CustomersContent from "../components/CustomersContent";
import PageTitle from "../components/PageTitle";

const CustomersPage = () => {
  return (
    <section className="w-full">
      <PageTitle title="قائمة العملاء" />

      <CustomersContent />
    </section>
  );
};

export default CustomersPage;
