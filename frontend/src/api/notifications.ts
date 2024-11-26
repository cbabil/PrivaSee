import axios from 'axios';
import type { Notification } from '../types/notifications';

const API_URL = 'http://10.0.5.2:18000/api';

export async function fetchNotifications(): Promise<Notification[]> {
  try {
    const response = await axios.get(`${API_URL}/notifications`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred while loading notifications'
    );
  }
}

export async function markAsRead(id: string): Promise<void> {
  try {
    await axios.post(`${API_URL}/notifications/${id}/read`);
  } catch (error) {
    console.error('Error marking notification as read:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred while updating notification'
    );
  }
}

export async function markAllAsRead(): Promise<void> {
  try {
    await axios.post(`${API_URL}/notifications/read-all`);
  } catch (error) {
    console.error('Error marking all notifications as read:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred while updating notifications'
    );
  }
}