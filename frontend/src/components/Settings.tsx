// SettingsPage.tsx

import React, { useState, useEffect } from 'react';
import PluginList from './PluginList';
import GeneralSettingsForm from './GeneralSettingsForm';
import SaveButton from './SaveButton';
import '../styles/SettingsPage.css';

const SettingsPage: React.FC = () => {
  const [plugins, setPlugins] = useState([]);
  const [generalSettings, setGeneralSettings] = useState({});

  useEffect(() => {
    // Fetch plugin data from backend
    // Set plugins state with fetched data
    // Fetch general settings from backend
    // Set general settings state with fetched data
  }, []);

  const handlePluginConfigChange = (pluginId: string, config: any) => {
    // Update plugin configuration in the backend
  };

  const handleGeneralSettingsChange = (settings: any) => {
    // Update general settings in the backend
  };

  const handleSave = () => {
    // Save changes to plugin configurations and general settings
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <div className="tabs">
        {/* Tabs or Navigation Menu */}
      </div>
      <div className="content">
        <div className="plugin-section">
          <h2>Plugins</h2>
          <PluginList plugins={plugins} onConfigChange={handlePluginConfigChange} />
        </div>
        <div className="general-settings-section">
          <h2>General Settings</h2>
          <GeneralSettingsForm settings={generalSettings} onChange={handleGeneralSettingsChange} />
        </div>
      </div>
      <SaveButton onSave={handleSave} />
    </div>
  );
};

export default SettingsPage;
