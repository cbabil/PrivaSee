import React from 'react';
import Menu from './Menu';
import { getVersion } from '../utils/version';

interface SidebarProps {
  setMenuTitle: (title: string) => void;
}

const softwareName = 'PrivaSee';
const version = getVersion();

const Sidebar: React.FC<SidebarProps> = ({ setMenuTitle }) => {
  return (
    <div className="fixed inset-y-0 left-0 w-48 bg-white dark:bg-dark-700 flex flex-col">
      <div className="h-16 flex items-center px-4">
        <img src="/src/assets/images/logo.png" alt="PRIVASEE" className="h-8" />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Menu setMenuTitle={setMenuTitle} />
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          {softwareName} v{version}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;