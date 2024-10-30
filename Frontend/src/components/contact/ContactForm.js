import React from 'react'
import { Box ,TextField, Button } from '@mui/material';
import './contact.css'

const ContactForm = () => {
  return (
    <Box
                    component="form"
                    sx={{
                        backgroundColor: '#e0f7fa',
                        padding: '30px',
                        borderRadius: '10px',
                        maxWidth:'400px'
                    }}
                >
                    <TextField
                        label="Your Name"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        sx={{ backgroundColor: '#ffffff' }}
                    />
                    <TextField
                        label="Email Address"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        sx={{ backgroundColor: '#ffffff' }}
                    />
                    <TextField
                        label="Your Message"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows={4}
                        sx={{ backgroundColor: '#ffffff' }}
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor:'red',
                            marginTop: '20px',
                            fontSize: '18px',
                            textTransform: 'none',
                            color:'white',
                            '&:hover':{
                                backgroundColor:'#eb2121'
                            }
                        }}
                    >
                        Send Message
                    </Button>
                </Box>
  )
}

export default ContactForm