import { task } from "../types/task";

const API_URL = process.env.NEXT_PUBLIC_URL;

export async function getAllTasks() {
  const response = await fetch(`${API_URL}/tasks`);

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.message || "Failed to Fetch Tasks");
  }

  const data = await response.json();

  return data.data;
}

export async function getTaskById(id: string) {
  const response = await fetch(`${API_URL}/tasks/${id}`);

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.message || "Failed to Fetch Task");
  }

  const data = await response.json();

  const task: task = await data.data;

  return task;
}

export async function addTask(task: task) {
  const { id, customer, createdAt, updatedAt, ...newTask } = task;

  if (!API_URL) {
    throw new Error("API URL is not defined");
  }

  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.message || "Failed to create customer");
  }

  return response.json();
}

export async function updateTask(id: string, status: string) {
  const updatedTask = {
    status: status,
  };

  if (!API_URL) {
    throw new Error("API URL is not defined");
  }

  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.message || "Failed to Update Task");
  }

  return response.json();
}

export async function deleteTask(id: string) {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
}
