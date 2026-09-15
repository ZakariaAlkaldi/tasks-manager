import PageTitle from "../components/PageTitle";
import TasksContent from "../components/TasksContent";
import { getAllTasks } from "../services/task.service";
import { getTranslations } from "next-intl/server";

const TasksPage = async () => {
  const t = await getTranslations("Tasks");
  const tasks = await getAllTasks();

  return (
    <section className="w-full">
      <PageTitle title={t("pageTitle")} />
      <TasksContent tasks={tasks} />
    </section>
  );
};

export default TasksPage;
