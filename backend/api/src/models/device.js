import db from './db.js';

export function getAllDevices() {
  return db.prepare('SELECT * FROM devices').all();
}

export function getDeviceById(id) {
  return db.prepare('SELECT * FROM devices WHERE id = ?').get(id);
}

export function getDevicesByStatus(status) {
  return db.prepare('SELECT * FROM devices WHERE status = ?').all(status);
}

export function updateDeviceStatus(id, status) {
  const stmt = db.prepare('UPDATE devices SET status = ? WHERE id = ?');
  return stmt.run(status, id);
}

export function getDeviceStats() {
  return db.prepare(`
    SELECT 
      COUNT(*) as total,
      SUM(CASE WHEN status = 'Online' THEN 1 ELSE 0 END) as online,
      SUM(CASE WHEN status = 'Offline' THEN 1 ELSE 0 END) as offline
    FROM devices
  `).get();
}