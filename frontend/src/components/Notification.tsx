import React, { useState, useEffect } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import '../styles/Notification.css';

interface NotificationItem {
  id: number;
  message: string;
  date: string;
}

const Notification: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = () => {
    // Simulating an API call
    setTimeout(() => {
      const fakeNotifications: NotificationItem[] = [
        { id: 1, message: "New device detected", date: "2023-05-10 14:30" },
        { id: 2, message: "Security update available", date: "2023-05-09 09:15" },
        { id: 3, message: "Unusual network activity detected", date: "2023-05-08 22:45" },
      ];
      setNotifications(fakeNotifications);
      setCount(fakeNotifications.length);
    }, 1000);
  };

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="notification-container">
      <div className="notification-icon-container" onClick={togglePanel}>
        <NotificationsIcon className="notification-icon" />
        {count > 0 && (
          <span className="notification-badge">{count}</span>
        )}
      </div>
      {isOpen && (
        <div className="notification-panel">
          <h3>Notifications</h3>
          {notifications.length > 0 ? (
            <ul className="notification-list">
              {notifications.map((notification) => (
                <li key={notification.id} className="notification-item">
                  <p>{notification.message}</p>
                  <small>{notification.date}</small>
                </li>
              ))}
            </ul>
          ) : (
            <p>No new notifications</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;