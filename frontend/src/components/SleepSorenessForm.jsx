import React, { useState } from 'react';

const SleepSorenessForm = ({ userData, onSubmit }) => {
  const [sleep, setSleep] = useState('');
  const [soreness, setSoreness] = useState([]);

  const muscleGroups = ['Chest', 'Back', 'Legs', 'Arms', 'Shoulders', 'Core'];

  const handleCheckboxChange = (muscle) => {
    setSoreness((prev) =>
      prev.includes(muscle)
        ? prev.filter((m) => m !== muscle)
        : [...prev, muscle]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullData = {
      ...userData,
      sleep,
      soreness,
    };
    onSubmit(fullData); // ✅ Send data back to App
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Let's learn a bit more</h2>

      <div className="sleep-input">
        <label>How many hours did you sleep last night?</label>
        <input
          type="number"
          value={sleep}
          onChange={(e) => setSleep(e.target.value)}
          min="0"
          max="12"
          required
        />
      </div>

      <label>Are you feeling sore?</label>
      <div className="checkbox-group">
        {muscleGroups.map((muscle) => (
          <label key={muscle}>
            <input
              type="checkbox"
              checked={soreness.includes(muscle)}
              onChange={() => handleCheckboxChange(muscle)}
            />
            {muscle}
          </label>
        ))}
      </div>

      <button type="submit" className="submit-btn">Continue</button>
    </form>
  );
};

export default SleepSorenessForm;
