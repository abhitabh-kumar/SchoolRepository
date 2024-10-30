import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import card from "../../assests/card.png"
import './mediaCard.css'

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 180 }}
                image={card}
                title="Little Explorers"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
                    Little Explorers
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                        color: 'text.primary',
                        '& svg': {
                            m: 1,
                        },
                    }}
                >
                    <div className="cardDetails">
                        <p className='cardBoxHeading'>Time</p>
                        <p className='cardBoxHeadingDetails'>07:00 AM</p>
                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <div className="cardDetails">
                        <p className='cardBoxHeading'>Quota</p>
                        <p className='cardBoxHeadingDetails'>10</p>
                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <div className="cardDetails">
                        <p className='cardBoxHeading'>Age</p>
                        <p className='cardBoxHeadingDetails'>1-2 y.o.</p>
                    </div>
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small" className='bookClass'>Book Class</Button>
            </CardActions>
        </Card>
    );
}
