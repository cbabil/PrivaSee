import React, { useState } from 'react';
import {
  Settings as SettingsIcon,
  Network,
  Shield,
  Bell,
  Puzzle,
  Server,
  Cloud,
  Loader2
} from 'lucide-react';
import { cn } from '../utils/cn';
import Card from './Card';
import toast from 'react-hot-toast';

interface Tab {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
}

const tabs: Tab[] = [
  {
    id: 'general',
    name: 'General',
    icon: SettingsIcon,
    description: 'Basic settings and preferences'
  },
  {
    id: 'network',
    name: 'Network',
    icon: Network,
    description: 'Network configuration and optimization'
  },
  {
    id: 'security',
    name: 'Security',
    icon: Shield,
    description: 'Security settings and policies'
  },
  {
    id: 'notifications',
    name: 'Notifications',
    icon: Bell,
    description: 'Alert and notification preferences'
  },
  {
    id: 'plugins',
    name: 'Plugins',
    icon: Puzzle,
    description: 'Plugin management and settings'
  },
  {
    id: 'system',
    name: 'System',
    icon: Server,
    description: 'System maintenance and updates'
  },
  {
    id: 'backup',
    name: 'Backup & Restore',
    icon: Cloud,
    description: 'Data backup and recovery options'
  }
];

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Settings saved successfully');
    setIsSaving(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">General Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Language
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-dark-600 rounded-md dark:bg-dark-700">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Time Zone
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-dark-600 rounded-md dark:bg-dark-700">
                  <option>UTC</option>
                  <option>EST</option>
                  <option>PST</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'network':
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Network Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  IP Configuration
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-dark-600 rounded-md dark:bg-dark-700">
                  <option>DHCP</option>
                  <option>Static IP</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  DNS Servers
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-dark-600 rounded-md dark:bg-dark-700"
                  placeholder="8.8.8.8, 8.8.4.4"
                />
              </div>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Security Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Firewall Status
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-dark-600 rounded-md dark:bg-dark-700">
                  <option>Enabled</option>
                  <option>Disabled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Security Level
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-dark-600 rounded-md dark:bg-dark-700">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Notifications
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Push Notifications
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
          </div>
        );
      case 'plugins':
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Plugin Management</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">Network Monitor</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Advanced network monitoring capabilities</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">Security Scanner</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Real-time security threat detection</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
          </div>
        );
      case 'system':
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">System Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Log Export Format
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-dark-600 rounded-md dark:bg-dark-700">
                  <option>CSV</option>
                  <option>JSON</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Log Retention Period
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-dark-600 rounded-md dark:bg-dark-700">
                  <option>30 days</option>
                  <option>60 days</option>
                  <option>90 days</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'backup':
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Backup & Restore</h2>
            <div className="space-y-4">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
                Create Backup
              </button>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Restore from Backup
                </label>
                <input
                  type="file"
                  className="mt-1 block w-full text-sm text-gray-500 dark:text-gray-400
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-medium
                    file:bg-primary-50 file:text-primary-700
                    dark:file:bg-primary-900 dark:file:text-primary-300
                    hover:file:bg-primary-100 dark:hover:file:bg-primary-800"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card
      content={
        <div className="flex h-full">
          <div className="w-64 border-r border-gray-200 dark:border-dark-700 pr-8">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                      activeTab === tab.id
                        ? 'bg-primary-500/10 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700/50'
                    )}
                  >
                    <Icon className="flex-shrink-0 -ml-1 mr-3 h-5 w-5" />
                    <span className="truncate">{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex-1 pl-8">
            <div className="h-full">
              {renderTabContent()}
            </div>
          </div>

          <div className="fixed bottom-8 right-8">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className={cn(
                'inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white',
                'bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
                'disabled:opacity-50 disabled:cursor-not-allowed'
              )}
            >
              {isSaving ? (
                <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
              ) : null}
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      }
    />
  );
};

export default Settings;