# PrivaSee Backend

This directory contains the backend components of the PrivaSee application.

## Directory Structure

```
backend/
├── api/              # Express.js API middleware
│   ├── src/
│   │   ├── app.js           # Main application file
│   │   ├── models/          # Database models
│   │   └── routes/          # API routes
│   ├── package.json         # API dependencies
│   └── README.md           # API documentation
└── Database/        # SQLite database
    ├── sql/              # SQL schema and data
    ├── scripts/          # Database management scripts
    ├── backups/          # Database backups
    └── README.md         # Database documentation
```

## Components

### API Middleware

The API middleware is built with Express.js and provides:
- RESTful endpoints for devices, logs, and notifications
- Input validation and error handling
- CORS and security middleware
- SQLite database integration

See [api/README.md](api/README.md) for detailed API documentation.

### Database

The SQLite database includes:
- Device management
- System and audit logging
- Notification system
- Automated backup functionality

See [Database/README.md](Database/README.md) for database documentation.

## Setup

1. Initialize database:
   ```bash
   cd Database/scripts
   chmod +x *.sh
   ./init.sh
   ```

2. Install API dependencies:
   ```bash
   cd api
   yarn install
   ```

3. Start API server:
   ```bash
   # Development
   yarn dev

   # Production
   yarn start
   ```

## Docker Support

Build and run using Docker:
```bash
docker build -f ../docker/backend-Dockerfile -t privasee-backend .
docker run -p 18000:18000 privasee-backend
```

## Environment Variables

- `PORT` - API server port (default: 18000)
- `NODE_ENV` - Environment mode (development/production)