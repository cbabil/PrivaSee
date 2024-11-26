import express from 'express';
import { param, query } from 'express-validator';
import * as logModel from '../models/log.js';

const router = express.Router();

// Get system logs
router.get('/system', 
  query('limit').optional().isInt({ min: 1, max: 1000 }),
  (req, res) => {
    try {
      const limit = req.query.limit || 100;
      const logs = logModel.getSystemLogs(limit);
      res.json(logs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Get audit logs
router.get('/audit',
  query('limit').optional().isInt({ min: 1, max: 1000 }),
  (req, res) => {
    try {
      const limit = req.query.limit || 100;
      const logs = logModel.getAuditLogs(limit);
      res.json(logs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Get specific log by ID and type
router.get('/:type/:id',
  param('type').isIn(['system', 'audit']),
  param('id').isString(),
  (req, res) => {
    try {
      const log = logModel.getLogById(req.params.type, req.params.id);
      if (!log) {
        return res.status(404).json({ error: 'Log not found' });
      }
      res.json(log);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

export default router;