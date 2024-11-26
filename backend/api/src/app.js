import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import deviceRoutes from './routes/devices.js';
import logRoutes from './routes/logs.js';
import notificationRoutes from './routes/notifications.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure database directory exists
const dbDir = join(__dirname, '../../Database');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const app = express();
const port = process.env.PORT || 18000;

// Middleware
app.use(cors({ origin: 'http://10.0.5.2:15000' }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/devices', deviceRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/notifications', notificationRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});