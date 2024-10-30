import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Box, IconButton, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './signIn.css';

const SignIn = ({ open, handleClose }) => {
    const [userType, setUserType] = useState(null);
    const [formData, setFormData] = useState({ username: '', password: '' });

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
                {
                    !userType ? (
                        <>
                            <DialogTitle textAlign={"start"}>
                                <Box display="flex" justifyContent="flex-end">
                                    <IconButton onClick={handleClose} sx={{ width: "25px", height: "25px", bgcolor: "#e0e0e0" }}>
                                        <CloseIcon sx={{ fontSize: "1rem" }} />
                                    </IconButton>
                                </Box>
                                <Typography variant="h4" >
                                    Hello !
                                </Typography>
                                <Typography variant="h9">
                                    choose your login option
                                </Typography>
                            </DialogTitle>
                            <DialogActions sx={{ flexDirection: "column", gap: 2, padding: "30px 10px" }}>
                                <Card
                                    className='loginCard'
                                    onClick={() => handleOptionClick('student')}
                                >
                                    <CardActionArea>
                                        <CardContent
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Box>
                                                <Typography variant="h6" component="div">
                                                    Student
                                                </Typography>
                                                <Typography variant="body2">
                                                    Access the students' portal here.
                                                </Typography>
                                            </Box>
                                            <ArrowForwardIosIcon />
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                                <Card
                                    className='loginCard'
                                    onClick={() => handleOptionClick('staff')}
                                >
                                    <CardActionArea>
                                        <CardContent
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Box>
                                                <Typography variant="h6" component="div">
                                                    Staff
                                                </Typography>
                                                <Typography variant="body2">
                                                    Exclusive to staff members only.
                                                </Typography>
                                            </Box>
                                            <ArrowForwardIosIcon />
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                            </DialogActions>
                        </>
                    ) : (
                        <>
                            <DialogTitle mb={3}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <IconButton onClick={() => setUserType(null)} sx={{ width: "30px", height: "30px" }}>
                                        <FastRewindIcon />
                                    </IconButton>
                                    <Typography variant="h4">Welcome Back</Typography>
                                    <IconButton onClick={handleClose} sx={{ width: "25px", height: "25px", bgcolor: "#e0e0e0" }}>
                                        <CloseIcon sx={{ fontSize: "1rem" }} />
                                    </IconButton>
                                </Box>
                            </DialogTitle>

                            <DialogContent>
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
                                <Box display="flex" justifyContent={"flex-end"} color={"#0050bb"} mt={2}>
                                    Forgot Password?
                                </Box>
                            </DialogContent>

                            <DialogActions sx={{ padding: "0px 24px 20px 24px", justifyContent: "center" }}>
                                <Button type="submit" variant="contained" className='loginSubmit' onClick={handleSubmit}>
                                    Sign In
                                </Button>
                            </DialogActions>
                        </>
                    )
                }
            </Dialog>
        </>
    );
};

export default SignIn;
