// src/components/VerifyOTP.js
import React, { useState } from 'react';
import { verifyOtp } from '../services/Api'; // Assuming you have a verifyOtp function in your API service
import { useLocation, useNavigate } from 'react-router-dom';
import './VerifyOTP.css';

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve token from URL query parameters
  const query = new URLSearchParams(location.search);
  const token = query.get('token');

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    // try {
    //   await verifyOtp(token, otp); // Assuming verifyOtp verifies the OTP and token
    //   setSuccess('OTP verified successfully.');
    //   setError('');
    //   // Redirect to reset password page
      navigate(`/reset-password?token=${token}`);   
    // } catch (err) {
    //   setError(err.message || 'An error occurred while verifying the OTP.');
    //   setSuccess('');
    // }
  };

  return (
    <div className="verify-otp-container">
      <div className="verify-otp-box">
        <h2>Verify OTP</h2>
        <form onSubmit={handleVerifyOtp}>
          <div className="textbox">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          {success && <p className="success">{success}</p>}
          {error && <p className="error">{error}</p>}
          <button type="submit">Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
