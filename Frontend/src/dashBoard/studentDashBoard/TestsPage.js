import React from 'react'
import UnderMaintenance from '../../components/underMaintenance/underMaintenance'
import { examList } from '../../dummyData/exams'
import { Box, useMediaQuery } from '@mui/material'
import ExamCard from '../../materialUIComponents/card/ExamCard'

const pageStyle = {
  display:"flex",
  flexWrap:"wrap",
  gap:"30px", 
  padding: "10px" 
}
const mobilePageStyle = {
    height:"100vh",
    display:"flex",
    flexWrap:"wrap",
    gap:"30px", 
    padding: "90px 10px 10px 10px",
    justifyContent:'center',
}

const TestsPage = () => {
  const isMobile = useMediaQuery("(min-width:700px)");
  return (
    <Box sx={isMobile ? pageStyle : mobilePageStyle}>
      {
        examList.map((exam,id)=>{
          return <ExamCard 
          examDetails={exam} 
          key={exam.examId+"231"+id} 
          isActive={id==2 ? true: false}/>
        })
      }
    </Box>
  )
}

export default TestsPage