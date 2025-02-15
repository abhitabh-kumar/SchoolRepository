import React from 'react'
import ResponsiveAppBar from '../../materialUIComponents/navbar/ResponsiveAppBar'
import Navigate from '../../materialUIComponents/navigation/Navigate'
import Footer from '../footer/Footer'
import { Box, Typography,Grid2, Paper } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import ContactForm from './ContactForm';
import './contact.css'
import VisitUsSection from './VisitUsSection';

const ContactPage = () => {
    return (
        <>
            <ResponsiveAppBar isTransparent={false} />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap:'wrap',
                    alignItems: 'start',
                    padding: '40px',
                    margin: 'auto',
                    marginTop:'75px',
                }}
            >
                <Box sx={{maxWidth:'450px' }}>
                    <Typography variant="h1" gutterBottom textAlign={"start"}>
                        Get in Touch with Our School
                    </Typography>
                    <Typography variant="text1" mb={3}>
                        We are here to answer any questions and provide information about our programs.
                    </Typography>

                    <Paper elevation={0} sx={{ padding: '20px', backgroundColor: '#ffe9da',borderRadius:'10px' ,margin:'95px 0px 40px 0px'}}>
                        <Box display="flex" alignItems="center" mb={2} position={"relative"}>
                            <PushPinIcon className='contactPin' />
                            <Typography variant="h6">Class Hours</Typography>
                        </Box>

                        <Grid2 container sx={{backgroundColor:'white',padding:'10px'}} spacing={3}>
                            <Grid2 item xs={6}>
                                <Typography variant="text1">Mon - Thu</Typography>
                                <Typography variant="text1">Fri</Typography>
                                <Typography variant="text1">Sat - Sun</Typography>
                            </Grid2>
                            <Grid2 item xs={6}>
                                <Typography variant="text1">07:00 AM – 04:00 PM</Typography>
                                <Typography variant="text1">07:00 AM – 03:00 PM</Typography>
                                <Typography variant="text1">Holiday</Typography>
                            </Grid2>
                        </Grid2>
                    </Paper>
                </Box>
                <ContactForm/>
            </Box>
            <VisitUsSection/>
            <Navigate />
        </>
    )
}

export default ContactPage