// src/components/Login.js
import React, { useState } from 'react';
import { loginUser } from '../services/Api';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState(null); // Track selected role
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!role) {
      setError('Please select a role.');
      return;
    }

    try {
      const data = await loginUser(username, password, role); // Include role in login request
      var token = data.data.access_token;
      sessionStorage.setItem('token', token);
      // Redirect to dashboard or another page
      // if(role==teacher && data.data.role==tecaher)
      navigate('/admin'); // You may need to import and use useNavigate from 'react-router-dom'
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login as</h2>
        <div className="role-selection">
          <div
            className={`role-option ${role === 'teacher' ? 'selected' : ''}`}
            onClick={() => setRole('teacher')}
          >
            <div className={`check-circle ${role === 'teacher' ? 'checked' : ''}`} />
            <span>Teacher</span>
          </div>
          <div
            className={`role-option ${role === 'student' ? 'selected' : ''}`}
            onClick={() => setRole('student')}
          >
            <div className={`check-circle ${role === 'student' ? 'checked' : ''}`} />
            <span>Student</span>
          </div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="textbox">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
          <p className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
