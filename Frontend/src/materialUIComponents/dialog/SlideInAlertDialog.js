import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


const buttonStyle = {
  maxWidth: "150px",
  backgroundColor: "rgb(0 192 149)",
  color: 'white',
  borderRadius: '5px',
  marginLeft: '5px',
  "&:hover": {
    backgroundColor: "#137555",
    color: "white",
  },
}
const imageStyle = {
  width: '90px', 
  height: '90px', 
  borderRadius: '50%', 
  background: '#00c095', 
  color: 'white', 
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center', 
  textAlign : 'center', 
  marginTop:'-40px',
  marginLeft:'auto',
  marginRight : 'auto'
}


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SlideInAlertDialog({ children, title, open, handleClose, startTest, isCancel, isConfirm, cancelMess, confirmMess }) {

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div style={imageStyle}>
        <QuestionMarkIcon sx={{ fontSize: '3rem' }} />
      </div>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description" sx={{ color: 'black' }}>
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {isCancel && <Button onClick={handleClose} sx={buttonStyle} style={{ color: 'white', backgroundColor: 'rgb(156 156 156)' }}>{cancelMess}</Button>}
        {isConfirm && <Button onClick={startTest} sx={buttonStyle}>{confirmMess}</Button>}
      </DialogActions>
    </Dialog>
  );
}