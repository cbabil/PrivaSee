import React from 'react';
import Notification from './Notification';
import '../styles/Header.css';

interface HeaderProps {
  menuTitle: string;
}

const Header: React.FC<HeaderProps> = ({ menuTitle }) => {
  return (
    <header className="header">
      <div className="header-left">
        {menuTitle}
      </div>
      <div className="header-right">
        <Notification />
      </div>
    </header>
  );
};

export default Header;
