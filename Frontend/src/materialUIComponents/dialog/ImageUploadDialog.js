import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Avatar, Badge, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import authHeader from '../../components/services/authHeader';
import axios from 'axios';
import getUsername from '../../components/services/tokenServices';

export default function ImageUploadDialog({ open, handleClose, handleClickOpen }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadImg,setUploadImg] = useState(null);

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
        console.log("hii");
        const token = authHeader();
        const userName = getUsername(token);
        if (!uploadImg || !userName) {
            return; // Handle error (e.g., show a message)
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
            console.log("Upload successful:", response.data);
            // Handle success (e.g., show a message or update UI)
        } catch (error) {
            console.error("Upload failed:", error);
            // Handle error (e.g., show a message)
        }
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
                    <IconButton onClick={handleClose} sx={{ width: "25px", height: "25px", bgcolor: "#e0e0e0" }}>
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
                        sx={{ mt: 2 }}
                        disabled={!selectedImage}
                    >
                        Upload
                    </Button>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
