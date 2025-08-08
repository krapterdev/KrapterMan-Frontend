import React from 'react';

const CollectionsPanel: React.FC = () => (
  <div className="w-72 bg-gray-50 border-r p-2 overflow-y-auto">
    <h3 className="font-bold mb-2">Collections</h3>
    <ul className="text-sm space-y-1">
      <li className="text-green-600">GET Test Add New User</li>
      <li className="text-green-600">GET Test Add Student</li>
      <li className="text-green-600 bg-gray-200 p-1 rounded">GET Get Employees</li>
      <li>➕ New Request</li>
      <li className="mt-2 font-semibold">Student API Tests</li>
      <li className="text-orange-500">POST Add a student</li>
      <li className="text-blue-600">PUT Replace student</li>
      <li className="text-red-500">DEL Delete Student</li>
      {/* Add further items similarly */}
    </ul>
  </div>
);

export default CollectionsPanel;
