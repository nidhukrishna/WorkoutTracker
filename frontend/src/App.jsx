import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import MoodEnergyForm from './components/MoodEnergyForm';
import SleepSorenessForm from './components/SleepSorenessForm';
import MuscleGroupForm from './components/MuscleGroupForm';
import WorkoutRecommendation from './components/WorkoutRecommendation';
import LogWorkout from './components/LogWorkout';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [userData, setUserData] = useState({});
  const [stage, setStage] = useState('mood');
  const navigate = useNavigate();

  const handleMoodSubmit = (data) => {
    setUserData(data);
    const isLowEnergy = data.energy <= 4;
    const isBadMood = data.mood === '😞' || data.mood === '😩';
    setStage(isLowEnergy || isBadMood ? 'sleep' : 'muscle');
  };

  const handleSleepSubmit = (data) => {
    setUserData((prev) => ({ ...prev, ...data }));
    setStage('muscle');
  };

  const handleMuscleSubmit = (data) => {
    const fullData = { ...userData, ...data };
    setUserData(fullData);
    navigate('/recommendations', { state: fullData });
  };

  return (
    <div className="App">
      <Routes>
        {/* 🔐 Auth routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 💪 Workout input flow */}
        <Route
          path="/workout-flow"
          element={
            <>
              {stage === 'mood' && <MoodEnergyForm onSubmit={handleMoodSubmit} />}
              {stage === 'sleep' && <SleepSorenessForm userData={userData} onSubmit={handleSleepSubmit} />}
              {stage === 'muscle' && <MuscleGroupForm userData={userData} onSubmit={handleMuscleSubmit} />}
            </>
          }
        />

        {/* 🏋️ Other routes */}
        <Route path="/recommendations" element={<WorkoutRecommendation />} />
        <Route path="/logworkout" element={<LogWorkout />} />
      </Routes>
    </div>
  );
}

export default App;
