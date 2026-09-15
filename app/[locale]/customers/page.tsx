import CustomersContent from "../components/CustomersContent";
import PageTitle from "../components/PageTitle";
import { getAllCustomers } from "../services/customer.service";
import { customer } from "../types/customer";

const CustomersPage = async () => {
  const customers: customer[] = await getAllCustomers();

  return (
    <section className="w-full">
      <PageTitle title="قائمة العملاء" />
      <CustomersContent customers={customers} />
    </section>
  );
};

export default CustomersPage;
