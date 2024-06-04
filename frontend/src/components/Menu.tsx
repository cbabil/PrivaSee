import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HubIcon from '@mui/icons-material/Hub';
import DevicesIcon from '@mui/icons-material/Devices';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import '../styles/Menu.css';

interface MenuProps {
  setMenuTitle: (title: string) => void;
}

const menuItems = [
  { title: "Dashboard", path: "/", icon: <DashboardIcon /> },
  { title: "Topology", path: "/topology", icon: <HubIcon /> },
  { title: "Devices", path: "/devices", icon: <DevicesIcon /> },
  { title: "System Log", path: "/logs", icon: <ArticleIcon /> },
  { title: "Settings", path: "/settings", icon: <SettingsIcon /> },
];

const Menu: React.FC<MenuProps> = ({ setMenuTitle }) => {
  return (
    <nav className="navigation">
      <ul>
        {menuItems.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuTitle(item.title)}
            >
              {item.icon}
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

