import React from 'react';

const MainContent: React.FC = () => (
  <div className="flex-1 p-4 bg-white">
    <h3 className="text-green-600 font-semibold">GET Get Employees</h3>
    <div className="mt-2 border rounded-md p-4 bg-white shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">GET</span>
        <input
          type="text"
          defaultValue="localhost:8080/employees"
          className="flex-1 border px-2 py-1 rounded"
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Send</button>
      </div>
      <table className="w-full text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">KEY</th>
            <th className="border p-2">VALUE</th>
            <th className="border p-2">DESCRIPTION</th>
            <th className="border p-2">Bulk Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 text-gray-500">Key</td>
            <td className="border p-2 text-gray-500">Value</td>
            <td className="border p-2 text-gray-500">Description</td>
            <td className="border p-2 text-center text-gray-400">...</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 text-center text-gray-400">
        🚀 Click Send to get a response
      </div>
    </div>
  </div>
);

export default MainContent;
