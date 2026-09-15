import PageTitle from "../../components/PageTitle";
import TaskForm from "../../components/TaskForm";
import { getAllCustomers } from "../../services/customer.service";
import { getTranslations } from "next-intl/server";

const AddTask = async () => {
  const t = await getTranslations("Tasks");
  const customers = await getAllCustomers();

  return (
    <div>
      <PageTitle title={t("addTitle")}></PageTitle>
      <TaskForm customers={customers} />
    </div>
  );
};

export default AddTask;
