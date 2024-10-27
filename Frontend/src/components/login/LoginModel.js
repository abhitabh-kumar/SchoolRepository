// components/LoginModal.js
import React, { useState } from 'react';
import { loginUser } from '../services/Api';

const LoginModal = ({ show, onClose }) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [role, setRole] = useState(null);
    const [password, setPassword] = useState('');
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Assume you have a login function in your AuthService
      const token = await loginUser(username, password, role);
      console.log("Kaam Kar Raha Hai")
      sessionStorage.setItem('token', token); // Store the token
      onClose(); // Close the modal after successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  if (!show) return null; // Don't render the modal if `show` is false

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>username</label>
            <input
              type="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginModal;
