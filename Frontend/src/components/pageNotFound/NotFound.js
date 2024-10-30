// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'; 
import HomeIcon from '@mui/icons-material/Home';
import { Box, Typography, Button } from '@mui/material';

const NotFound = ({homeLink}) => {
  return (
    <Box 
      sx={{
        textAlign: 'center',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#F5F5F5',
      }}
    >
      <SentimentVeryDissatisfiedIcon 
        sx={{ fontSize: 100, color: '#FF6F61', marginBottom: '20px' }} 
      />
      <Typography variant="h1" sx={{ fontSize: '72px', color: '#333' }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ color: '#555', marginBottom: '20px' }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '30px', fontSize: '18px', color: '#777' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      
      <Link to={homeLink} style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<HomeIcon />}
          sx={{
            padding: '10px 20px',
            fontSize: '16px',
            textTransform: 'none',
            backgroundColor:'red',
            '&:hover':{
                backgroundColor:'red'
            }
          }}
        >
          Go Back Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
