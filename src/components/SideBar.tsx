import React, { useState } from "react";
import {
  FolderIcon,
  CubeIcon,
  Cog6ToothIcon,
  PhotoIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ClockIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const menuItems = [
  {
    icon: FolderIcon,
    label: "Collections",
    submenu: ["My Collection", "Shared", "Archived"],
  },
  {
    icon: CubeIcon,
    label: "APIs",
    submenu: ["Create API", "Import API"],
  },
  {
    icon: Cog6ToothIcon,
    label: "Environments",
    submenu: ["Dev", "Staging", "Prod"],
  },
  {
    icon: PhotoIcon,
    label: "Mock Servers",
    submenu: ["New Mock", "Manage Mocks"],
  },
  {
    icon: ChartBarIcon,
    label: "Monitors",
    submenu: ["Run Monitor", "View Results"],
  },
  {
    icon: GlobeAltIcon,
    label: "Flows",
    submenu: ["Start Flow", "Manage Flows"],
  },
  {
    icon: ClockIcon,
    label: "History",
    submenu: ["Recent", "Archived"],
  },
];

const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <aside
      className={`${
        collapsed ? "w-16" : "w-64"
      } h-screen bg-gray-800 text-white transition-all duration-300 overflow-y-auto`}
    >
      {/* Toggle Button */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
        {!collapsed && <span className="text-lg font-bold">Menu</span>}
        <Bars3Icon
          className="h-6 w-6 cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* Menu Items */}
      <div className="mt-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isOpen = activeIndex === index;

          return (
            <div key={index}>
              {/* Menu Button */}
              <button
                onClick={() => toggleSubmenu(index)}
                className={`flex items-center w-full px-4 py-2 hover:bg-gray-700 focus:outline-none ${
                  isOpen ? "bg-gray-700" : ""
                }`}
              >
                <Icon className="h-5 w-5" />
                {!collapsed && (
                  <>
                    <span className="ml-3 flex-1 text-sm">{item.label}</span>
                    {isOpen ? (
                      <ChevronDownIcon className="h-4 w-4" />
                    ) : (
                      <ChevronRightIcon className="h-4 w-4" />
                    )}
                  </>
                )}
              </button>

              {/* Submenu */}
              {!collapsed && isOpen && (
                <div className="ml-10 mt-1 text-sm space-y-1">
                  {item.submenu.map((sub, subIdx) => (
                    <div
                      key={subIdx}
                      className="px-2 py-1 rounded hover:bg-gray-700 cursor-pointer"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
