import { useLocale } from "next-intl";
import DashboardContent from "../components/DashboardContent";
import { statistics } from "../types/statistics";
import { task } from "../types/task";

const API_URL = process.env.NEXT_PUBLIC_URL;

const Dashboard = async () => {
  const response = await fetch(`${API_URL}/dashboard`);
  if (!response.ok) {
    console.log("Failed to Fetch Dashboard Data");
  }
  const result = await response.json();

  const statistics: statistics = result.data["statistics"];
  const recentTasks: task[] = result.data["recentTasks"];

  return (
    <div>
      <DashboardContent statistics={statistics} recentTasks={recentTasks} />
    </div>
  );
};

export default Dashboard;
