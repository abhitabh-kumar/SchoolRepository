import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid from "@mui/material/Grid2"


const BeliefsComponent = () => {
    const beliefs = [
        { title: 'Community', description: 'Building supportive and inclusive community.', icon: '🎉' },
        { title: 'Respect', description: 'Teaching respect for oneself and other children.', icon: '🤝' },
        { title: 'Creativity', description: 'Encouraging creative expression and innovation.', icon: '🎨' },
        { title: 'Growth', description: 'Promoting personal growth and knowledge learning.', icon: '📈' },
    ];

    return (
        <Box
            sx={{
                backgroundColor: '#FFD700', // No yellow background, white for this component
                p: 4,
            }}
        >
            <Grid container spacing={2}>
                <Grid item size={{ md: 8 }}>
                    <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 4, textAlign:'left' }} pl={3}>
                        What we believe in Sushila Public School
                    </Typography>

                </Grid>
                <Grid item size="grow">
                    <Typography variant="body1" sx={{ mb: 4,justifyContent:'flex-end'}}>
                        Discover how our kindergarten fosters a love for learning through innovative early education.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                {beliefs.map((belief, index) => (
                    <Grid item size={{ xs: 12, md: 6 }} key={index} flex={true}>
                        <Card style={{maxWidth:"450px",margin:'auto'}}>
                            <CardContent>
                                <Typography variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <span role="img" aria-label={belief.title} style={{ marginRight: '8px', fontSize: '24px' }}>
                                        {belief.icon}
                                    </span>
                                    {belief.title}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    {belief.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

// YellowCurveComponent (with upward curve)
const YellowCurveComponent = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#FFD700',
                height: '100px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'white',
                    height: '150px',
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    clipPath: 'ellipse(60% 50% at 50% 100%)', // Perfect ellipse for upward curve
                }}
            />
        </Box>
    );
};

const BelievableComponent = () => {
    return (
        <div>
            <BeliefsComponent />
            <YellowCurveComponent />
        </div>
    );
};

export default BelievableComponent;
