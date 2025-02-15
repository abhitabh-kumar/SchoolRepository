import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Button, Divider, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../../assests/logo.png'
import './NavBar.css'
import SignIn from '../../components/login/SignIn';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/login/Login';


const Navbar = ({ isTransparent }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuItems = ['About', 'Classes', 'Events', 'Teachers', 'Blog', 'Contact'];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigation = (item) => {
    let url = item.toLowerCase();
    navigate(`/${url}`);
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
        sx: { backgroundColor: '#fffff', color: 'black', maxWidth: "280px", width: '100%' },
      }}
    >
      <Box sx={{ height: "150px", display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',backgroundColor:'antiquewhite'}}>
        <img src={logo} srcSet={logo} alt='SPS' id='schoolLogo' />
        <Typography mt={2} variant="h4">Sushila Public School</Typography>
      </Box>
      <List sx={{paddingTop:'0px'}}>
        {menuItems.map((item, index) => (
          <React.Fragment key={`${index}+"menuItems00`}>
          <Divider component="li" />
          <ListItem button onClick={() => handleNavigation(item)}
            sx={{ cursor: 'pointer' }} >
            <ListItemText primary={item} />
          </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );

  return (
    <>
      <AppBar position="fixed" sx={{
        backgroundColor: isTransparent ? (scrolled ? '#ffffff' : 'transparent') : "#ffffff",
        transition: 'background-color 0.2s ease',
        boxShadow: isTransparent ? scrolled ? 2 : 'none' : 2,
        zIndex: '1000',
        top: '0px'
      }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1.1, display: 'flex', justifyContent: 'flex-start', cursor: "pointer" }} onClick={() => handleNavigation("")}>
            <img src={logo} srcSet={logo} alt='SPS' id='schoolLogo' />
          </Box>
          {isMobile ? (
            <>
              <IconButton color="black" aria-label="menu" onClick={handleDrawerToggle} sx={{ width: "40px" }}>
                <MenuIcon />
              </IconButton>
              {drawer}
            </>
          ) : (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {menuItems.map((item, index) => (
                <Button key={index} sx={{ color: '#000000', mx: 2, textTransform: 'none' }} onClick={(e) => handleNavigation(item)}>
                  {item}
                </Button>
              ))}
            </Box>
          )}
          <Box sx={{ flexGrow: 1.1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button sx={{ width: 'fit-content', backgroundColor: "#333333", color: 'white', padding: "4px 25px" }} className='contactUsNav'
              onClick={() => setOpen(true)}>
              Sign-In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
        {/* {open && <Login/>} */}
      <SignIn open={open} handleClose={handleClose} />
    </>
  );
};

export default Navbar;
