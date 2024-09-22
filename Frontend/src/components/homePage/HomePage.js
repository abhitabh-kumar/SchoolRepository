import React from 'react'
import ResponsiveAppBar from '../../materialUIComponents/navbar/ResponsiveAppBar'
import "./HomePage.css"
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import { Box, Button, Grid2, Typography } from '@mui/material'
import CarouselComponent from '../../materialUIComponents/carousel/CarouselComponent';
import Navigate from '../../materialUIComponents/navigation/Navigate';
import MediaCard from '../../materialUIComponents/mediaCard/mediaCard';
import SchoolActivity from './SchoolActivity';
import BelievableComponent from './BelievableComponent';
import OurTeachers from './OurTeachers';
import FAQ from '../FAQ/FAQ';
import BlogCard from '../../materialUIComponents/blogCard/BlogCard';
import Footer from '../footer/Footer';

const HomePage = () => {
    const ComponentOne = () => <div>Component One</div>;

    const componentsArray = [
        <MediaCard />,
        <MediaCard />,
        <MediaCard />,
        <MediaCard />,
        <MediaCard />,
    ];
    const blogPosts = [
        {
            image: "https://via.placeholder.com/600x400",
            description: "Understanding the basics of React and how to build reusable components.",
            author: "John Doe",
            date: "24 Apr"
        },
        {
            image: "https://via.placeholder.com/600x400",
            description: "A comprehensive guide to JavaScript ES6 features and beyond.",
            author: "Jane Smith",
            date: "29 Jun"
        }]
    return (
        <>
            <ResponsiveAppBar />
            <div className="HomePageContainer">
                <div className="landingPage">
                    <p className='landedPara' style={{ marginTop: '25px' }}>Unleash Creativity,</p>
                    <p className='landedPara'>Foster Growth, Build Friendships</p>
                    <div className="joinUs">
                        <Button id="joinNow">Join Now</Button>
                        <Button id="viewSchool">
                            <SlowMotionVideoIcon />
                            View Our School
                        </Button>
                    </div>
                </div>
                <div className="exploreMore">
                    <div className="exploreDesc">
                        <h1>Explore and Grow <br />with Shushila Public School</h1>
                        <p style={{ color: "#919191" }}>we provide vibrant and nurturing enivornment for <br /> young learners to explore and grow through
                            personalized <br /> attention and innovative methods.</p>
                        <Button id='learnMore'>
                            Learn more
                        </Button>
                    </div>
                    <div className="explorePhoto"></div>
                </div>
                <div className="homeCoursel">
                    <Typography variant="h3" textAlign="center" mb={3} sx={{ fontSize: '3rem', fontWeight: 'bold' }}>
                        Discover our <br />professional classes
                    </Typography>
                    <CarouselComponent items={componentsArray} />
                </div>
                <SchoolActivity />
                <BelievableComponent />
                <OurTeachers />
                <Box sx={{ padding: '40px 80px', backgroundColor: "#ffeee4" }} mt={3}>
                    <FAQ />
                </Box>
                <Box sx={{ padding: '40px 80px' }} mt={2}>
                    <div className="BlogContent">
                        <Typography variant="h2" textAlign="center" mb={3} sx={{ fontWeight: 'bold' }}>
                            From our blog
                        </Typography>
                        <Button className='articleButton'>See All Articles</Button>
                    </div>
                    <Grid2 container mt={3}>
                        {blogPosts &&
                            blogPosts.map((item, index) => {
                                return <Grid2 item size={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <BlogCard item={item} key={`blog001${index}`} />
                                </Grid2>
                            })}
                    </Grid2>
                </Box>
            <Footer/>
            </div>
            <Navigate />
        </>
    )
}

export default HomePage