import React from 'react';

const WorkspaceHeader: React.FC = () => (
  <div className="flex justify-between items-center p-3 border-b bg-white">
    <div className="text-lg font-semibold">My Workspace</div>
    <div className="space-x-2">
      <button className="bg-blue-500 text-white px-3 py-1 rounded">New</button>
      <button className="border px-3 py-1 rounded">Import</button>
    </div>
  </div>
);

export default WorkspaceHeader;
