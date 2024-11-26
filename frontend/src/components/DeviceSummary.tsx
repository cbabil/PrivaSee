import React, { useState, useEffect } from 'react';
import { Info, Activity, Settings, X, ArrowUpDown, Loader2 } from 'lucide-react';
import { cn } from '../utils/cn';
import { Device } from '../types/devices';
import { fetchDevices } from '../api/devices';
import Card from './Card';
import SearchInput from './SearchInput';
import toast from 'react-hot-toast';

interface SortConfig {
  key: keyof Device;
  direction: 'asc' | 'desc';
}

const DeviceSummary: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [devices, setDevices] = useState<Device[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'online' | 'offline'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'name', direction: 'asc' });
  const itemsPerPage = 25;

  useEffect(() => {
    const loadDevices = async () => {
      try {
        setLoading(true);
        const data = await fetchDevices();
        setDevices(data);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : 'Failed to load devices');
      } finally {
        setLoading(false);
      }
    };

    loadDevices();
  }, []);

  const handleSort = (key: keyof Device) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleDeviceClick = (device: Device) => {
    setSelectedDevice(selectedDevice?.id === device.id ? null : device);
  };

  const handleStatusClick = (device: Device, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedDevice(selectedDevice?.id === device.id ? null : device);
  };

  const filteredDevices = devices
    .filter(device => {
      const matchesSearch = Object.values(device).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesStatus = statusFilter === 'all' || device.status.toLowerCase() === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      const direction = sortConfig.direction === 'asc' ? 1 : -1;
      return aValue < bValue ? -direction : direction;
    });

  const totalPages = Math.ceil(filteredDevices.length / itemsPerPage);
  const currentDevices = filteredDevices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <Card content={
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
        </div>
      } />
    );
  }

  return (
    <div className="relative">
      <Card
        content={
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search devices..."
                className="flex-1"
              />
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={cn(
                    'px-3 py-1 rounded-md text-sm font-medium',
                    statusFilter === 'all'
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700'
                  )}
                >
                  All
                </button>
                <button
                  onClick={() => setStatusFilter('online')}
                  className={cn(
                    'px-3 py-1 rounded-md text-sm font-medium',
                    statusFilter === 'online'
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700'
                  )}
                >
                  Online
                </button>
                <button
                  onClick={() => setStatusFilter('offline')}
                  className={cn(
                    'px-3 py-1 rounded-md text-sm font-medium',
                    statusFilter === 'offline'
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700'
                  )}
                >
                  Offline
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort('name')}>
                        Name
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort('vendor')}>
                        Vendor
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort('ipAddress')}>
                        IP Address
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort('macAddress')}>
                        MAC Address
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort('uptime')}>
                        Uptime
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {currentDevices.map((device) => (
                    <tr
                      key={device.id}
                      onClick={() => handleDeviceClick(device)}
                      className="hover:bg-gray-50 dark:hover:bg-dark-700/50 cursor-pointer"
                    >
                      <td className="px-3 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center">
                          <div
                            onClick={(e) => handleStatusClick(device, e)}
                            className={cn(
                              'h-2.5 w-2.5 rounded-full mr-2',
                              device.status === 'Online' ? 'bg-green-500' : 'bg-red-500'
                            )}
                          />
                          {device.name}
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {device.vendor}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {device.ipAddress}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {device.macAddress}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {device.uptime}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-between border-t border-gray-200 dark:border-dark-700 px-4 py-3">
                <div className="flex items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                    <span className="font-medium">
                      {Math.min(currentPage * itemsPerPage, filteredDevices.length)}
                    </span>{' '}
                    of <span className="font-medium">{filteredDevices.length}</span> results
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        }
      />

      <div
        className={cn(
          'fixed inset-y-0 right-0 w-96 bg-white dark:bg-dark-800 border-l border-gray-200 dark:border-dark-700 transform transition-transform duration-300 ease-in-out',
          selectedDevice ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {selectedDevice && (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Device Details
              </h2>
              <button
                onClick={() => setSelectedDevice(null)}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex space-x-4 p-6 border-b border-gray-200 dark:border-dark-700">
              <button
                onClick={() => setActiveTab('overview')}
                className={cn(
                  'flex items-center space-x-2 text-sm font-medium',
                  activeTab === 'overview'
                    ? 'text-primary-500'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                )}
              >
                <Info className="h-4 w-4" />
                <span>Overview</span>
              </button>
              <button
                onClick={() => setActiveTab('insights')}
                className={cn(
                  'flex items-center space-x-2 text-sm font-medium',
                  activeTab === 'insights'
                    ? 'text-primary-500'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                )}
              >
                <Activity className="h-4 w-4" />
                <span>Insights</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={cn(
                  'flex items-center space-x-2 text-sm font-medium',
                  activeTab === 'settings'
                    ? 'text-primary-500'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                )}
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Name: </span>
                    <span className="text-sm text-gray-900 dark:text-white">{selectedDevice.name}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Status: </span>
                    <span className={cn(
                      'text-sm font-medium',
                      selectedDevice.status === 'Online' ? 'text-green-500' : 'text-red-500'
                    )}>
                      {selectedDevice.status}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Vendor: </span>
                    <span className="text-sm text-gray-900 dark:text-white">{selectedDevice.vendor}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">IP Address: </span>
                    <span className="text-sm text-gray-900 dark:text-white">{selectedDevice.ipAddress}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">MAC Address: </span>
                    <span className="text-sm text-gray-900 dark:text-white">{selectedDevice.macAddress}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Uptime: </span>
                    <span className="text-sm text-gray-900 dark:text-white">{selectedDevice.uptime}</span>
                  </div>
                </div>
              )}
              {activeTab === 'insights' && (
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Device insights content
                </div>
              )}
              {activeTab === 'settings' && (
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Device settings content
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceSummary;