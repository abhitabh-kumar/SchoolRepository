import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import './contact.css';
import { requestMessageViaEmail } from '../../services/Api';
import authHeader from '../../services/authHeader';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEvent = async (e) => {
    e.preventDefault();

    const token = authHeader();

    try {
      const formData = {
        name,
        email,
        message,
      };
      requestMessageViaEmail(token,formData);

    } catch (err) {
      // Handle errors (e.g., network issues, server issues)
      setError('An error occurred while sending the message. Please try again.');
      setSuccess('');
    }
  };

  return (
    <Box
      component="form"
      sx={{
        backgroundColor: '#e0f7fa',
        padding: '30px',
        borderRadius: '10px',
        maxWidth: '400px',
      }}
      onSubmit={handleEvent} // Use onSubmit instead of onClick for form submission
    >
      <TextField
        label="Your Name"
        fullWidth
        margin="normal"
        variant="outlined"
        sx={{ backgroundColor: '#ffffff' }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email Address"
        fullWidth
        margin="normal"
        variant="outlined"
        sx={{ backgroundColor: '#ffffff' }}
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Fixed the wrong property name from `e.target.email`
      />
      <TextField
        label="Your Message"
        fullWidth
        margin="normal"
        variant="outlined"
        multiline
        rows={4}
        sx={{ backgroundColor: '#ffffff' }}
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Fixed the wrong property name from `e.target.message`
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: 'red',
          marginTop: '20px',
          fontSize: '18px',
          textTransform: 'none',
          color: 'white',
          '&:hover': {
            backgroundColor: '#eb2121',
          },
        }}
        type="submit" // This will trigger form submission
      >
        Send Message
      </Button>

      {/* Display error or success message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </Box>
  );
};

export default ContactForm;
