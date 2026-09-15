import PageTitle from "../../components/PageTitle";
import UpdateCustomerForm from "../../components/UpdateCustomerForm";
import { getCutomerById } from "../../services/customer.service";
import { customer } from "../../types/customer";

type props = {
  params: Promise<{ id: string }>;
};

const UpdateCustomer = async ({ params }: props) => {
  const { id } = await params;

  const customer: customer = await getCutomerById(id);

  return (
    <section>
      <PageTitle title={`تعديل بيانات ${customer.name}`}></PageTitle>
      <UpdateCustomerForm customer={customer} />
    </section>
  );
};

export default UpdateCustomer;
