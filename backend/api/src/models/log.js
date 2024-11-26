import db from './db.js';

export function getSystemLogs(limit = 100) {
  return db.prepare('SELECT * FROM system_logs ORDER BY timestamp DESC LIMIT ?').all(limit);
}

export function getAuditLogs(limit = 100) {
  return db.prepare('SELECT * FROM audit_logs ORDER BY timestamp DESC LIMIT ?').all(limit);
}

export function addSystemLog(level, message) {
  const stmt = db.prepare(`
    INSERT INTO system_logs (id, timestamp, level, message)
    VALUES (?, datetime('now'), ?, ?)
  `);
  return stmt.run(`log-${Date.now()}`, level, message);
}

export function addAuditLog(action, user) {
  const stmt = db.prepare(`
    INSERT INTO audit_logs (id, timestamp, action, user)
    VALUES (?, datetime('now'), ?, ?)
  `);
  return stmt.run(`audit-${Date.now()}`, action, user);
}

export function getLogById(type, id) {
  const table = type === 'system' ? 'system_logs' : 'audit_logs';
  return db.prepare(`SELECT * FROM ${table} WHERE id = ?`).get(id);
}