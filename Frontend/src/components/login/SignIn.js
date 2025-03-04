import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Box, IconButton, Typography, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import './signIn.css';
import ForgetPassword from './ForgetPassword';
import { loginUser } from '../../services/Authentication';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slice/UserSlice';

const SignIn = ({ open, handleClose }) => {
    const [userType, setUserType] = useState('STUDENT');
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [forgetPassword, setForgetPassword] = useState(false);
    const [error, setError] = useState("");
    const [progress, setProgress] = useState(false);

    const dispatch = useDispatch();

    const handleOptionClick = (type) => {
        setUserType(type); // Set user type to "student" or "teacher"
    };

    const hadleForgetPassword = (type) => {
        setForgetPassword(type);
    }

    const handleErrorAndProgress = (error,progress)=>{
        setError(error);
        setProgress(progress);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleErrorAndProgress("",true);
        // const usernameRegex = /^[a-zA-Z0-9_]{5,15}$/;
        // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        // if (!usernameRegex.test(formData.username)) {
        //     handleErrorAndProgress("Username must be 5-15 characters (letters, numbers, _ only)",false);
        //     return;
        // }
        // if (!passwordRegex.test(formData.password)) {
        //     handleErrorAndProgress("Password must be 8+ chars, include 1 letter & 1 number",false);
        //     return;
        // }
        let loginData = null;
        try {
            loginData = await loginUser(formData.username, formData.password);
        } catch (error) {
            setError(error.message)
        }
        if(loginData){
            if(loginData.data.role != 'ADMIN' && loginData.data.role != userType){
                handleErrorAndProgress("User not found with selected role",false);
                return;
            }
            dispatch(setUser(loginData.data));
            handleClose();
        }
        setProgress(false);
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} sx={{ maxWidth: "400px !important", margin: "auto" }} >
                <DialogTitle mb={3}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <IconButton onClick={() => setForgetPassword(false)} sx={{ width: "30px", height: "30px" }}>
                            <FastRewindIcon sx={{ opacity: forgetPassword ? '100' : '0' }} />
                        </IconButton>
                        <Typography variant="h4">Welcome Back</Typography>
                        <IconButton onClick={handleClose} sx={{ width: "25px", height: "25px", bgcolor: "#e0e0e0" }}>
                            <CloseIcon sx={{ fontSize: "1rem" }} />
                        </IconButton>
                    </Box>
                </DialogTitle>
                {
                    !forgetPassword ? <>
                        <DialogContent>
                            <Box sx={{ backgroundColor: '#dcdcdc', borderRadius: "8px", padding: "4px", display: 'flex', gap: '4px' }} mb={0.5}>
                                <Button sx={userType == 'STUDENT' ? { backgroundColor: 'white', borderRadius: '7px', '&:hover': { backgroundColor: 'white' } } : { borderRadius: '7px', '&:hover': { backgroundColor: 'white' } }}
                                    onClick={() => handleOptionClick('STUDENT')}>student</Button>
                                <Button sx={userType == 'TEACHER' ? { backgroundColor: 'white', borderRadius: '7px', '&:hover': { backgroundColor: 'white' } } : { borderRadius: '7px', '&:hover': { backgroundColor: 'white' } }}
                                    onClick={() => handleOptionClick('TEACHER')}>teacher</Button>
                            </Box>
                            <p style={{ color: 'red', fontSize: '0.8rem', margin: '0px', padding: '2px', minHeight: '20px' }}>{error}</p>
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
                            <Box display="flex" justifyContent={"flex-end"} color={"#0050bb"} mt={2} sx={{ cursor: 'pointer' }} onClick={() => setForgetPassword(true)}>
                                Forgot Password?
                            </Box>
                        </DialogContent>

                        <DialogActions sx={{ padding: "0px 24px 20px 24px", justifyContent: "center" }}>
                            <Button type="submit" variant="contained" className='loginSubmit' onClick={handleSubmit} disabled={progress}>
                                {progress ? <CircularProgress sx={{ width: '33px !important', height: '33px !important', color: 'white !important' }} /> : "Sign In"}
                            </Button>
                        </DialogActions>
                    </> : <ForgetPassword hadleForgetPassword={hadleForgetPassword} />
                }
            </Dialog>
        </>
    );
};

export default SignIn;
