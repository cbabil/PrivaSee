import React, { useState, useEffect } from 'react';
import { Loader2, Download, ChevronDown } from 'lucide-react';
import { SystemLog, AuditLog, LogType } from '../types/logs';
import { fetchLogs, exportLogs } from '../api/logs';
import { cn } from '../utils/cn';
import Card from './Card';
import SearchInput from './SearchInput';
import toast from 'react-hot-toast';

const LogViewer: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<(SystemLog | AuditLog)[]>([]);
  const [logType, setLogType] = useState<LogType>('system');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({
    key: 'timestamp',
    direction: 'desc'
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const itemsPerPage = 15;

  useEffect(() => {
    const loadLogs = async () => {
      try {
        setLoading(true);
        const data = await fetchLogs(logType);
        setLogs(data);
        setCurrentPage(1);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : 'Failed to load logs');
      } finally {
        setLoading(false);
      }
    };

    loadLogs();
  }, [logType]);

  const handleExport = async () => {
    try {
      await exportLogs(logType, 'csv');
      toast.success('Logs exported successfully');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to export logs');
    }
  };

  const handleSort = (key: string) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const filteredLogs = logs
    .filter(log => {
      const searchableContent = logType === 'system'
        ? `${(log as SystemLog).level} ${(log as SystemLog).message}`
        : `${(log as AuditLog).action} ${(log as AuditLog).user}`;
      return searchableContent.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      const aValue = a[sortConfig.key as keyof typeof a];
      const bValue = b[sortConfig.key as keyof typeof b];
      const direction = sortConfig.direction === 'asc' ? 1 : -1;
      return aValue < bValue ? -direction : direction;
    });

  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
  const currentLogs = filteredLogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getLogLevelColor = (level: string) => {
    switch (level) {
      case 'ERROR':
        return 'text-red-500 dark:text-red-400';
      case 'WARNING':
        return 'text-yellow-500 dark:text-yellow-400';
      case 'INFO':
        return 'text-blue-500 dark:text-blue-400';
      case 'DEBUG':
        return 'text-gray-500 dark:text-gray-400';
      default:
        return 'text-gray-700 dark:text-gray-300';
    }
  };

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
    <Card
      content={
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <SearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder={`Search ${logType} logs...`}
              className="flex-1"
            />
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700"
              >
                {logType === 'system' ? 'System Logs' : 'Audit Logs'}
                <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-dark-800 rounded-lg shadow-lg border border-gray-200 dark:border-dark-700 z-10">
                  <button
                    onClick={() => {
                      setLogType('system');
                      setDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-dark-700 rounded-t-lg"
                  >
                    System Logs
                  </button>
                  <button
                    onClick={() => {
                      setLogType('audit');
                      setDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-dark-700 rounded-b-lg"
                  >
                    Audit Logs
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('timestamp')}
                  >
                    Timestamp
                  </th>
                  {logType === 'system' ? (
                    <>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                        onClick={() => handleSort('level')}
                      >
                        Level
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      >
                        Message
                      </th>
                    </>
                  ) : (
                    <>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                        onClick={() => handleSort('action')}
                      >
                        Action
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
                        onClick={() => handleSort('user')}
                      >
                        User
                      </th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-gray-700">
                {currentLogs.map((log) => (
                  <tr key={log.id}>
                    <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {log.timestamp}
                    </td>
                    {logType === 'system' ? (
                      <>
                        <td className="px-3 py-4 whitespace-nowrap text-sm">
                          <span className={cn('font-medium', getLogLevelColor((log as SystemLog).level))}>
                            {(log as SystemLog).level}
                          </span>
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-900 dark:text-white">
                          {(log as SystemLog).message}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {(log as AuditLog).action}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {(log as AuditLog).user}
                        </td>
                      </>
                    )}
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
                    {Math.min(currentPage * itemsPerPage, filteredLogs.length)}
                  </span>{' '}
                  of <span className="font-medium">{filteredLogs.length}</span> results
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
  );
};

export default LogViewer;