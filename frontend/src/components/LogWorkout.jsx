import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './LogWorkout.css';

const LogWorkout = () => {
  const location = useLocation();
  const recommendedExercises = location.state || [];

  const [logData, setLogData] = useState(
    recommendedExercises.map((ex) => ({
      name: ex.Title || 'Exercise',
      sets: [{ weight: '', reps: '' }],
    }))
  );

  const handleChange = (exerciseIndex, setIndex, field, value) => {
    const updated = [...logData];
    updated[exerciseIndex].sets[setIndex][field] = value;
    setLogData(updated);
  };

  const addSet = (exerciseIndex) => {
    const updated = [...logData];
    updated[exerciseIndex].sets.push({ weight: '', reps: '' });
    setLogData(updated);
  };

  const handleSubmit = () => {
    console.log('Workout Log Submitted:', logData);
    alert('Workout Logged ✅');
    // Optionally POST this to backend
  };

  return (
    <div className="log-page">
      <h2>Log Your Workout</h2>

      {logData.map((exercise, exerciseIndex) => (
        <div key={exerciseIndex} className="exercise-log">
          <h3>{exercise.name}</h3>
          <table>
            <thead>
              <tr>
                <th>Set</th>
                <th>Weight</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              {exercise.sets.map((set, setIndex) => (
                <tr key={setIndex}>
                  <td>{setIndex + 1}</td>
                  <td>
                    <input
                      type="number"
                      value={set.weight}
                      onChange={(e) =>
                        handleChange(exerciseIndex, setIndex, 'weight', e.target.value)
                      }
                      placeholder="kg/lbs"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={set.reps}
                      onChange={(e) =>
                        handleChange(exerciseIndex, setIndex, 'reps', e.target.value)
                      }
                      placeholder="reps"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => addSet(exerciseIndex)}>+ Add Set</button>
        </div>
      ))}

      <button className="submit-log-btn" onClick={handleSubmit}>
        Submit Workout Log
      </button>
    </div>
  );
};

export default LogWorkout;
