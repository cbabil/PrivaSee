# PrivaSee API

Express.js API middleware for the PrivaSee application.

## Features

- RESTful API endpoints for devices, logs, and notifications
- SQLite database integration using better-sqlite3
- Input validation and error handling
- CORS and security middleware

## API Endpoints

### Devices
- `GET /api/devices` - Get all devices
- `GET /api/devices/:id` - Get device by ID
- `GET /api/devices/status/:status` - Get devices by status
- `POST /api/devices/:id/status` - Update device status
- `GET /api/devices/stats/summary` - Get device statistics

### Logs
- `GET /api/logs/system` - Get system logs
- `GET /api/logs/audit` - Get audit logs
- `GET /api/logs/:type/:id` - Get specific log by ID and type

### Notifications
- `GET /api/notifications` - Get all notifications
- `GET /api/notifications/unread` - Get unread notifications
- `POST /api/notifications/:id/read` - Mark notification as read
- `POST /api/notifications/read-all` - Mark all notifications as read

## Setup

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start development server:
   ```bash
   yarn dev
   ```

3. Start production server:
   ```bash
   yarn start
   ```

## Environment Variables

- `PORT` - Server port (default: 18000)
- `NODE_ENV` - Environment mode (development/production)

## Dependencies

- express - Web framework
- better-sqlite3 - SQLite database driver
- cors - CORS middleware
- helmet - Security middleware
- morgan - HTTP request logger
- express-validator - Input validation
- winston - Logging library