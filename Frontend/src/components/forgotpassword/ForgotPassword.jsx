// src/components/ForgotPassword.js
import React, { useState } from 'react';
import { requestPasswordReset } from '../../services/Api';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';
import authHeader from '../../services/authHeader';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      console.log("Line no 17");
      console.log(email);
      const token = authHeader();
      await requestPasswordReset(email, token);
      // navigate(`/reset-password?email=${encodeURIComponent(email)}`);
    } catch (err) {
      setError(err.message || 'An error occurred while sending the reset link.');
      setMessage('');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <div className="textbox">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {message && <p className="message">{message}</p>}
          {error && <p className="error">{error}</p>}
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
