import axios from 'axios';
import type { SystemLog, AuditLog, LogType } from '../types/logs';

const API_URL = 'http://10.0.5.2:18000/api';

export async function fetchLogs(type: LogType): Promise<SystemLog[] | AuditLog[]> {
  try {
    const response = await axios.get(`${API_URL}/logs/${type}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${type} logs:`, error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : `An unexpected error occurred while loading ${type} logs`
    );
  }
}

export async function exportLogs(type: LogType, format: 'csv' | 'json'): Promise<void> {
  try {
    const logs = await fetchLogs(type);
    let content: string;
    let mimeType: string;
    let fileExtension: string;

    if (format === 'json') {
      content = JSON.stringify(logs, null, 2);
      mimeType = 'application/json';
      fileExtension = 'json';
    } else {
      const headers = type === 'system' 
        ? ['Timestamp', 'Level', 'Message']
        : ['Timestamp', 'Action', 'User'];
      
      const rows = logs.map(log => {
        if (type === 'system') {
          const sysLog = log as SystemLog;
          return `"${sysLog.timestamp}","${sysLog.level}","${sysLog.message}"`;
        } else {
          const auditLog = log as AuditLog;
          return `"${auditLog.timestamp}","${auditLog.action}","${auditLog.user}"`;
        }
      });

      content = [headers.join(','), ...rows].join('\n');
      mimeType = 'text/csv';
      fileExtension = 'csv';
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${type}_logs.${fileExtension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error(`Error exporting ${type} logs:`, error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : `An unexpected error occurred while exporting ${type} logs`
    );
  }
}