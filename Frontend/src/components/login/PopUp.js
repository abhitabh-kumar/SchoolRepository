// App.js or any parent component
import React, { useEffect, useState } from 'react';
import { isTokenExpired } from '../services/auth';
import LoginModal from './LoginModel';

const PopUp = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (isTokenExpired(token)) {
      setShowLoginModal(true); // Show the login modal if the token is expired
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('token'); // Clear the token
    setShowLoginModal(true); // Show the login modal when logging out
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
    window.location.reload(); // Refresh the page after successful login
  };

  return (
    <div className="App">
      <header>
        <h1>Protected App</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>

      {/* Other app content goes here */}

      {/* Render the login modal */}
      <LoginModal show={showLoginModal} onClose={closeLoginModal} />
    </div>
  );
};

export default PopUp;
