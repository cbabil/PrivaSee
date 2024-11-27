import React from 'react';
import { Shield, RefreshCw, Laptop } from 'lucide-react';

const notifications = [
  {
    id: 'security',
    icon: Shield,
    title: 'Security Alerts',
    description: 'Get notified about potential security threats and unauthorized access attempts to your network'
  },
  {
    id: 'system',
    icon: RefreshCw,
    title: 'System Updates',
    description: 'Receive alerts when system updates are available or maintenance is required'
  },
  {
    id: 'device',
    icon: Laptop,
    title: 'Device Connections',
    description: 'Be informed when new devices connect or disconnect from your network'
  }
];

const NotificationSettings: React.FC = () => {
  return (
    <div className="pt-8">
      <div className="space-y-8">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div key={notification.id} className="flex items-start justify-between gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-300">{notification.title}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 pl-7 max-w-xl">{notification.description}</p>
              </div>
              <div className="-mr-4">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationSettings;