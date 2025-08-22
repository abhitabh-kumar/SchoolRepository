import React, { useEffect, useState } from 'react'
import UnderMaintenance from '../components/underMaintenance/underMaintenance'
import { Box, Container, Typography } from '@mui/material'
import { BorderLeft, Padding } from '@mui/icons-material'

const notificationBox = {
    boxShadow : "0px 0px 2px #929292",
    padding: "10px",
    borderRadius : "2px",
    borderLeft : "3px solid #00ad00"
}
const Announcement = ({announcement}) => {
  return (
    <Container sx={{display:"flex",flexDirection:"column",gap:"20px",paddingTop:'30px'}}>
      {
        announcement.map((item,index) => {
          return <Box key={`announcement39${index}40`} sx={notificationBox}>
            <Typography sx={{fontWeight:"bold",marginLeft:"8px",fontSize:'1.1rem'}}>{item.header}</Typography>
            <p style={{fontSize:'0.85rem'}}>{item.details}</p>
          </Box>
        })
      }
    </Container>
  )
}

export default Announcement