import React from 'react'
import ResponsiveAppBar from '../../materialUIComponents/navbar/ResponsiveAppBar'
import "./HomePage.css"
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import { Button, Typography } from '@mui/material'
import CarouselComponent from '../../materialUIComponents/carousel/CarouselComponent';
import Navigate from '../../materialUIComponents/navigation/Navigate';
import MediaCard from '../../materialUIComponents/mediaCard/mediaCard';
import SchoolActivity from './SchoolActivity';

const HomePage = () => {
    const ComponentOne = () => <div>Component One</div>;

    const componentsArray = [
        <MediaCard/>,
        <MediaCard/>,
        <MediaCard/>,
        <MediaCard/>,
        <MediaCard/>,
    ];
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
                    <Typography variant="h4" textAlign="center" mb={3} sx={{fontSize:'3rem',fontWeight:'bold'}}>
                        Discover our <br/>professional classes
                    </Typography>
                    <CarouselComponent items={componentsArray}/>
                </div>
                <SchoolActivity/>
            </div>
            <Navigate />
        </>
    )
}

export default HomePage