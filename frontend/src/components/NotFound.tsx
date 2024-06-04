// NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/404.css';

const NotFound: React.FC = () => {
  const renderContent = () => {
    return (
      <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
    );
  };
  return (
    <div className="site-body">
        {renderContent()}
      </div>
  );
};

export default NotFound;
