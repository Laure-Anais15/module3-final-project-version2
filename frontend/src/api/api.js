const API_URL = "http://localhost:8080/api";

export async function checkHealth() {
  const res = await fetch(`${API_URL}/health`);
  return res.json();
}

export async function getItems(search = "", page = 1, pageSize = 5) {
  const url = `${API_URL}/items?search=${search}&page=${page}&pageSize=${pageSize}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Erreur lors du chargement des items");
  return res.json();
}

export async function getItem(id) {
  const res = await fetch(`${API_URL}/items/${id}`);
  if (!res.ok) throw new Error("Item not found");
  return res.json();
}

export async function createItem(item) {
  const res = await fetch(`${API_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!res.ok) throw new Error("Error during creation");
  return res.json();
}

export async function updateItem(id, item) {
  const res = await fetch(`${API_URL}/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!res.ok) throw new Error("Error during update");
  return res.json();
}

export async function deleteItem(id) {
  const res = await fetch(`${API_URL}/items/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error during deletion");
}
