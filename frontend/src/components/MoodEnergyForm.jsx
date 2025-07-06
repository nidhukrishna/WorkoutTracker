// src/components/MoodEnergyForm.jsx
import React, { useState } from 'react';

const MoodEnergyForm = ({ onSubmit }) => {
  const [energy, setEnergy] = useState(5);
  const [mood, setMood] = useState('');

  const moods = ['😄', '🙂', '😐', '😞', '😩'];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ energy, mood });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>How are you feeling today?</h2>
      <div className='energy-bar'>
              <label>Energy Level (1 - 10):</label>
       <input
        type="range"
        min="1"
        max="10"
        value={energy}
        onChange={(e) => setEnergy(Number(e.target.value))}
       />
      <span>{energy}</span>
      </div>

      <label>Select Your Mood:</label>
      <div className="emoji-options">
        {moods.map((m) => (
          <button
            type="button"
            key={m}
            className={`emoji-btn ${mood === m ? 'selected' : ''}`}
            onClick={() => setMood(m)}
          >
            {m}
          </button>
        ))}
      </div>

      <button type="submit" className="submit-btn" disabled={!mood}>
        Continue
      </button>
    </form>
  );
};

export default MoodEnergyForm;
