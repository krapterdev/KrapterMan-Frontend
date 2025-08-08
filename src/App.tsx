import UserList from './components/UserList';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-6 text-blue-700">KrapterMan Users</h1>
      <UserList />
    </div>
  );
}
