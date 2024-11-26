# PrivaSee Database

SQLite database structure and initialization scripts for the PrivaSee application.

## Directory Structure

```
Database/
├── sql/
│   ├── init.sql        # Database schema
│   └── sampledata.sql  # Sample data for testing
├── scripts/
│   ├── init.sh         # Initialize database
│   ├── reset.sh        # Reset database
│   └── backup.sh       # Backup database
└── backups/            # Database backups
```

## Database Schema

### Tables

1. `devices`
   - Device information and status
   ```sql
   CREATE TABLE devices (
       id TEXT PRIMARY KEY,
       name TEXT NOT NULL,
       vendor TEXT NOT NULL,
       status TEXT NOT NULL CHECK(status IN ('Online', 'Offline')),
       ip_address TEXT NOT NULL,
       mac_address TEXT NOT NULL,
       uptime TEXT NOT NULL
   );
   ```

2. `system_logs`
   - System-level logs
   ```sql
   CREATE TABLE system_logs (
       id TEXT PRIMARY KEY,
       timestamp TEXT NOT NULL,
       level TEXT NOT NULL CHECK(level IN ('INFO', 'DEBUG', 'WARNING', 'ERROR')),
       message TEXT NOT NULL
   );
   ```

3. `audit_logs`
   - User action logs
   ```sql
   CREATE TABLE audit_logs (
       id TEXT PRIMARY KEY,
       timestamp TEXT NOT NULL,
       action TEXT NOT NULL,
       user TEXT NOT NULL
   );
   ```

4. `notifications`
   - System notifications
   ```sql
   CREATE TABLE notifications (
       id TEXT PRIMARY KEY,
       message TEXT NOT NULL,
       timestamp TEXT NOT NULL,
       read INTEGER NOT NULL DEFAULT 0,
       type TEXT NOT NULL CHECK(type IN ('info', 'warning', 'error')),
       priority TEXT NOT NULL CHECK(priority IN ('low', 'medium', 'high')),
       log_id TEXT REFERENCES system_logs(id)
   );
   ```

## Setup Instructions

1. Make scripts executable:
   ```bash
   chmod +x scripts/*.sh
   ```

2. Initialize database:
   ```bash
   cd scripts
   ./init.sh
   ```

3. Reset database (if needed):
   ```bash
   cd scripts
   ./reset.sh
   ```

4. Create backup:
   ```bash
   cd scripts
   ./backup.sh
   ```

## Maintenance

### Backups
- Automatic backups are created with timestamps
- Stored in the `backups/` directory
- Format: `privasee_YYYYMMDD_HHMMSS.db`

### Sample Data
- Sample data is provided for testing
- Includes example devices, logs, and notifications
- Can be reset using the `reset.sh` script

## Security

- Database file permissions are set to 644
- Foreign key constraints are enabled
- Input validation through CHECK constraints