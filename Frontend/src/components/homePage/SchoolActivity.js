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
        <Box sx={{ padding: '20px 20px 50px 20px' }}>
            <Grid container justifyContent={"space-around"}>
                <Grid item size={{ md: 5 }}>
                    <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'left' }}>
                        Inside Sushila Public School
                    </Typography>
                </Grid>
                <Grid item size={{ md: 5 }} sx={{"display":"flex","gap":"10px","flexWrap":"wrap","justifyContent":"center"}} mb={3}>
                    <Button variant="outlined" className="SchoolActivityButton">Class Activities</Button>
                    <Button variant="outlined" className="SchoolActivityButton">Events</Button>
                    <Button variant="outlined" className="SchoolActivityButton" style={{ backgroundColor: "black", color: "white" }}>Daily Fun</Button>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, md: 8 }}>
                    <StyledPaper style={{ height: "500px" }}>
                        <img
                            src={image1}
                            alt="Large"
                            style={{ width: "100%", height: "100%" ,objectFit: "cover"}}
                        />
                    </StyledPaper>
                </Grid>

                <Grid item size={{ md: 4, xs:12 }}>
                    <Grid container spacing={2}>
                        <Grid item sx={{width:"100%"}}>
                            <StyledPaper style={{ height: "242px" }}>
                                <img
                                    src={image2}
                                    alt="Small Top"
                                    style={{ width: "100%", height: "100%",objectFit: "cover" }}
                                />
                            </StyledPaper>
                        </Grid>
                        <Grid item sx={{width:"100%"}}>
                            <StyledPaper style={{ height: "242px" }}>
                                <img
                                    src={image3}
                                    alt="Small Bottom"
                                    style={{ width: "100%", height: "100%",objectFit: "cover"}}
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
