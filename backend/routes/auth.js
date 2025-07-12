const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

// Register route
router.post('/register', async (req, res) => {
  console.log('➡️ Register request received');

  try {
    const { username, email, password } = req.body;
    console.log('➡️ Data received:', { username, email, password });

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('⚠️ Email already in use');
      return res.status(400).json({ error: 'Email already in use' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    console.log('✅ User saved to DB');

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });
    console.log('🔑 JWT generated');

    res.json({ message: 'Registration successful', token });
  } catch (error) {
    console.error('❌ Registration failed:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('🔐 Login attempt:', username, password);

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log('❌ User not found');
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    console.log('Password match:', isMatch);

    if (!isMatch) {
      console.log('❌ Password incorrect');
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, username: user.username });
  } catch (err) {
    console.error('🔥 Login error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
});


module.exports = router;
