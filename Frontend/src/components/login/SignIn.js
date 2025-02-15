import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Box, IconButton, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './signIn.css';
import ForgetPassword from './ForgetPassword';

const SignIn = ({ open, handleClose }) => {
    const [userType, setUserType] = useState('teacher');
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [forgetPassword, setForgetPassword] = useState(false);

    const handleOptionClick = (type) => {
        setUserType(type); // Set user type to "student" or "teacher"
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data: ', formData);
        // Perform your login logic here
        handleClose();
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} sx={{ maxWidth: "400px !important", margin: "auto" }} >
                <DialogTitle mb={3}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <IconButton onClick={() => setUserType('student')} sx={{ width: "30px", height: "30px" }}>
                            <FastRewindIcon />
                        </IconButton>
                        <Typography variant="h4">Welcome Back</Typography>
                        <IconButton onClick={handleClose} sx={{ width: "25px", height: "25px", bgcolor: "#e0e0e0" }}>
                            <CloseIcon sx={{ fontSize: "1rem" }} />
                        </IconButton>
                    </Box>
                </DialogTitle>
                {
                    forgetPassword ? <>
                        <DialogContent>
                            <Box sx={{ backgroundColor: '#dcdcdc', borderRadius: "8px", padding: "4px", display: 'flex', gap: '4px' }} mb={3}>
                                <Button sx={userType == 'student' ? { backgroundColor: 'white', borderRadius: '7px', '&:hover': { backgroundColor: 'white' } } : { borderRadius: '7px', '&:hover': { backgroundColor: 'white' } }}
                                    onClick={() => handleOptionClick('student')}>student</Button>
                                <Button sx={userType == 'teacher' ? { backgroundColor: 'white', borderRadius: '7px', '&:hover': { backgroundColor: 'white' } } : { borderRadius: '7px', '&:hover': { backgroundColor: 'white' } }}
                                    onClick={() => handleOptionClick('teacher')}>teacher</Button>
                            </Box>
                            <Box component="form" onSubmit={handleSubmit}>
                                <TextField
                                    margin="dense"
                                    label="Username"
                                    name="username"
                                    fullWidth
                                    variant="outlined"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    required
                                />

                                {/* Password Input */}
                                <TextField
                                    margin="dense"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    fullWidth
                                    variant="outlined"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Box>
                            <Box display="flex" justifyContent={"flex-end"} color={"#0050bb"} mt={2} sx={{ cursor: 'pointer' }} onClick>
                                Forgot Password?
                            </Box>
                        </DialogContent>

                        <DialogActions sx={{ padding: "0px 24px 20px 24px", justifyContent: "center" }}>
                            <Button type="submit" variant="contained" className='loginSubmit' onClick={handleSubmit}>
                                Sign In
                            </Button>
                        </DialogActions>
                    </> : <ForgetPassword/>
                }
            </Dialog>
        </>
    );
};

export default SignIn;
