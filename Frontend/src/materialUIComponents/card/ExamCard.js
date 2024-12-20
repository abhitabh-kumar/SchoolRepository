import { Fragment, React, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import SlideInAlertDialog from '../dialog/SlideInAlertDialog';

const buttonStyle = {
    maxWidth: "150px",
    backgroundColor: "rgb(137 255 178)",
    color: '#1f6d00',
    borderRadius: '5px',
    marginLeft: '5px'
}
const endedButton = {
    maxWidth: "150px",
    backgroundColor: "rgb(255 137 137)",
    color: 'rgb(109 0 0)',
    borderRadius: '5px',
    marginLeft: '5px',
}

export default function ExamCard({ examDetails, isActive }) {
    const isMobile = useMediaQuery("(min-width:700px)");
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const startTest = () => {
        const url = `/exam?examId=${examDetails.examId}`;
        window.open(url, "_blank", "noopener,noreferrer")
        setOpen(false);
    }


    return (
        <Fragment>
            <Card sx={{ maxWidth: 345, minHeight: 150, borderRadius: '7px' }} style={{ height: isMobile ? '150px' : 'fit-content' }}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {examDetails.subject}
                    </Typography>
                    <Typography variant="body2">
                        Conducted on : {examDetails.startTiming}
                    </Typography>
                </CardContent>
                <CardActions sx={{ cursor: isActive ? 'default' : 'no-drop' }}>
                    {isActive ? <Button style={buttonStyle} onClick={handleClickOpen}>Start</Button> : <Button style={endedButton} disabled>Finish</Button>}
                </CardActions>
            </Card>
            <SlideInAlertDialog open={open} handleClose={handleClose} startTest={startTest}/>
        </Fragment>
    );
}