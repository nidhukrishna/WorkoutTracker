import React, { useState } from 'react';

const MuscleGroupForm = ({ userData, onSubmit }) => {
  const [selectedMuscles, setSelectedMuscles] = useState({
    primaryMuscle1: '',
    primaryMuscle2: '',
    primaryMuscle3: '',
    primaryMuscle4: ''
  });

  const muscleOptions = [
    'Chest', 'Shoulders','Abdominals', 'Biceps', 'Triceps', 'Quadriceps',
    'Hamstrings', 'Glutes', 'Lats', 'Calves', 'Neck',
    'Adductors', 'Abductors', 'Lower Back', 'Middle Back',
    'Forearms', 'Traps'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedMuscles((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullData = {
      ...userData,
      ...selectedMuscles
    };
    onSubmit(fullData); // no navigate
  };

  return (
    <div className="form">
      <h2>Select Target Muscle Groups</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Primary Muscle (3 exercises):
          <select name="primaryMuscle1" value={selectedMuscles.primaryMuscle1} onChange={handleChange} required>
            <option value="">Select</option>
            {muscleOptions.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </label>

        <label>
          Secondary Muscle (2 exercises):
          <select name="primaryMuscle2" value={selectedMuscles.primaryMuscle2} onChange={handleChange} required>
            <option value="">Select</option>
            {muscleOptions.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </label>

        <label>
          Tertiary Muscle (2 exercises):
          <select name="primaryMuscle3" value={selectedMuscles.primaryMuscle3} onChange={handleChange} required>
            <option value="">Select</option>
            {muscleOptions.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </label>

        <label>
          Fourth Muscle (1 exercise):
          <select name="primaryMuscle4" value={selectedMuscles.primaryMuscle4} onChange={handleChange} required>
            <option value="">Select</option>
            {muscleOptions.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </label>

        <button type="submit">Get Recommendation</button>
      </form>
    </div>
  );
};

export default MuscleGroupForm;
