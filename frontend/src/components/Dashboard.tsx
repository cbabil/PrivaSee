import React from 'react';
import Header from './Header';
import Card from './Card';
import DeviceSummary from './DeviceSummary';
import Topology from './Topology';
import LogViewer from './LogViewer';
import Settings from './Settings';
import { Shield, Wifi, AlertTriangle, Activity, Cpu, Clock, Database } from 'lucide-react';

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
              <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700">
                <div className="flex flex-col gap-6">
                  <div className="p-3 bg-primary-500/10 dark:bg-primary-500/20 rounded-xl w-12 h-12 flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">24</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Connected Devices</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700">
                <div className="flex flex-col gap-6">
                  <div className="p-3 bg-green-500/10 dark:bg-green-500/20 rounded-xl w-12 h-12 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Protected</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Security Status</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700">
                <div className="flex flex-col gap-6">
                  <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl w-12 h-12 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">1.2 TB</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Network Usage</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 border border-gray-200 dark:border-dark-700">
                <div className="flex flex-col gap-6">
                  <div className="p-3 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-xl w-12 h-12 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">3</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Active Alerts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rest of the dashboard content remains unchanged */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700 p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">System Performance</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Cpu className="w-5 h-5 text-primary-500" />
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">CPU Usage</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">4 cores at 45% average</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-primary-500">45%</div>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-dark-700 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 rounded-full" style={{ width: '45%' }} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-primary-500" />
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">Memory Usage</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">12GB of 16GB used</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-primary-500">62%</div>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-dark-700 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 rounded-full" style={{ width: '62%' }} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary-500" />
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">System Uptime</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">99.9% availability</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-primary-500">15d 6h 23m</div>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-dark-700 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 rounded-full" style={{ width: '99.9%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700 p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  {[
                    { message: "New device connected: MacBook Pro", time: "2 minutes ago", type: "info" },
                    { message: "High CPU usage detected (85%)", time: "15 minutes ago", type: "warning" },
                    { message: "System update available", time: "1 hour ago", type: "info" },
                    { message: "Backup completed successfully", time: "3 hours ago", type: "success" }
                  ].map((activity, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-gray-50 dark:hover:bg-dark-700/50"
                    >
                      <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                        activity.type === 'warning' ? 'bg-yellow-500' :
                        activity.type === 'success' ? 'bg-green-500' :
                        'bg-blue-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 dark:text-white truncate">{activity.message}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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