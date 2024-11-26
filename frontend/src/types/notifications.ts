export interface Notification {
  id: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'info' | 'warning' | 'error';
  priority: 'low' | 'medium' | 'high';
  logId?: string; // Reference to the corresponding system log entry
}