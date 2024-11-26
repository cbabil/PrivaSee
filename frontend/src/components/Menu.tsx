import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Network,
  Laptop2,
  ScrollText,
  Settings
} from 'lucide-react';
import { cn } from '../utils/cn';

interface MenuProps {
  setMenuTitle: (title: string) => void;
}

const mainMenuItems = [
  { 
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard
  },
  { 
    title: "Topology",
    path: "/topology",
    icon: Network
  },
  { 
    title: "Devices",
    path: "/devices",
    icon: Laptop2
  }
];

const bottomMenuItems = [
  {
    title: "System Log",
    path: "/logs",
    icon: ScrollText
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings
  }
];

const Menu: React.FC<MenuProps> = ({ setMenuTitle }) => {
  const renderMenuItem = (item: typeof mainMenuItems[0]) => {
    const Icon = item.icon;
    return (
      <NavLink
        key={item.title}
        to={item.path}
        onClick={() => setMenuTitle(item.title)}
        className={({ isActive }) =>
          cn(
            'group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors',
            isActive
              ? 'bg-primary-500/10 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700/50'
          )
        }
      >
        <Icon className="flex-shrink-0 w-5 h-5 mr-3" />
        <span>{item.title}</span>
      </NavLink>
    );
  };

  return (
    <nav className="flex flex-col h-full">
      <div className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {mainMenuItems.map(renderMenuItem)}
        </div>
      </div>
      <div className="px-3 py-4 border-t border-gray-200 dark:border-dark-700">
        {bottomMenuItems.map(renderMenuItem)}
      </div>
    </nav>
  );
};

export default Menu;