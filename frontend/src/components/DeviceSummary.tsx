// DeviceSummary.tsx
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Card from './Card';
import '../styles/DeviceSummary.css';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import InsightsIcon from '@mui/icons-material/Insights';

interface Device {
  name: string;
  ipAddress: string;
  macAddress: string;
  vendor: string;
  uptime: string;
}

const DeviceSummary: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [activeTab, setActiveTab] = useState<string>('overview');

  useEffect(() => {
    // Simulate an API call to fetch devices
    const fetchDevices = async () => {
      // Sample data for testing
      const sampleDevices: Device[] = [
        { name: 'Device 1', vendor: 'Vendor 1', status: 'Online', ipAddress: '192.168.1.1', macAddress: '00:11:22:33:44:55', uptime: '5d 8h 6m 37s' },
        { name: 'Device 2', vendor: 'Vendor 2', status: 'Online', ipAddress: '192.168.1.2', macAddress: '00:11:22:33:44:e5', uptime: '2d 4h 1m 37s' },
        { name: 'Device 3', vendor: 'Vendor 1', status: 'Offline', ipAddress: '192.168.1.3', macAddress: '00:11:22:23:44:e5', uptime: '1d 1h 16m 34s' },
        // Add more sample devices as needed
      ];
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setDevices(sampleDevices);
      setLoading(false);
    };

    fetchDevices();
  }, []);

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'online':
        return 'status-online';
      case 'offline':
        return 'status-offline';
      default:
        return 'status-unknown';
    }
  };

  const handleDeviceClick = (device: Device) => {
    setSelectedDevice(device);
  };

  const handleCloseCard = () => {
    setSelectedDevice(null);
  };

  const renderTable = () => (
    <div className="device-summary">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Vendor</th>
            <th>IP Address</th>
            <th>MAC Address</th>
            <th>Uptime</th>
            {/* Add more table headers for additional properties */}
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.macAddress} onClick={() => handleDeviceClick(device)}>
              <td>
                <span className={`status-ball ${getStatusClass(device.status)}`}>
                  <span className="tooltip">{device.status}</span>
                </span>
                <span onClick={() => handleDeviceClick(device)} className="clickable">{device.name}</span>
              </td>
              <td><span onClick={() => handleDeviceClick(device)} className="clickable">{device.vendor}</span></td>
              <td><span onClick={() => handleDeviceClick(device)} className="clickable">{device.ipAddress}</span></td>
              <td><span onClick={() => handleDeviceClick(device)} className="clickable">{device.macAddress}</span></td>
              <td><span onClick={() => handleDeviceClick(device)} className="clickable">{device.uptime}</span></td>
              {/* Add more table cells for additional properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <p><strong>Vendor:</strong> {selectedDevice?.vendor}</p>
            <p><strong>Status:</strong> {selectedDevice?.status}</p>
            <p><strong>IP Address:</strong> {selectedDevice?.ipAddress}</p>
            <p><strong>MAC Address:</strong> {selectedDevice?.macAddress}</p>
            <p><strong>Uptime:</strong> {selectedDevice?.uptime}</p>
          </div>
        );
      case 'insights':
        return <div>Insights content goes here.</div>;
      case 'settings':
        return <div>Settings content goes here.</div>;
      default:
        return null;
    }
  };

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <ClipLoader size={80} color={"#123abc"} loading={loading} />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="device-summary-container">
          <Card content={renderTable()} height="100%" />
          <div className={`device-details-card ${selectedDevice ? 'open' : ''}`}>
            {selectedDevice && (
              <div className="device-details-content">
                <button className="close-button" onClick={handleCloseCard}>×</button>
                <h2>{selectedDevice.name}</h2>
                <div className="tabs">
                  <div
                    className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    <InfoIcon />
                    <span>Overview</span>
                  </div>
                  <div
                    className={`tab ${activeTab === 'insights' ? 'active' : ''}`}
                    onClick={() => setActiveTab('insights')}
                  >
                    <InsightsIcon />
                    <span>Insights</span>
                  </div>
                  <div
                    className={`tab ${activeTab === 'settings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('settings')}
                  >
                    <SettingsIcon />
                    <span>Settings</span>
                  </div>
                </div>
                <div className="tab-content">
                  {renderTabContent()}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DeviceSummary;
