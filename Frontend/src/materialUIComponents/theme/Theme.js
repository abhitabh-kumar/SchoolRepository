// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00000', // Yellow/Gold
    },
    secondary: {
      main: '#28347E', // Dark Blue
    },
    error: {
      main: '#FF6347', // Red (for buttons or highlights)
    },
    success: {
      main: '#32CD32', // Green (for successful buttons or sections)
    },
    text: {
      primary: '#000', // Black for text
      secondary: '#FFF', // White for text on dark backgrounds
    },
    background: {
      default: '#F9F9F9', // Light background
      paper: '#FFF', // Paper/card backgrounds
    },
  },
  typography: {
    fontFamily: '"Nunito", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#000',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#000',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: '600',
      color: '#000',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#000',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: '400',
      color: '#4F4F4F', // Grey for body text
    },
    button: {
      textTransform: 'none', // Keep button text case normal
      fontWeight: '600',
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px', // Rounded buttons
          fontSize: '1rem',
          fontFamily: '"Nunito", sans-serif',
          fontWeight: '400'
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
          backgroundColor:'white'
        },
      },
    },
  },
});

export default theme;
