import React from "react";
import { Button, Typography, Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { styled } from "@mui/system";
import image1 from "../../assests/SchoolActivity.jpg";
import image2 from "../../assests/school-activities.jpg";
import image3 from "../../assests/content-image.webp"
import "./HomePage.css"

const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: "10px",
    overflow: "hidden",
}));

const SchoolActivity = () => {
    return (
        <Box sx={{padding:'10px 20px 50px 20px'}}>
            <div className="SchoolActivityHeading">
                <Typography variant="h4" mb={3} ml={4} fontWeight="bold" fontSize={30}>
                    Inside Sushila Public School
                </Typography>

                <div className="SchoolActivityButtonGroup">
                    <Button variant="outlined" className="SchoolActivityButton">Class Activities</Button>
                    <Button variant="outlined" className="SchoolActivityButton">Events</Button>
                    <Button variant="outlined" className="SchoolActivityButton" style={{backgroundColor:"black",color:"white"}}>Daily Fun</Button>
                </div>
            </div>

            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, md: 8 }}>
                    <StyledPaper style={{ height: "500px" }}>
                        <img
                            src={image1}
                            alt="Large"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </StyledPaper>
                </Grid>

                <Grid item flex={true} size={{ xs: 12, md: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 4 }}>
                            <StyledPaper style={{ height: "242px" }}>
                                <img
                                    src={image2}
                                    alt="Small Top"
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </StyledPaper>
                        </Grid>
                        <Grid item size={{ xs: 5}}>
                            <StyledPaper style={{ height: "242px" }}>
                                <img
                                    src={image3}
                                    alt="Small Bottom"
                                    style={{ width: "100%", height: "100%" }}
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
