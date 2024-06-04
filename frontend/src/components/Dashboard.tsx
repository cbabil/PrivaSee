// Dashboard.tsx
import React from 'react';
import Card from './Card';
import Header from './Header';
import DeviceSummary from './DeviceSummary';
import Topology from './Topology';
import NotFound from './NotFound';
import '../styles/Dashboard.css';

interface DashboardProps {
  menuTitle: string;
}

const Dashboard: React.FC<DashboardProps> = ({ menuTitle }) => {
  const renderContent = () => {
    switch (menuTitle) {
      case 'Dashboard':
        return (
          <>
            <div className="row" style={{ height: 'auto' }}>
              <Card 
                title="First Card"
                content="First Card Content"
                height="150px"
              />
              <Card
                title="Second Card"
                content="Second Card Content"
                height="150px"
              />
              <Card
                title="Third Card"
                content="Third Card Content"
                height="150px"
              />
            </div>
            <div className="row" style={{ height: 'auto' }}>
                <Card title="Title 1" content="Content 1" />
                <Card title="Title 2" content="Content 2" />
                <Card title="Title 3" content="Content 3" />
            </div>
            {/* 
            <div className="row">
              <Chart />
            </div>
            */}
          </>
        );
      case 'Devices':
        return (
          <div className="row" style={{ height: '90%' }}>
            <DeviceSummary />
          </div>
        );
      case 'Topology':
        return (
          <div className="row" style={{ height: '90%' }}>
            <Topology />
          </div>
        );
      case 'Events':
        return (
          <div className="row" style={{ height: 'auto' }}>
            <h2>Events Content</h2>
          </div>
        );
      case 'Settings':
        return (
          <div className="row" style={{ height: 'auto' }}>
            <h2>Settings Content</h2>
          </div>
        );
      default:
        return (
          <div className="row" style={{ height: 'auto' }}>
            <h2>Events Content</h2>
          </div>
        );
    }
  };

  return (
    <div className="main-layout">
      <Header menuTitle={menuTitle} />
      <div className="site-body">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
