import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const buttonStyle = {
    maxWidth: "150px",
    backgroundColor: "rgb(137 255 178)",
    color: '#1f6d00',
    borderRadius: '5px',
    marginLeft: '5px',
    "&:hover": {
    backgroundColor: "rgb(64 205 113)",
    color: "white",
  },
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SlideInAlertDialog({open,handleClose,startTest}) {

  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you ready for your Test?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" sx={{color:'black'}}>
             Best Wishes for Your Exams! 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={buttonStyle} style={{color:'white', backgroundColor:'rgb(156 156 156)'}}>Cancel</Button>
          <Button onClick={startTest} sx={buttonStyle}>Start</Button>
        </DialogActions>
      </Dialog>
  );
}