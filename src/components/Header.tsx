import React from "react";
import {
  Bars3Icon,
  HomeIcon,
  FolderIcon,
  GlobeAltIcon,
  UserPlusIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const Header: React.FC = () => (
  <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b">
    
    {/* Left icons */}
    <div className="flex items-center space-x-2 font-semibold flex-1 min-w-0">
      <Bars3Icon className="h-1 w-2 cursor-pointer" />
      <HomeIcon className="h-1 w-2 cursor-pointer" />
      <FolderIcon className="h-1 w-2 cursor-pointer" />
      <button className="text-sm">API Network</button>
      <GlobeAltIcon className="h-1 w-2 cursor-pointer" />
    </div>

    {/* Search input */}
    <div className="flex-1 min-w-0 px-4">
      <input
        type="text"
        placeholder="Search"
        className="w-full border px-2 py-1 rounded-md"
      />
    </div>

    {/* Right actions */}
    <div className="flex items-center justify-end space-x-1 flex-1 min-w-0">
      <UserPlusIcon className="h-1 w-2 cursor-pointer" />
      <BellIcon className="h-1 w-2 cursor-pointer" />
      <Cog6ToothIcon className="h-1 w-2 cursor-pointer" />
      <div className="bg-gray-300 px-2 py-1 rounded">
        <select className="bg-gray-300 focus:outline-none text-sm">
          <option value="">Upgrade</option>
        </select>
      </div>
    </div>
  </div>
);

export default Header;
