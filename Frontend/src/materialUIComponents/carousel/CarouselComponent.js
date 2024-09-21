import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

const StyledCarouselItem = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    margin: theme.spacing(2), // Adding gap between items
}));

const CarouselComponent = ({ items }) => {
    return (
        <Box sx={{ margin: "auto" }}>
            <Carousel
                showArrows={true} // Enable the arrows
                infiniteLoop={true}
                showThumbs={false}
                autoPlay={true}
                interval={3000}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={33.33} // Shows 3 items at once
                swipeable={true}
            >

                {items && items.map((item, index) => (
                    <StyledCarouselItem>
                        {item}
                    </StyledCarouselItem>
                ))}


            </Carousel>
        </Box>
    );
};

export default CarouselComponent;
