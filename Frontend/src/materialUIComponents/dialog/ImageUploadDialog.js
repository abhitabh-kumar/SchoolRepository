import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Avatar, Badge, Box, CircularProgress, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import {getUsername} from '../../services/TokenServices';
import { useSelector } from 'react-redux';
import SlideInAlertDialog from './SlideInAlertDialog';
import SlideSnackBar from '../snackbar/SlideSnackBar';

export default function ImageUploadDialog({ open, handleClose, handleClickOpen }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadImg,setUploadImg] = useState(null);
    const [alert,setAlert] = useState(false);
    const [message,setMessage] = useState("");
    const [progress,setProgress] = useState(false);
    const [severity,setSeverity] = useState("error");
    const token = useSelector((state) => state.user.token)

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setUploadImg(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadImage = async (event) => {
        event.preventDefault();
        setProgress(true)
        const userName = getUsername(token);
        if (!uploadImg || !userName) {
            setProgress(false);
            return; 
        }
        const formData = new FormData();
        formData.append('profilePic', uploadImg);
        formData.append('username', userName);

        try {
            const response = await axios.post('http://localhost:8080/user/uploadPic', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": token
                },
            });
            setMessage("Profile Update Successfully");
            setSeverity("success");
            setAlert(true);
            handleClose();
        } catch (error) {
            console.error("Upload failed:", error);
            setMessage(error.message);
            setSeverity("error");
            setAlert(true);
        }
        setProgress(false);
    };

    return (
        <React.Fragment>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    Upload an image
                    <IconButton onClick={handleClose} sx={{ width: "25px", height: "25px", bgcolor: "#e0e0e0", marginLeft:"20px"}}>
                        <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <input
                        accept="image/*"
                        type="file"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                        id="upload-button"
                    />
                    <label htmlFor="upload-button">
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                border: "1px solid #e0e0e0",
                                borderRadius: "8px",
                                padding: "16px",
                            }}
                            onClick={() => handleClickOpen()}
                        >

                            <Badge color="secondary" badgeContent={"+"} overlap="circular">
                                {selectedImage ?
                                    <img
                                        src={selectedImage}
                                        alt="Preview"
                                        style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '8px', cursor: 'pointer' }}
                                    />
                                    : <Avatar
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            backgroundColor: "#1976d2",
                                            marginBottom: "8px",
                                            cursor: 'pointer'
                                        }}
                                    />}
                            </Badge>
                        </Box>
                    </label>
                    <Button
                        variant="contained"
                        onClick={uploadImage}
                        sx={{ mt: 2, backgroundColor:'#122965', '&:hover':{backgroundColor:'#122965'}}}
                        disabled={!selectedImage}
                    >
                      {progress ? <CircularProgress sx={{ width: '33px !important', height: '33px !important', color: 'white !important' }} /> : "Upload"}
                    </Button>
                </DialogContent>
            </Dialog>
            <SlideSnackBar message={message} severity={severity} open={alert} handleClose={()=> setAlert(false)}/>
        </React.Fragment>
    );
}
