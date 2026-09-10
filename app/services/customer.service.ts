import { customer } from "../types/customer";

const API_URL = process.env.NEXT_PUBLIC_URL;

export async function getCutomerById(id: string) {
  const response = await fetch(`${API_URL}/customers/${id}`);
  const data = await response.json();

  const customer: customer = await data.data;

  return customer;
}

export async function addCustomer(customer: customer) {
  if (!API_URL) {
    throw new Error("API URL is not defined");
  }

  const response = await fetch(`${API_URL}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.message || "Failed to create customer");
  }

  return response.json();
}

export async function updateCustomer(customer: customer) {
  const { id, ...updatedCustomer } = customer;
  if (!API_URL) {
    throw new Error("API URL is not defined");
  }

  const response = await fetch(`${API_URL}/customers/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCustomer),
  });

  if (!response.ok) {
    const error = await response.json();

    throw new Error(error.message || "Failed to create customer");
  }

  return response.json();
}
