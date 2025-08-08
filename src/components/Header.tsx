import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
 
const Header: React.FC = () => (
  <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b">
    <div className="flex space-x-4 font-semibold">
      <Bars3Icon className="h-6 w-6 text-gray-700" />
      <button>Home</button>
      <button>Workspaces</button>
      <button>API Network</button>
      <button>Explore</button>
    </div>
    <input
      type="text"
      placeholder="Search"
      className="border px-2 py-1 rounded-md flex-1 mx-4"
    />
    <div className="flex items-center space-x-2">
      <button className="bg-blue-500 text-white px-3 py-1 rounded">
        Invite
      </button>
      <button>🔔</button>
      <button>⚙️</button>
      <div className="bg-gray-300 px-3 py-1 rounded">
        <select name="" id="" className="px-3 py-1">
          <option value="">Upgrade</option>
        </select>
      </div>
      <div>&nbsp; &nbsp;</div>
    </div>
  </div>
);

export default Header;
