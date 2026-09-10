import CustomersContent from "../components/CustomersContent";
import PageTitle from "../components/PageTitle";

const url = process.env.NEXT_PUBLIC_URL;
const CustomersPage = async () => {
  const response = await fetch(`${url}/customers`);
  const data = await response.json();

  const customers = data.data;

  return (
    <section className="w-full">
      <PageTitle title="قائمة العملاء" />
      <CustomersContent customers={customers} />
    </section>
  );
};

export default CustomersPage;
