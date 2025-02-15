import React from 'react'
import { Grid2, Card, Typography, Box } from '@mui/material';
import welcome from '../assests/welcome.png'

const WelcomeContent = () => {
    return (
        <Box mt={3} mb={3} sx={{display:'flex',gap:'10px'}}>
            <Box sx={{ position: 'relative', flex:1}}>
                <Card sx={{ color: 'black', p: 2, borderRadius: '5px', pr: 7,minHeight:'100%'}}>
                    <Typography variant="h4">Welcome Ms.Teena</Typography>
                    <Typography variant="subtitle1" sx={{ mb: 3, ml: 0.5 }}>
                        Have a Good day.
                    </Typography>
                    <Typography variant="subtitle1" sx={{ ml: 0.5 }}>
                        A wonderful day of learning, growth, and discovery lies ahead.
                    </Typography>
                </Card>
                <img src={welcome} style={{maxHeight:'170px', position: 'absolute', height: '90%', bottom: '5px', right: '-12px', zIndex: "1000" }} />
            </Box>
            <Box sx={{flex:1}}>
                <Card sx={{ color: 'black', p: 2, borderRadius: '5px', pr: 7}}>
                    <Typography variant="h4">Thought of the day</Typography>
                    <Typography variant="subtitle1" sx={{ mt: 3, ml: 0.5 }}>
                    Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.
                    </Typography>
                    <Typography variant="subtitle1" sx={{ ml: 0.5, textAlign:'right'}}>
                        - Albert Schweitzer
                    </Typography>
                </Card>
            </Box>
        </Box>
    )
}

export default WelcomeContent