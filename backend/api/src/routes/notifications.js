import express from 'express';
import { param } from 'express-validator';
import * as notificationModel from '../models/notification.js';

const router = express.Router();

// Get all notifications
router.get('/', (req, res) => {
  try {
    const notifications = notificationModel.getNotifications();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get unread notifications
router.get('/unread', (req, res) => {
  try {
    const notifications = notificationModel.getUnreadNotifications();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mark notification as read
router.post('/:id/read',
  param('id').isString(),
  (req, res) => {
    try {
      const result = notificationModel.markAsRead(req.params.id);
      if (result.changes === 0) {
        return res.status(404).json({ error: 'Notification not found' });
      }
      res.json({ message: 'Notification marked as read' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Mark all notifications as read
router.post('/read-all', (req, res) => {
  try {
    notificationModel.markAllAsRead();
    res.json({ message: 'All notifications marked as read' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;