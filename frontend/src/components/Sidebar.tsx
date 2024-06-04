import React from 'react';
import Menu from './Menu';
import '../styles/Sidebar.css';

const softwareName = 'PrivaSee';
const softwareVersion = 'v1.0.0';

const Sidebar: React.FC<SidebarProps> = ({ setMenuTitle }) => {

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="logo">
          <img src="src/assets/images/logo.png" alt="PRIVASEE" width="139" height="40" />
        </div>
        <Menu setMenuTitle={setMenuTitle} />
        <div className="software-info">
        {softwareName} {softwareVersion}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;