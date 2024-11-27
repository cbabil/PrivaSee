import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const SystemSettings: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="pt-8">
      <div className="grid grid-cols-[200px,1fr] gap-x-8 gap-y-8 items-center">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Logging Level
        </label>
        <select className="block w-64 pl-3 pr-10 py-2 text-sm text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
          <option value="error">Error</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
          <option value="debug">Debug</option>
        </select>

        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Log Export Format
        </label>
        <select className="block w-64 pl-3 pr-10 py-2 text-sm text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
          <option value="csv">CSV</option>
          <option value="json">JSON</option>
          <option value="xml">XML</option>
        </select>

        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Log Retention
        </label>
        <select className="block w-64 pl-3 pr-10 py-2 text-sm text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
          <option value="7">7 days</option>
          <option value="14">14 days</option>
          <option value="30">30 days</option>
          <option value="60">60 days</option>
          <option value="90">90 days</option>
        </select>

        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Data Retention
        </label>
        <select className="block w-64 pl-3 pr-10 py-2 text-sm text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
          <option value="30">30 days</option>
          <option value="60">60 days</option>
          <option value="90">90 days</option>
          <option value="180">180 days</option>
          <option value="365">1 year</option>
        </select>

        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Backup Retention
        </label>
        <select className="block w-64 pl-3 pr-10 py-2 text-sm text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
          <option value="3">Last 3 backups</option>
          <option value="5">Last 5 backups</option>
          <option value="10">Last 10 backups</option>
          <option value="all">Keep all backups</option>
        </select>

        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Theme
        </label>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              !isDarkMode 
                ? 'bg-primary-600 text-white' 
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700'
            }`}
          >
            <Sun className="w-4 h-4" />
            Light
          </button>
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'bg-primary-600 text-white' 
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700'
            }`}
          >
            <Moon className="w-4 h-4" />
            Dark
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;