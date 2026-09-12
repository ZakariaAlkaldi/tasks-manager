import { customer } from "./customer";

// type TaskStatus = {
//   PENDING: "PENDING";
//   IN_PROGRESS: "IN_PROGRESS";
//   COMPLETED: "COMPLETED";
// };

export type task = {
  id: string; // UUID
  title: string; // Maximum 200 characters
  description: string;
  status: string; // PENDING | IN_PROGRESS | COMPLETED
  dueDate: string; // YYYY-MM-DD
  customerId: string; // Customer UUID
  customer: customer; // Related customer
  createdAt: Date;
  updatedAt: Date;
};
