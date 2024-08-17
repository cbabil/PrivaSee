import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import './styles/App.css';

const App: React.FC = () => {
  const [menuTitle, setMenuTitle] = useState("Dashboard");
  return (
    <Router>
      <div className="app">
        <Sidebar setMenuTitle={setMenuTitle} />
        <Routes>
          <Route path="/" element={<Dashboard menuTitle={menuTitle} />} />
          <Route path="/topology" element={<Dashboard menuTitle={menuTitle} />} />
          <Route path="/devices" element={<Dashboard menuTitle={menuTitle} />} />
          <Route path="/logs" element={<Dashboard menuTitle={menuTitle} />} />
          <Route path="/settings" element={<Dashboard menuTitle={menuTitle} />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<NotFound />} /> {/* This will handle unknown paths */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
