import { Box, Button, DialogActions, DialogContent, FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React from 'react'

const ForgetPassword = () => {
    return (
        <>
            <DialogContent>
                <FormControl sx={{ mt: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Email-Id</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={'email'}
                        endAdornment={
                            <Button sx={{ backgroundColor: '#419a41', color: 'white', borderRadius: '8px', width: '130px', '&:hover': { backgroundColor: 'green' } }} m={0}>Send OTP</Button>
                        }
                        label="Password"
                        sx={{ paddingRight: '8px' }}
                    />
                </FormControl>
                <FormControl sx={{ mt: 1,width:'100%'}} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'otp',
                        }}
                        placeholder='Recieved OTP'
                    />
                </FormControl>
            </DialogContent>

            <DialogActions sx={{ padding: "0px 24px 20px 24px", justifyContent: "center" }}>
                <Button type="submit" variant="contained" className='loginSubmit'>
                    Vrefiy OTP
                </Button>
            </DialogActions>
            <Box display="flex" justifyContent={"center"} mt={2}>
                Already have account ? <span style={{ color: 'green', marginLeft: '5px', marginBottom: '10px', cursor: 'pointer' }}> Login</span>
            </Box>
        </>
    )
}

export default ForgetPassword