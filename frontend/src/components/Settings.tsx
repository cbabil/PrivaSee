import React from 'react';
import Card from './Card';
import SettingsLayout from './settings/SettingsLayout';

const Settings: React.FC = () => {
  return (
    <Card
      content={<SettingsLayout />}
    />
  );
};

export default Settings;