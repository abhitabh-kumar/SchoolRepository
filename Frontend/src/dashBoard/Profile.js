// App.js
import React, { useEffect } from "react";
import { Container, Box, Typography, Grid2, Avatar, Badge, useMediaQuery } from "@mui/material";
import getUsernameFromToken from "../components/services/tokenService";
import authHeader from "../components/services/authHeader";

const Profile = () => {

  const isSmallScreen = useMediaQuery("(min-width:700px)");
  useEffect(()=>{
    const token = authHeader();
    const username = getUsernameFromToken(token);
    console.log(username);
  },[])
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
            <Typography variant="body2">26 August, 2020</Typography>
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
                Name: <span style={{ fontWeight: "normal" }}>Ms. XYZ</span>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "12px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                Contact no: <span style={{ fontWeight: "normal" }}>98XXXXXXX9</span>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "12px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                Email: <span style={{ fontWeight: "normal" }}>xyz@gmail.com</span>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "12px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                Password: <span style={{ fontWeight: "normal" }}>XXXXXXXX</span>
              </Typography>
            </Box>
          </Box>
        </Grid2>

        <Grid2 item xs={12}>
          <Box
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "16px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
              Bio
            </Typography>
            <Typography variant="body2">
              Lörem ipsum sara dialören därför att bokstav teran är neostik laskapet
              autonöpunktig kroliga. Vapossade självka rantän pompekenskap carpa. Lörem ipsum
              sara dialören därför att bokstav teran är neostik laskapet autonöpunktig kroliga.
              Vapossade självka rantän pompekenskap carpa.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Profile;
