import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, handleClickOpen, handleClose, title, children }) {

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', position:'fixed', backgroundColor:"#1f2f4a",}}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography sx={{ color: 'white' }}>{title}</Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ color: 'white', width: '30px', height: '30px' }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="dialogContainer" style={{padding:"80px 10px 0px 10px"}}>
          {children}
        </div>
      </Dialog>
    </React.Fragment>
  );
}