import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
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

    const isDesktop = useMediaQuery('(min-width:1024px)');
    const isTablet = useMediaQuery('(min-width:768px) and (max-width:1023px)');
    const isMobile = useMediaQuery('(max-width:767px)');

    // Set the `centerSlidePercentage` based on screen size
    const getSlidePercentage = () => {
        if (isDesktop) {
            return 33.33; // Show 3 items on desktop
        }
        else if (isTablet) {
            return 50; // Show 2 items on tablets
        }
        else if (isMobile) {
            return 100; // Show 1 item on mobile
        }
    };

    const getCenterMode = () => {
        return isDesktop ? true : false; // Enable centerMode only on desktops
    };
    return (
        <Box sx={{ margin: "auto" }}>
            <Carousel
                showArrows={true} // Enable the arrows
                infiniteLoop={true}
                showThumbs={false}
                autoPlay={true}
                interval={3000}
                showStatus={false}
                centerMode={getCenterMode}
                centerSlidePercentage={getSlidePercentage()} // Shows items at once
                swipeable={true}
            >

                {items && items.map((item, index) => (
                    <StyledCarouselItem key={`carousel900${index}`}>
                        {item}
                    </StyledCarouselItem>
                ))}


            </Carousel>
        </Box>
    );
};

export default CarouselComponent;
