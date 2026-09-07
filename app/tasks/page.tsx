import PageTitle from "../components/PageTitle";
import TasksContent from "../components/TasksContent";

const TasksPage = () => {
  return (
    <section className="w-full">
      <PageTitle title="قائمة المهام" />
      <TasksContent />
    </section>
  );
};

export default TasksPage;
