import React from 'react';
import { Grid2, Typography, Box, Button, Paper } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const VisitUsSection = () => {
    return (
        <Box sx={{ backgroundColor: '#ffcc4d', padding: '50px' }}>
            <Grid2 container spacing={2}>
                {/* Map Section */}
                <Grid2 item width={"100%"}>
                    <Paper elevation={3} sx={{ position: 'relative', overflow: 'hidden' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.5263716050526!2d84.64282657539349!3d25.5541489774829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5fead9c39415%3A0xf586b0896b6491a7!2sSushila%20public%20school!5e0!3m2!1sen!2sin!4v1727648148693!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            height="400"
                            style={{ border: '0' }}
                            width={"100%"}
                            title="Google Maps Embed"
                        ></iframe>
                        <Button
                            variant="contained"
                            sx={{
                                position: 'absolute',
                                right: '20px',
                                bottom: '20px',
                                backgroundColor: 'black'
                            }}
                            href="https://maps.app.goo.gl/6GG6exo4pauw8w4H9"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View in Maps
                        </Button>
                    </Paper>
                </Grid2>

                {/* Contact Info Section */}
                <Grid2 item container width={"100%"} mt={3}>
                    <Box display="flex" direction="row" justifyContent="space-between" alignItems="center" width={"100%"}>
                        <Box display="flex" flexDirection="column">
                            <Typography variant="h4" gutterBottom width={"100%"}>
                                Visit Us
                            </Typography>
                            <Typography variant="body1">
                                <RoomIcon sx={{ marginRight: '8px', position: 'relative', top: '5px' }} />
                                Kashyap Nagar, New Police Line, Arrah, Bihar 802301
                            </Typography>
                        </Box>

                        <Box display="flex" flexDirection="column" width={"50%"}>
                            <Typography variant="body1" textAlign={'right'}>
                                <PhoneIcon sx={{ marginRight: '8px', position: 'relative', top: '5px' }} />
                                555-1234-567
                            </Typography>
                            <Typography variant="body1" textAlign={'right'}>
                                <EmailIcon sx={{ marginRight: '8px', position: 'relative', top: '5px' }} />
                                admission@shushilapublicschool.edu</Typography>
                        </Box>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default VisitUsSection;
