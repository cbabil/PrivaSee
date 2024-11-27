import React from 'react';
import { Settings as SettingsIcon, Bell, Puzzle, Server, Cloud, Wrench } from 'lucide-react';
import { cn } from '../../utils/cn';
import GeneralSettings from './GeneralSettings';
import NotificationSettings from './NotificationSettings';
import PluginSettings from './PluginSettings';
import SystemSettings from './SystemSettings';
import MaintenanceSettings from './MaintenanceSettings';
import BackupSettings from './BackupSettings';

interface Tab {
  id: string;
  name: string;
  icon: React.ElementType;
  component: React.ComponentType;
}

const tabs: Tab[] = [
  {
    id: 'general',
    name: 'General',
    icon: SettingsIcon,
    component: GeneralSettings,
  },
  {
    id: 'notifications',
    name: 'Notifications',
    icon: Bell,
    component: NotificationSettings,
  },
  {
    id: 'plugins',
    name: 'Plugins',
    icon: Puzzle,
    component: PluginSettings,
  },
  {
    id: 'system',
    name: 'System',
    icon: Server,
    component: SystemSettings,
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    icon: Wrench,
    component: MaintenanceSettings,
  },
  {
    id: 'backup',
    name: 'Backup & Restore',
    icon: Cloud,
    component: BackupSettings,
  },
];

const SettingsLayout: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('general');
  const [hasChanges, setHasChanges] = React.useState(false);
  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || GeneralSettings;

  const handleApply = () => {
    setHasChanges(false);
  };

  const handleCancel = () => {
    setHasChanges(false);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-dark-800">
      <nav className="flex px-6 space-x-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 py-4 text-sm font-medium transition-colors relative',
                activeTab === tab.id
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.name}</span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="flex-1 px-8 min-h-0">
        <ActiveComponent />
      </div>

      <div className="flex items-center justify-end gap-4 p-6">
        <button
          onClick={handleCancel}
          className="px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleApply}
          className="px-6 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 rounded-lg transition-colors"
        >
          Apply Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsLayout;