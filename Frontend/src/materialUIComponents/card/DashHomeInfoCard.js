import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'

const DashHomeInfoCard = ({title,description,children,activeColor}) => {
    return (
        <Card sx={{maxWidth:'250px',minWidth:'200px',borderRadius:'5px',height:'90px'}}>
            <CardActionArea
                data-active=''
                sx={{
                    height: '100%',
                    '&[data-active]': {
                        backgroundColor: 'white',
                        '&:hover': {
                            backgroundColor: activeColor,
                        },
                    },
                }}
            >
                <CardContent sx={{ height: '100%', display:'flex',flexDirection:'row',gap:'10px'}}>
                    {
                        children
                    }
                    <Box>
                        <Typography variant="h5" component="div">
                            {title} 
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            {description}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default DashHomeInfoCard