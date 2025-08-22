import { Box, Button, CircularProgress, DialogActions, DialogContent, FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput, Snackbar } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { getOtp, requestPasswordReset } from '../../services/Authentication';
import { useSelector } from 'react-redux';
import SlideSnackBar from '../../materialUIComponents/snackbar/SlideSnackBar';
import MailLockIcon from '@mui/icons-material/MailLock';

const ForgetPassword = ({ hadleForgetPassword }) => {
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [validOtp, setValidOtp] = useState("");
    const [email, setEmail] = useState("");
    const [timer, setTimer] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const inputRef = useRef(null);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // Effect to run the countdown timer
    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTime => prevTime - 1);
            }, 1000);
        } else {
            clearInterval(interval);
            setTimer(null);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleSendOTP = async () => {
        setLoading(true);
        setError("");
        setOtp("");
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setError("Please provide valid email !!");
            setLoading(false);
            return;
        }
        try {
            const response = await getOtp(email);
            if (!response) throw new Error("Something went wrong while sending OTP")
            setValidOtp(response.data);
            setOtpSent(true);
            setTimer(60);
            setTimeout(() => {
                inputRef.current.focus();
            }, 100);
        } catch (error) {
            setError(error.message)
        }
        setLoading(false);
    };

    const handleVerifyOTP = async () => {
        setError("");
        if (otp.length === 6 && otp == validOtp) {
            try {
                console.log(email);
                const response = await requestPasswordReset(email);
                console.log(response);
                setVerified(true);
                setOpen(true);
                setMessage("OTP verify successfully");
                setSeverity("success");
                setOtp("");
                setOtpSent(false);
            } catch (error) {
                setOpen(true);
                setSeverity("error");
                setMessage(error.message);
                setError(error.message);
            }
        } else {
            setError("Invalid OTP. Please try again.");
        }
    };
    return (
        <>
            {!verified ? <> <DialogContent>
                <p style={{ color: 'red', fontSize: '0.8rem', margin: '0px', padding: '2px', minHeight: '20px' }}>{error}</p>
                <FormControl sx={{ mt: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Email-Id</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={'email'}
                        endAdornment={
                            <Button sx={{ backgroundColor: '#419a41 !important', color: 'white !important', borderRadius: '8px', width: '130px', '&:hover': { backgroundColor: 'green' } }}
                                m={0}
                                onClick={() => handleSendOTP()}
                                disabled={loading || timer != null}>{loading ? <CircularProgress sx={{ width: '28px !important', height: '28px !important', color: 'white !important' }} /> : timer ? `${timer}s` : 'Send OTP'}</Button>
                        }
                        label="Password"
                        sx={{ paddingRight: '8px' }}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl sx={{ mt: 1, width: '100%' }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'otp',
                            maxLength: 6,
                            inputMode: 'numeric',
                            pattern: '[0-9]*'
                        }}
                        placeholder='Recieved OTP'
                        disabled={!otpSent}
                        onChange={(e) => setOtp(e.target.value)}
                        inputRef={inputRef}
                    />
                </FormControl>
            </DialogContent>

                <DialogActions sx={{ padding: "0px 24px 20px 24px", justifyContent: "center" }}>
                    <Button type="submit" variant="contained" className='loginSubmit' onClick={() => handleVerifyOTP()}>
                        Verify OTP
                    </Button>
                </DialogActions>
            </> :
                <Box>
                    <p style={{ fontSize: '5rem', textAlign: 'center' }}>💌</p>
                    <p style={{ padding: '10px 20px 40px 20px', textAlign: 'center', fontSize: '1.1rem', color: '#8062a5' }}>We have e-mailed your password reset-link</p>
                </Box>}

            <Box display="flex" justifyContent={"center"} mt={2}>
                Already have account ? <span style={{ color: 'green', marginLeft: '5px', marginBottom: '10px', cursor: 'pointer' }} onClick={() => hadleForgetPassword(false)}> Login</span>
            </Box>
            <SlideSnackBar message={message} severity={severity} open={open} handleClose={handleClose} />
        </>
    )
}

export default ForgetPassword