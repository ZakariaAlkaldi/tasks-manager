import PageTitle from "../../components/PageTitle";
import TaskForm from "../../components/TaskForm";
import { getAllCustomers } from "../../services/customer.service";

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
