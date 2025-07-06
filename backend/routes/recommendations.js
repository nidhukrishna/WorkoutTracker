const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const router = express.Router();

let exerciseData = [];

// Load CSV once when server starts
fs.createReadStream('./data/megaGymDataset.csv')
  .pipe(csv())
  .on('data', (row) => {
    exerciseData.push(row);
  })
  .on('end', () => {
    console.log('✅ CSV loaded with', exerciseData.length, 'exercises');
  });

// Helper: Random shuffle & pick
function getRandomItems(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// POST /api/recommendations
router.post('/', (req, res) => {
  const { musclePlan, energy, mood } = req.body;

  console.log('💬 Received:', {
    energy,
    mood,
    musclePlan
  });


  if (!Array.isArray(musclePlan)) {
    return res.status(400).json({ error: 'Invalid format for musclePlan' });
  }

  let recommendations = [];

  const isLowEnergy = energy <= 4;
  const isLowMood = mood === '😞' || mood === '😩';

  for (const { muscle, count } of musclePlan) {
    let matching = exerciseData.filter(
      (ex) =>
        ex.BodyPart &&
        ex.BodyPart.toLowerCase().trim() === muscle.toLowerCase().trim()
    );

    // 🔋 Filter by energy
    if (isLowEnergy) {
      matching = matching.filter((ex) =>
        ['Body Only', 'Cable', 'Machine'].includes(ex.Equipment)
      );
    }

    // 😞 Filter by mood
    if (isLowMood) {
      matching = matching.filter((ex) =>
        ex.Level && ex.Level.toLowerCase() === 'beginner'
      );
    }

    const selected = getRandomItems(matching, count);
    recommendations.push(...selected);
  }

  res.json(recommendations);
});


module.exports = router;
