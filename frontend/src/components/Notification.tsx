import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, X, Check } from 'lucide-react';
import { cn } from '../utils/cn';
import { useNotifications } from '../hooks/useNotifications';

const Notification: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications, markAsRead, markAllAsRead } = useNotifications();
  const navigate = useNavigate();
  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'error':
        return 'text-red-500 dark:text-red-400';
      case 'warning':
        return 'text-yellow-500 dark:text-yellow-400';
      case 'info':
        return 'text-blue-500 dark:text-blue-400';
      default:
        return 'text-gray-500 dark:text-gray-400';
    }
  };

  const handleNotificationClick = (notification: any) => {
    if (notification.logId) {
      markAsRead(notification.id);
      setIsOpen(false);
      navigate('/logs', { state: { highlightLogId: notification.logId } });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        aria-label={`${unreadCount} unread notifications`}
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-dark-800 rounded-lg shadow-lg border border-gray-200 dark:border-dark-700 z-50">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-dark-700">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Notifications
                {unreadCount > 0 && (
                  <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                    ({unreadCount} unread)
                  </span>
                )}
              </h3>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <button
                    onClick={() => markAllAsRead()}
                    className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    Mark all as read
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="max-h-[400px] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                  No notifications
                </div>
              ) : (
                <div className="divide-y divide-gray-200 dark:divide-dark-700">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification)}
                      className={cn(
                        'p-4 hover:bg-gray-50 dark:hover:bg-dark-700/50 transition-colors cursor-pointer',
                        !notification.read && 'bg-blue-50 dark:bg-blue-900/10'
                      )}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className={cn(
                            'text-sm',
                            getNotificationColor(notification.type)
                          )}>
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {notification.timestamp}
                          </p>
                        </div>
                        {!notification.read && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              markAsRead(notification.id);
                            }}
                            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            <Check className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;