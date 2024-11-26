import { useState, useEffect } from 'react';
import { Notification } from '../types/notifications';
import { fetchNotifications } from '../api/notifications';
import toast from 'react-hot-toast';

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (error) {
        toast.error('Failed to load notifications');
      }
    };

    loadNotifications();
  }, []);

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  return {
    notifications,
    markAsRead,
    markAllAsRead,
  };
}