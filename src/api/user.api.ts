const BASE_URL = 'http://localhost:2226/api/users';

export async function fetchUsers() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function createUser(data: { name: string; email: string }) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateUser(id: number, data: { name: string; email: string }) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteUser(id: number) {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
}
