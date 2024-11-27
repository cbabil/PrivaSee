import React from 'react';
import { HardDrive, Clock, Database, RefreshCw } from 'lucide-react';

const MaintenanceSettings: React.FC = () => {
  return (
    <div className="pt-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <Database className="w-5 h-5 text-primary-600" />
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Database</h3>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Optimize database performance and clean up unused data</p>
          <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
            Run Optimization
          </button>
        </div>

        <div className="p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-primary-600" />
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Cache</h3>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Clear system cache to free up memory and storage space</p>
          <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
            Clear Cache
          </button>
        </div>

        <div className="p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <RefreshCw className="w-5 h-5 text-primary-600" />
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Updates</h3>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Check and install available system updates</p>
          <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
            Check Updates
          </button>
        </div>

        <div className="p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <HardDrive className="w-5 h-5 text-primary-600" />
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Storage</h3>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Analyze and clean up storage to improve performance</p>
          <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
            Analyze Storage
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceSettings;