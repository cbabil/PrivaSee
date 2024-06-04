import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import '../styles/Header.css';

interface HeaderProps {
  menuTitle: string;
}

const Header: React.FC<HeaderProps> = ({ menuTitle }) => {
  const notificationCount = 5; // Replace with your dynamic notification count

  return (
    <header className="header">
      <div className="header-left">
        {menuTitle}
      </div>
      <div className="header-right">
        <NotificationsIcon className="notification" />
        {notificationCount > 0 && (
            <span className="notification-badge">{notificationCount}</span>
          )}
      </div>
    </header>
  );
};

export default Header;
