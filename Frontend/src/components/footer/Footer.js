import React from 'react';
import { Box, Button, Typography, TextField, IconButton, Avatar, List, ListItem, ListItemText, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import girl from '../../assests/littleGirl.png'
import './footer.css'

const Footer = () => {
  const links = ['Homepage v1', 'Homepage v2', 'Homepage v3', 'About', 'Teacher', 'Upcoming Events']
  const classes = ['Toddler Class', 'Early Learning', 'Art & Craft', 'Science & Nature', 'Music', 'Leadership'];
  return (
    <Box mt={10}>
      <Box sx={{ backgroundColor: '#1B1B3B', color: 'white', mt: 3 ,pb:4}}>
        <Box
          sx={{
            backgroundColor: '#FFC300',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: 2,
            margin:'0px 30px'
          }}
          className="footerEdu"
        >
          <img src={girl} alt="404" srcset={girl} className='girlImage'/>
          <Box sx={{ textAlign: 'left', flex: 1, maxWidth:'700px' }}>
            <Typography variant="h1" fontWeight="bold" textAlign='left' mb={1}>
              Get the best education
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Join our Sushila Public School and watch your children soar to the newest height.
            </Typography>
            <Button variant="contained" className='footerJoinButton'>
              Join Now
            </Button>
          </Box>
        </Box>
        <Grid container justifyContent="space-around" spacing={4}>
          <Grid item xs={12} md={2.2}>
            <Typography variant="h6" fontWeight="bold">
              Links
            </Typography>
            <List>
              {
                links && links.map((item, index) => {
                  return <ListItem disablePadding key={`${item}+000${index}`}>
                    <ListItemText primary={item} className='footerItem' />
                  </ListItem>
                })
              }
            </List>
          </Grid>

          <Grid item xs={12} md={2.2}>
            <Typography variant="h6" fontWeight="bold">
              Classes
            </Typography>
            <List>
              {
                classes && classes.map((item, index) => {
                  return <ListItem disablePadding key={`${item}+000${index}`}>
                    <ListItemText primary={item} className='footerItem' />
                  </ListItem>
                })
              }
            </List>
          </Grid>

          <Grid item xs={12} md={2.2}>
            <Typography variant="h6" fontWeight="bold">
              Contact
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemText primary="123 Kindergarten Lane, Eduville" className='footerItem' />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="555-1234-567" className='footerItem' />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="info@shushila.edu" className='footerItem' />
              </ListItem>
            </List>
            <Link href="#" color="inherit">
              send a message
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h3" fontWeight="bold" color='white'>
              Sushila Public School
            </Typography>
            <Typography fontWeight="bold" color='white'>Subscribe Newsletter</Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter email address..."
              sx={{ backgroundColor: 'white', borderRadius: '4px', mt: 1, mb: 2 }}
            />

            <Box display="flex" justifyContent="center" mt={2} gap={2}>
              <IconButton className='footerButton'>
                <Twitter />
              </IconButton>
              <IconButton className='footerButton'>
                <Instagram />
              </IconButton>
              <IconButton className='footerButton'>
                <Facebook />
              </IconButton>
              <Button variant="contained" sx={{ width: '100%' }} className='footerSubscribeButton'>
                subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
