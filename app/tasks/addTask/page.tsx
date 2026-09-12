import PageTitle from "@/app/components/PageTitle";
import TaskForm from "@/app/components/TaskForm";
import { getAllCustomers } from "@/app/services/customer.service";

const AddTask = async () => {
  const customers = await getAllCustomers();

  return (
    <div>
      <PageTitle title="أضافة مهمة"></PageTitle>
      <TaskForm customers={customers} />
    </div>
  );
};

export default AddTask;
