import { Alert, Slide, Snackbar } from '@mui/material'
import React, { useEffect } from 'react'

const SlideSnackBar = ({ message, severity, open, handleClose}) => {
    return (
        <Snackbar
            open={open}
            TransitionComponent={SlideTransition}
            message={message}
            key={SlideTransition.name}
            autoHideDuration={2000}
            onClose={handleClose}
            anchorOrigin={{ "vertical": "bottom", "horizontal": "center" }}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                sx={{
                    width: "100%",
                    color: "white", // Text color
                    backgroundColor: severity === "success" ? "#2E7D32" : "#D32F2F", // Custom colors
                    fontWeight: "bold",
                }}
            >
                {message}
            </Alert>
        </Snackbar>

    )
}
function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

export default SlideSnackBar