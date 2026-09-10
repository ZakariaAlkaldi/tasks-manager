const url = process.env.NEXT_PUBLIC_URL;


export async function addCustomer(customer: {
  name: string;
  email: string;
  company: string;
}) {
  const response = await fetch(`${url}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });

  const result = await response.json();

  return result;
}
