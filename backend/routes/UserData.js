const express = require('express');
const router = express.Router();
const UserEntry = require('../models/UserEntry');

// POST /api/user-data
router.post('/', async (req, res) => {
  try {
    const entry = new UserEntry(req.body);
    const saved = await entry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save user data' });
  }
});

module.exports = router;
