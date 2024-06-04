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
                title="Your Last Report"
                content="Done on May 06"
                height="150px"
              />
              <Card
                title="Your Subscription"
                content="Standard Protection, Renewal on May 06, 2025"
                height="150px"
              />
              <Card
                title="Tip for You"
                content="Take back control of your social media. Review the privacy settings on all of your social media accounts."
                height="150px"
              />
            </div>
            <div className="row" style={{ height: 'auto' }}>
                <Card title="58" content="Total Data Brokers" />
                <Card title="1,416" content="Listings Reviewed" />
                <Card title="44" content="Data Brokers with Your Info" />
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
