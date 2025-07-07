import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './WorkoutRecommendation.css';

const WorkoutRecommendation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state;

  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userData) return;

    const fetchRecommendations = async () => {
      try {
        const musclePlan = [
          { muscle: userData.primaryMuscle1, count: 3 },
          { muscle: userData.primaryMuscle2, count: 2 },
          { muscle: userData.primaryMuscle3, count: 2 },
          { muscle: userData.primaryMuscle4, count: 1 }
        ];

        const response = await fetch('/api/recommendations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            musclePlan,
            energy: userData.energy,
            mood: userData.mood
          })
        });

        const data = await response.json();
        setRecommendations(data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [userData]);

  if (!userData) return <p>Error: No user data found.</p>;

  const groupedRecommendations = recommendations.reduce((acc, exercise) => {
    const muscle = exercise.BodyPart || 'Other';
    if (!acc[muscle]) acc[muscle] = [];
    acc[muscle].push(exercise);
    return acc;
  }, {});

  return (
    <div className="recommendation-page">
      <div className="header-row">
        <h2>Recommended Workout for You</h2>
        <button className="start-workout-btn" onClick={() => navigate('/logworkout', { state: recommendations })}>
          Start Workout
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : recommendations.length === 0 ? (
        <p>No recommendations found.</p>
      ) : (
        <div className="horizontal-scroll">
          {Object.entries(groupedRecommendations).map(([muscle, exercises]) => (
            <div key={muscle} className="muscle-column">
              <h3>{muscle}</h3>
              {exercises.map((ex, idx) => (
                <div key={idx} className="exercise-card">
                  <h4>{ex.Title}</h4>
                  <p>{ex.Desc || 'No description available.'}</p>
                  <p><strong>Equipment:</strong> {ex.Equipment}</p>
                  <p><strong>Level:</strong> {ex.Level}</p>
                  <p><strong>Rating:</strong> {ex.Rating || 'N/A'}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutRecommendation;
