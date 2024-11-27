import React from 'react';
import { Puzzle, Shield, Activity, Wifi, Trash2, Settings2 } from 'lucide-react';

const plugins = [
  {
    id: 'network-monitor',
    name: 'Network Monitor',
    description: 'Advanced network monitoring capabilities',
    icon: Activity,
    enabled: true,
    version: '1.2.0'
  },
  {
    id: 'security-scanner',
    name: 'Security Scanner',
    description: 'Real-time security threat detection',
    icon: Shield,
    enabled: false,
    version: '2.0.1'
  },
  {
    id: 'wifi-analyzer',
    name: 'WiFi Analyzer',
    description: 'Detailed WiFi signal analysis and optimization',
    icon: Wifi,
    enabled: true,
    version: '1.0.5'
  },
];

const PluginSettings: React.FC = () => {
  return (
    <div className="pt-8 max-w-full">
      <div className="space-y-8">
        {plugins.map((plugin) => {
          const Icon = plugin.icon;
          return (
            <div key={plugin.id} className="flex items-start gap-4 pr-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-300 truncate">{plugin.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">v{plugin.version}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 pl-7">{plugin.description}</p>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked={plugin.enabled}
                  />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
                <div className="flex items-center gap-2">
                  <button 
                    className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors group relative"
                    title="Configure plugin"
                  >
                    <Settings2 className="w-4 h-4" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-200 dark:border-gray-700">
                      Configure plugin
                    </span>
                  </button>
                  <button 
                    className="p-1 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors group relative"
                    title="Remove plugin"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-200 dark:border-gray-700">
                      Remove plugin
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
            <Puzzle className="w-4 h-4 mr-2" />
            Install New Plugin
          </button>
        </div>
      </div>
    </div>
  );
};

export default PluginSettings;