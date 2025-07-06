require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');




const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
const userDataRoute = require('./routes/userData');
app.use('/api/user-data', userDataRoute);

const recRoute = require('./routes/recommendations');
app.use('/api/recommendations', recRoute);

// Test route
app.get('/', (req, res) => {
  res.send('🏋️ Gym Tracker Backend is Running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
