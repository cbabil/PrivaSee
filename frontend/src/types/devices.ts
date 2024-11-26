export interface Device {
  id: string;
  name: string;
  vendor: string;
  status: 'Online' | 'Offline';
  ipAddress: string;
  macAddress: string;
  uptime: string;
}