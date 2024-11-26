-- Enable foreign key support
PRAGMA foreign_keys = ON;

-- Create devices table
CREATE TABLE IF NOT EXISTS devices (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    vendor TEXT NOT NULL,
    status TEXT NOT NULL CHECK(status IN ('Online', 'Offline')),
    ip_address TEXT NOT NULL,
    mac_address TEXT NOT NULL,
    uptime TEXT NOT NULL
);

-- Create system_logs table
CREATE TABLE IF NOT EXISTS system_logs (
    id TEXT PRIMARY KEY,
    timestamp TEXT NOT NULL,
    level TEXT NOT NULL CHECK(level IN ('INFO', 'DEBUG', 'WARNING', 'ERROR')),
    message TEXT NOT NULL
);

-- Create audit_logs table
CREATE TABLE IF NOT EXISTS audit_logs (
    id TEXT PRIMARY KEY,
    timestamp TEXT NOT NULL,
    action TEXT NOT NULL,
    user TEXT NOT NULL
);

-- Create notifications table
CREATE TABLE IF NOT EXISTS notifications (
    id TEXT PRIMARY KEY,
    message TEXT NOT NULL,
    timestamp TEXT NOT NULL,
    read INTEGER NOT NULL DEFAULT 0,
    type TEXT NOT NULL CHECK(type IN ('info', 'warning', 'error')),
    priority TEXT NOT NULL CHECK(priority IN ('low', 'medium', 'high')),
    log_id TEXT REFERENCES system_logs(id)
);