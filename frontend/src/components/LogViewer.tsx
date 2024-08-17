import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import Card from './Card';
import '../styles/LogViewer.css';

interface LogEntry {
  timestamp: string;
  level: string;
  message: string;
}

const LogViewer: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLogs = async () => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const sampleLogs: LogEntry[] = [
        { timestamp: 'May 10, 2023 10:15:30', level: 'INFO', message: 'Application started' },
        { timestamp: 'April 05, 2024 10:16:45', level: 'DEBUG', message: 'Connecting to database' },
        { timestamp: 'May 10, 2023 10:16:46', level: 'INFO', message: 'Database connection established' },
        { timestamp: 'May 10, 2023 10:17:30', level: 'WARNING', message: 'High CPU usage detected' },
        { timestamp: 'May 10, 2023 10:18:15', level: 'ERROR', message: 'Failed to process request: Invalid input' },
        { timestamp: 'May 10, 2023 10:19:00', level: 'INFO', message: 'User authentication successful' },
        { timestamp: 'May 10, 2023 10:20:30', level: 'DEBUG', message: 'Cache cleared' },
      ];

      setLogs(sampleLogs);
      setLoading(false);
    };

    fetchLogs();
  }, []);

  const getLogLevelClass = (level: string) => {
    switch (level.toLowerCase()) {
      case 'info':
        return 'log-info';
      case 'debug':
        return 'log-debug';
      case 'warning':
        return 'log-warning';
      case 'error':
        return 'log-error';
      default:
        return 'log-default';
    }
  };

  const renderTable = () => (
    <div className="log-summary">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date/Time</th>
            <th>Level</th>  
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index} className={getLogLevelClass(log.level)}>
              <td>{log.message}</td>
              <td>{log.timestamp}</td>
              <td>{log.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
          <p>Loading logs...</p>
        </div>
      ) : (
        <div className="log-summary-container">
          <Card content={renderTable()} height="100%" />
        </div>
      )}
    </>
  );
};

export default LogViewer;