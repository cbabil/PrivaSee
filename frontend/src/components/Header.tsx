import React from 'react';
import ThemeToggle from './ThemeToggle';
import Notification from './Notification';

interface HeaderProps {
  menuTitle: string;
}

const Header: React.FC<HeaderProps> = ({ menuTitle }) => {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700/50 h-16 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        {menuTitle}
      </h1>
      <div className="flex items-center gap-4">
        <Notification />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;