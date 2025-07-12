import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // ✅ Reusing Login styles

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/'); // Go back to login or dashboard
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      setError('Registration error');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Join Workout Tracker</h1>
        <p>Create an account to track workouts, monitor progress, and get smart exercise suggestions based on your body’s needs.</p>
      </div>
      <div className="login-right">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Register</button>
        </form>
        <p>Already have an account?</p>
        <button className="register-btn" onClick={() => navigate('/')}>
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Register;
