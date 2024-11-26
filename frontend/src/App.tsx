import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import { useTheme } from './context/ThemeContext';

const AppContent: React.FC = () => {
  const [menuTitle, setMenuTitle] = useState("Dashboard");
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <Sidebar setMenuTitle={setMenuTitle} />
      <main className="ml-48">
        <Dashboard menuTitle={menuTitle} />
      </main>
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: isDarkMode ? '#1f2937' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#000000',
            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
          },
        }}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;