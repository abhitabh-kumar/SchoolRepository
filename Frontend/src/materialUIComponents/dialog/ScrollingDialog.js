import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const buttonStyle = {
  backgroundColor: "gainsboro",
  color: 'black',
  borderRadius: '5px',
  marginLeft: '5px',
  "&:hover": {
  backgroundColor: "rgb(64 205 113)",
  color: "white",
},
}

export default function ScrollingDialog({children,title,isClose,isSelect,closeContent,selectContent,open,handleClose}) {
  const [scroll, setScroll] = React.useState('paper');

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        // sx={{margin:'10px'}}
      >
        <DialogTitle id="scroll-dialog-title" sx={{backgroundColor:"#efefef"}}>{title}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            style={{color:'black'}}
          >
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {isClose && <Button onClick={handleClose} sx={buttonStyle}>{closeContent}</Button> }
          {isSelect && <Button onClick={handleClose} sx={buttonStyle}>{selectContent}</Button> }
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}