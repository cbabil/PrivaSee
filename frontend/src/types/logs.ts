export interface SystemLog {
  id: string;
  timestamp: string;
  level: 'INFO' | 'DEBUG' | 'WARNING' | 'ERROR';
  message: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  action: string;
  user: string;
}

export type LogType = 'system' | 'audit';