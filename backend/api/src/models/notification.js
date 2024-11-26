import db from './db.js';

export function getNotifications() {
  return db.prepare('SELECT * FROM notifications ORDER BY timestamp DESC').all();
}

export function getUnreadNotifications() {
  return db.prepare('SELECT * FROM notifications WHERE read = 0 ORDER BY timestamp DESC').all();
}

export function markAsRead(id) {
  return db.prepare('UPDATE notifications SET read = 1 WHERE id = ?').run(id);
}

export function markAllAsRead() {
  return db.prepare('UPDATE notifications SET read = 1').run();
}

export function addNotification(message, type, priority, logId = null) {
  const stmt = db.prepare(`
    INSERT INTO notifications (id, message, timestamp, read, type, priority, log_id)
    VALUES (?, ?, datetime('now'), 0, ?, ?, ?)
  `);
  return stmt.run(`notif-${Date.now()}`, message, type, priority, logId);
}