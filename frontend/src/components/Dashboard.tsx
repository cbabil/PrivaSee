import React from 'react';
import Header from './Header';
import Card from './Card';
import DeviceSummary from './DeviceSummary';
import Topology from './Topology';
import LogViewer from './LogViewer';
import Settings from './Settings';
import { BarChart3, Shield, Wifi, AlertTriangle, Activity, Cpu, Clock, Database } from 'lucide-react';

interface DashboardProps {
  menuTitle: string;
}

const Dashboard: React.FC<DashboardProps> = ({ menuTitle }) => {
  const renderContent = () => {
    switch (menuTitle) {
      case 'Dashboard':
        return (
          <div className="space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card
                content={
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary-100/50 dark:bg-primary-900/50 rounded-xl">
                      <Wifi className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Connected Devices</div>
                      <div className="text-2xl font-semibold text-gray-900 dark:text-white">24</div>
                    </div>
                  </div>
                }
              />
              <Card
                content={
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100/50 dark:bg-green-900/50 rounded-xl">
                      <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Security Status</div>
                      <div className="text-2xl font-semibold text-gray-900 dark:text-white">Protected</div>
                    </div>
                  </div>
                }
              />
              <Card
                content={
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100/50 dark:bg-blue-900/50 rounded-xl">
                      <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Network Usage</div>
                      <div className="text-2xl font-semibold text-gray-900 dark:text-white">1.2 TB</div>
                    </div>
                  </div>
                }
              />
              <Card
                content={
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-100/50 dark:bg-yellow-900/50 rounded-xl">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Alerts</div>
                      <div className="text-2xl font-semibold text-gray-900 dark:text-white">3</div>
                    </div>
                  </div>
                }
              />
            </div>

            {/* System Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card
                title="System Performance"
                content={
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Cpu className="w-5 h-5 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">CPU Usage</div>
                          <div className="text-lg font-semibold text-gray-900 dark:text-white">45%</div>
                        </div>
                      </div>
                      <div className="w-24 h-2 bg-gray-100 dark:bg-dark-700 rounded-full overflow-hidden">
                        <div className="h-full bg-primary-500 rounded-full" style={{ width: '45%' }} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Memory Usage</div>
                          <div className="text-lg font-semibold text-gray-900 dark:text-white">62%</div>
                        </div>
                      </div>
                      <div className="w-24 h-2 bg-gray-100 dark:bg-dark-700 rounded-full overflow-hidden">
                        <div className="h-full bg-primary-500 rounded-full" style={{ width: '62%' }} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">System Uptime</div>
                          <div className="text-lg font-semibold text-gray-900 dark:text-white">15d 6h 23m</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">99.9% availability</div>
                    </div>
                  </div>
                }
              />

              <Card
                title="Recent Activity"
                content={
                  <div className="space-y-4">
                    {[
                      { message: "New device connected: MacBook Pro", time: "2 minutes ago", type: "info" },
                      { message: "High CPU usage detected (85%)", time: "15 minutes ago", type: "warning" },
                      { message: "System update available", time: "1 hour ago", type: "info" },
                      { message: "Backup completed successfully", time: "3 hours ago", type: "success" }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700/50 transition-colors">
                        <div className={`w-2 h-2 mt-2 rounded-full ${
                          activity.type === 'warning' ? 'bg-yellow-500' :
                          activity.type === 'success' ? 'bg-green-500' :
                          'bg-blue-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm text-gray-900 dark:text-white">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                }
              />
            </div>
          </div>
        );
      case 'Topology':
        return <Topology />;
      case 'Devices':
        return <DeviceSummary />;
      case 'System Log':
        return <LogViewer />;
      case 'Settings':
        return <Settings />;
      default:
        return (
          <div className="text-center text-gray-500 dark:text-gray-400">
            Content not available
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header menuTitle={menuTitle} />
      <div className="flex-1 p-6 overflow-x-hidden">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;