import React from "react";
import { Button, Typography, Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { styled } from "@mui/system";
import image1 from "../../assests/SchoolActivity.jpg";
import image2 from "../../assests/school-activities.jpg";
import image3 from "../../assests/content-image.webp"
import "./HomePage.css"

const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: "20px",
    overflow: "hidden",
}));

const SchoolActivity = () => {
    return (
        <Box sx={{padding:'20px'}}>
            <div className="SchoolActivityHeading">
                <Typography variant="h4" mb={3} ml={4} fontWeight="bold" fontSize={30}>
                    Inside Sushila Public School
                </Typography>

                <div className="SchoolActivityButtonGroup">
                    <Button variant="outlined" className="SchoolActivityButton">Class Activities</Button>
                    <Button variant="outlined" className="SchoolActivityButton">Events</Button>
                    <Button variant="outlined" className="SchoolActivityButton">Daily Fun</Button>
                </div>
            </div>

            <Grid container flex spacing={2}>
                <Grid item xs={6} md={8}>
                    <StyledPaper>
                        <img
                            src={image1}
                            alt="Large"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </StyledPaper>
                </Grid>

                <Grid item xs={6} md={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <StyledPaper>
                                <img
                                    src={image2}
                                    alt="Small Top"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </StyledPaper>
                        </Grid>
                        <Grid item xs={12}>
                            <StyledPaper>
                                <img
                                    src={image3}
                                    alt="Small Bottom"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </StyledPaper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SchoolActivity;
