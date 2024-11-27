import React from 'react';
import { Cloud, Download, Upload, Trash2 } from 'lucide-react';

const BackupSettings: React.FC = () => {
  return (
    <div className="pt-4">
      <div className="space-y-6">
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
          <Cloud className="w-4 h-4 mr-2" />
          Create New Backup
        </button>

        <div className="grid grid-cols-[200px,1fr] gap-x-8 gap-y-8 items-start">
          <div className="flex items-center gap-8 col-span-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 w-[200px]">
              Frequency
            </label>
            <select className="w-64 pl-3 pr-10 py-2 text-sm text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="autoBackup"
                defaultChecked={true}
                className="w-4 h-4 text-primary-600 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 rounded focus:ring-primary-500 dark:focus:ring-primary-600"
              />
              <label 
                htmlFor="autoBackup" 
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Automatic Backup
              </label>
            </div>
          </div>

          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Restore Backup
          </label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-lg cursor-pointer bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">
                <div className="flex flex-col items-center justify-center pt-4 pb-4">
                  <Upload className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                </div>
                <input type="file" className="hidden" accept=".bak" />
              </label>
            </div>
          </div>

          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Backup History
          </label>
          <div className="space-y-2">
            {[
              { date: '2024-02-16 10:30:00', size: '2.5 MB' },
              { date: '2024-02-15 15:45:00', size: '2.3 MB' },
              { date: '2024-02-14 09:15:00', size: '2.4 MB' },
            ].map((backup, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Cloud className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Backup {index + 1}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {backup.date} • {backup.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors group relative"
                    title="Download backup"
                  >
                    <Download className="w-4 h-4" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-200 dark:border-gray-700">
                      Download backup
                    </span>
                  </button>
                  <button 
                    className="p-1 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors group relative"
                    title="Delete backup"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-200 dark:border-gray-700">
                      Delete backup
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackupSettings;