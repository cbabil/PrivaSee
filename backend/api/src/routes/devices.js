import express from 'express';
import { body, param } from 'express-validator';
import * as deviceModel from '../models/device.js';

const router = express.Router();

// Get all devices
router.get('/', (req, res) => {
  try {
    const devices = deviceModel.getAllDevices();
    res.json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get device by ID
router.get('/:id', param('id').isString(), (req, res) => {
  try {
    const device = deviceModel.getDeviceById(req.params.id);
    if (!device) {
      return res.status(404).json({ error: 'Device not found' });
    }
    res.json(device);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get devices by status
router.get('/status/:status', (req, res) => {
  try {
    const devices = deviceModel.getDevicesByStatus(req.params.status);
    res.json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update device status
router.post('/:id/status',
  param('id').isString(),
  body('status').isIn(['Online', 'Offline']),
  (req, res) => {
    try {
      const result = deviceModel.updateDeviceStatus(req.params.id, req.body.status);
      if (result.changes === 0) {
        return res.status(404).json({ error: 'Device not found' });
      }
      res.json({ message: 'Status updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Get device statistics
router.get('/stats/summary', (req, res) => {
  try {
    const stats = deviceModel.getDeviceStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;