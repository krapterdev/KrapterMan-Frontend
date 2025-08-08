import { useEffect, useState } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser } from '../api/user.api';
import UserForm from './UserForm';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const loadUsers = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleCreate = async (data: { name: string; email: string }) => {
    await createUser(data);
    loadUsers();
  };

  const handleUpdate = async (data: { name: string; email: string }) => {
    if (editingUser) {
      await updateUser(editingUser.id, data);
      setEditingUser(null);
      loadUsers();
    }
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">{editingUser ? 'Edit User' : 'Add User'}</h2>
      <UserForm
        onSubmit={editingUser ? handleUpdate : handleCreate}
        initialData={editingUser || undefined}
      />

      <h2 className="text-xl font-semibold mt-8 mb-4">User List</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center bg-gray-100 p-3 rounded">
            <span>{user.name} ({user.email})</span>
            <div className="space-x-2">
              <button
                onClick={() => setEditingUser(user)}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
