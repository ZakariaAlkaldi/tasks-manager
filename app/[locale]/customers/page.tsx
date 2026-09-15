import CustomersContent from "../components/CustomersContent";
import PageTitle from "../components/PageTitle";
import { getAllCustomers } from "../services/customer.service";
import { customer } from "../types/customer";
import { getTranslations } from "next-intl/server";

const CustomersPage = async () => {
  const t = await getTranslations("Customers");
  const customers: customer[] = await getAllCustomers();

  return (
    <section className="w-full">
      <PageTitle title={t("pageTitle")} />
      <CustomersContent customers={customers} />
    </section>
  );
};

export default CustomersPage;
