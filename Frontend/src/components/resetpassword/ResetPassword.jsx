// src/components/ResetPassword.js
import React, { useState } from 'react';
import { resetPassword } from '../../services/Api';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import authHeader from '../../services/authHeader';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the email from the query parameter
  const query = new URLSearchParams(location.search);
  const email = query.get('email');
  

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const token = authHeader();
      console.log(token);
      console.log(email);
      // const email = "abhi@gmail.com";
      await resetPassword(email, password);
      setMessage('Your password has been reset successfully.');
      setError('');
      // navigate('/login'); 
    } catch (err) {
      setError(err.message || 'An error occurred while resetting the password.');
      setMessage('');
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-box">
        <h2>Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <div className="textbox">
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {message && <p className="message">{message}</p>}
          {error && <p className="error">{error}</p>}
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
