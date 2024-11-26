import React from 'react';
import Menu from './Menu';

interface SidebarProps {
  setMenuTitle: (title: string) => void;
}

const softwareName = 'PrivaSee';
const softwareVersion = 'v1.0.0';

const Sidebar: React.FC<SidebarProps> = ({ setMenuTitle }) => {
  return (
    <div className="fixed inset-y-0 left-0 w-44 bg-white dark:bg-dark-700 border-r border-gray-200 dark:border-dark-600/10 flex flex-col">
      <div className="h-16 flex items-center px-4 border-b border-gray-200 dark:border-dark-600/10">
        <img src="/src/assets/images/logo.png" alt="PRIVASEE" className="h-8" />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Menu setMenuTitle={setMenuTitle} />
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-dark-600/10">
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          {softwareName} {softwareVersion}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;