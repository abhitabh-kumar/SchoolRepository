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
    backgroundColor: "#f5fdff",
    color: '#1f6d00',
    borderRadius: '5px',
    marginLeft: '5px',
    boxShadow:'black 0px 1px 2px'
}
const endedButton = {
    maxWidth: "150px",
    backgroundColor: "#f5fdff",
    color: 'rgb(109 0 0)',
    borderRadius: '5px',
    marginLeft: '5px',
    boxShadow:'black 0px 1px 2px'
}
const pendingExam = { 
    maxWidth: 345, 
    minHeight: 150, 
    borderRadius: '7px', 
    backgroundColor: 'darkcyan', 
    background: 'linear-gradient(135deg,rgba(26, 183, 126, 0.66),rgba(102, 232, 184, 0.54),rgba(137, 225, 177, 0.46),rgba(5, 115, 60, 0.57))',
    backdropFilter: 'blur(200px)',
    border: '1px solid rgba(51, 133, 115, 0.53)', 
    color: '#005c50',
    textShadow:'-1px 1px 1px #ffffff'
}
const finishedExam = {
    maxWidth: 345, 
    minHeight: 150, 
    borderRadius: '7px', 
    backgroundColor: '#ba2828', 
    border: '1px solid #a82525', 
    background: 'linear-gradient(135deg,rgba(190, 0, 0, 0.52),rgba(225, 36, 36, 0.49),rgba(210, 91, 67, 0.34),rgba(213, 27, 2, 0.69))',
    backdropFilter: 'blur(200px)',
    border: '1px solid rgb(175 97 97 / 53%)', 
    color: '#4a0404',
    textShadow:'-1px 1px 1px #ffffff'
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
            <Card sx={isActive ? pendingExam : finishedExam} style={{ height: isMobile ? '150px' : 'fit-content' }}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" style={{fontWeight:'610'}}>
                        {examDetails.examName}
                    </Typography>
                    <Typography variant="body2">
                        conducted on : {examDetails.startTime}
                    </Typography>
                </CardContent>
                <CardActions sx={{ cursor: isActive ? 'default' : 'no-drop' }}>
                    {isActive ? <Button style={buttonStyle} onClick={handleClickOpen}>Start</Button> : <Button style={endedButton} disabled>Finish</Button>}
                </CardActions>
            </Card>
            <SlideInAlertDialog open={open} handleClose={handleClose} startTest={startTest}
                isCancel={true} isConfirm={true} cancelMess={"Cancel"} confirmMess={"Start"}
                title={"Are you ready for your Test?"}>
                Best Wishes for Your Exams!
            </SlideInAlertDialog>
        </Fragment>
    );
}