import PageTitle from "../components/PageTitle";
import TasksContent from "../components/TasksContent";
import { getAllTasks } from "../services/task.service";

const TasksPage = async () => {
  const tasks = await getAllTasks();

  return (
    <section className="w-full">
      <PageTitle title="قائمة المهام" />
      <TasksContent tasks={tasks} />
    </section>
  );
};

export default TasksPage;
