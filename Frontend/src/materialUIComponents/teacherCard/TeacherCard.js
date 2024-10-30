import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { List, ListItem } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './teacherCard.css'

export default function TeacherCard({ details }) {
    const [showDetails, setShowDetails] = useState(false);

    const handleMouseEnter = () => {
        setShowDetails(true);
    };

    const handleMouseLeave = () => {
        setShowDetails(false);
    };
    return (
        <Card sx={{ minWidth: 250, position: 'relative', cursor: 'pointer' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <CardMedia
                sx={{ height: 200 }}
                image={details.img}
                title={details.name}
            />
            <CardContent sx={{ padding: '16px 16px 24px', boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.4)' }}>
                <Typography gutterBottom variant="h6" component="div" textAlign='center' fontWeight='bold' mb={1}>
                    {details.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.primary', textAlign: 'center' }}>
                    {details.role}
                </Typography>
            </CardContent>
            {showDetails &&
                <List className='socialHandle'>
                    <ListItem>
                        <InstagramIcon className='socialHandleIcon' />
                    </ListItem>
                    <ListItem>
                        <PinterestIcon className='socialHandleIcon' />
                    </ListItem>
                    <ListItem>
                        <AccountCircleIcon className='socialHandleIcon' />
                    </ListItem>
                </List>
            }
        </Card>
    );
}