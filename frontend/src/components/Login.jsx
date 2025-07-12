import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard'); // or wherever your main app goes
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      setError('Login error');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Workout Tracker</h1>
        <p>Track your exercises, monitor progress, and get personalized workout recommendations based on your energy, mood, and recovery.</p>
      </div>
      <div className="login-right">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account?</p>
        <button className="register-btn" onClick={() => navigate('/register')}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
