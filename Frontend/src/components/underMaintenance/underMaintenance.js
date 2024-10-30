import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ConstructionIcon from '@mui/icons-material/Construction';

function UnderMaintenance() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Icon */}
      <ConstructionIcon style={{ fontSize: 100, color: "#ff9800" }} />
      
      {/* Title */}
      <Typography variant="h3" component="h1" gutterBottom  textAlign={"center"}>
        We'll be back soon!
      </Typography>

      {/* Message */}
      <Typography variant="h6" component="p" color="#767676" mb={3} textAlign={"center"}>
        Our website is currently under maintenance. We apologize for the inconvenience.
      </Typography>
    </Box>
  );
}

export default UnderMaintenance;
