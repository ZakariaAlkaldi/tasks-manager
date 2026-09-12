import PageTitle from "../components/PageTitle";
import TasksContent from "../components/TasksContent";

const url = process.env.NEXT_PUBLIC_URL;

const TasksPage = async () => {
  const response = await fetch(`${url}/tasks`);
  const data = await response.json();

  const tasks = data.data;

  return (
    <section className="w-full">
      <PageTitle title="قائمة المهام" />
      <TasksContent tasks={tasks} />
    </section>
  );
};

export default TasksPage;
