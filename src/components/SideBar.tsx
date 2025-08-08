import React from 'react';

const SideBar: React.FC = () => (
  <aside className="w-16 bg-gray-200 py-4 flex flex-col items-center space-y-4">
    <button>📁</button> {/* Collections */}
    <button>📦</button> {/* APIs */}
    <button>⚙️</button> {/* Environments */}
    <button>🖼</button> {/* Mock Servers */}
    <button>📈</button> {/* Monitors */}
    <button>🌐</button> {/* Flows */}
    <button>🕓</button> {/* History */}
  </aside>
);

export default SideBar;
