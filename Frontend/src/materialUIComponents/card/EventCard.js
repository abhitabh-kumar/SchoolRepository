import React from "react";
import { Card, CardContent, Typography, Grid2, Box } from "@mui/material";
import { AccessTime as AccessTimeIcon } from "@mui/icons-material";

const EventCard = () => {
    return (
        <Card sx={{ maxWidth: 350, borderRadius: "16px", boxShadow: 3, p: 2, minHeight: '120px', margin: '0px 15px', borderRadius: '5px' }}>
            <Grid2 container alignItems="center">
                {/* Day Section */}
                <Grid2 item xs={3} sx={{position:'relative',top:'-12px'}}>
                    <Box sx={{ backgroundColor: "#ffc116", width: 'calc(100% + 1.5px)', height: '20px', position: 'relative', top: '5px', borderRadius: '8px 8px 0px 0px', left:'-1px'}}></Box>
                    <Box
                        sx={{
                            backgroundColor: "white",
                            textAlign: "center",
                            borderRadius: "0px 0px 8px 8px",
                            py: 1,
                            px: 2,
                            boxShadow: '0px 0px 1px black'
                        }}
                    >
                        <Typography variant="h6" >
                            6
                        </Typography>
                        <Typography variant="body2">
                            Feb
                        </Typography>
                    </Box>
                </Grid2>

                {/* Event Details Section */}
                <Grid2 item xs={9}>
                    <CardContent sx={{ padding: "0 8px" }}>
                        <Typography variant="body1" fontWeight="600" mb={1}>
                            School President Elections
                        </Typography>
                        <Typography variant="body2" color="primary">
                            11:00 AM - 12:30 PM
                        </Typography>
                        <Box display="flex" alignItems="center" gap={1} mt={1} sx={{ padding: '5px', borderRadius: "5px", backgroundColor: "#ffc0c0", width: 'fit-content' }}>
                            <AccessTimeIcon fontSize="small" color="disabled" />
                            <Typography variant="caption" color="#5e5e5e" mr={1}>
                                Today
                            </Typography>
                        </Box>
                    </CardContent>
                </Grid2>
            </Grid2>
        </Card>
    );
};

export default EventCard;
