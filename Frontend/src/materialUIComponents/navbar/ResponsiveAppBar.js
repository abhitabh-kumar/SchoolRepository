import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './NavBar.css'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuItems = ['About', 'Classes', 'Events', 'Teachers', 'Blog'];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const drawer = (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={handleDrawerToggle}
      PaperProps={{
        sx: { backgroundColor: 'rgba(0,0,0,0.8)', color: '#fff' },
      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} onClick={handleDrawerToggle}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar position="fixed" sx={{
      backgroundColor: scrolled ? '#ffffff' : 'transparent',
      transition: 'background-color 0.2s ease',
      boxShadow: scrolled ? 2 : 'none',
      zIndex:'1000',
      top:'0px'
    }}>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            {drawer}
          </>
        ) : (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {menuItems.map((item, index) => (
              <Button key={index} sx={{ color: '#000000', mx: 2, textTransform: 'none' }}>
                {item}
              </Button>
            ))}
          </Box>
        )}
        <Box sx={{ flexGrow: 1.1, display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ width: 'fit-content', backgroundColor:"#333333",color:'white', padding:"4px 25px"}} className='contactUsNav'>
            Contact
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
