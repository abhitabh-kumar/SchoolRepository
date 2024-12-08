import React, { useState, useEffect } from 'react';
import { getStudentByName } from '../components/services/Api'; 
import { Container, Box, Typography, Grid2, Avatar, Badge, useMediaQuery } from "@mui/material";
import authHeader from '../components/services/authHeader';
import getUsername from '../components/services/tokenServices';
import ImageUploadDialog from '../materialUIComponents/dialog/ImageUploadDialog';

import getUsernameFromToken from "../components/services/tokenService";
import authHeader from "../components/services/authHeader";

const Profile = () => {

  const isSmallScreen = useMediaQuery("(min-width:700px)");

  const [formData, setFormData] = useState({
    userName: '',
    name: '',
    password: '',
    emailId: '',
    rollNo: '',
    grade: '',
    motherName: '',
    fatherName: '',
    age: '',
    mobileNumber: '',
    address: { state: '', zipCode: '', city: '' , street:''},
    dateOfBirth: '',
    dateOfJoining: '',
    roles: 'STUDENT'
  });
  
  const [error, setError] = useState('');
  const [openDialog,setOpenDialog] = useState(false);


  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const token = authHeader();
        const username = getUsername(token);
        const response = await getStudentByName(username, token);
        const data = response.data.data;

        setFormData({
          userName: data.userName || '',
          name: data.name || '',
          password: data.password || '',
          emailId: data.emailId || '',
          rollNo: data.rollNo || '',
          grade: data.grade || '', 
          motherName: data.motherName || '',
          fatherName: data.fatherName || '',
          age: data.age || '',
          mobileNumber: data.mobileNumber || '',
          parentEmailId: data.parentEmailId || '',
          bloodGroup: data.bloodGroup || '',
          address: data.address || '',
          dateOfBirth: data.dateOfBirth || '', 
          dateOfJoining: data.dateOfJoining || '',
          roles: 'STUDENT'
        });
      } catch (err) {
        console.error('Error fetching student data:', err);
        setError('Failed to fetch student data.');
      }
    };
    
    fetchStudentData();
  }, []);

  return (
    <Container maxWidth="md" style={isSmallScreen ? {paddingTop:'3rem'}: {paddingTop:'5rem'}}>
      <Grid2 container spacing={3}>
        <Grid2 item size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "16px",
            }}
            onClick={() => handleClickOpen() }
          >

            <Badge color="secondary" badgeContent={"+"} overlap="circular">
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: "#1976d2",
                  marginBottom: "8px",
                  cursor: 'pointer'
                }}
              />
            </Badge>
          </Box>
          <Box
            sx={{
              marginTop: "16px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
              Registered on:
            </Typography>
            <Typography variant="body2">{formData.dateOfJoining}</Typography>
          </Box>
        </Grid2>

        <Grid2 item size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "16px",
              backgroundColor: "#f9f9f9",
              width: "100%",
              height: "100%"
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
              Personal details
            </Typography>
            <Box sx={{ marginBottom: "12px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                Name: <span style={{ fontWeight: "normal" }}>{formData.name}</span>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "12px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                Email: <span style={{ fontWeight: "normal" }}>{formData.emailId}</span>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "12px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                Class: <span style={{ fontWeight: "normal" }}>{formData.grade}</span>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "12px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                Roll No: <span style={{ fontWeight: "normal" }}>{formData.rollNo}</span>
              </Typography>
            </Box>
          </Box>
        </Grid2>

        <Grid2 item size={{ xs: 12, md: 12 }}>
          <Box
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "16px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
              Bio
            </Typography>
            <Box sx={{ marginBottom: "12px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                DOB: <span style={{ fontWeight: "normal" }}>{formData.dateOfBirth}</span>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "12px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                Contact no: <span style={{ fontWeight: "normal" }}>{formData.mobileNumber}</span>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "12px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                Father Name: <span style={{ fontWeight: "normal" }}>{formData.fatherName}</span>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "12px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                Mother Name: <span style={{ fontWeight: "normal" }}>{formData.motherName}</span>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "12px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                Address : <span style={{ fontWeight: "normal" }}>{formData.address.city}, {formData.address.state}</span>
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
      <ImageUploadDialog open={openDialog} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
    </Container>
  );
};

export default Profile;
