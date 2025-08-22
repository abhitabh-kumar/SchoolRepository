import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, useMediaQuery } from '@mui/material'
import ExamCard from '../../materialUIComponents/card/ExamCard'
import { useSelector } from 'react-redux'
import { getUsername } from '../../services/TokenServices'
import { getExamByClass } from '../../services/Exam'

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
    padding: "10px",
    justifyContent:'center',
}

const TestsPage = () => {
  const isMobile = useMediaQuery("(min-width:700px)");
  const token = useSelector((state)=>state.user.token);
  const [loading,setLoading] = useState(false);
  const [examList,setExamList] = useState(null);
  const fetchData = async ()=> {
    setLoading(true);
    try{
      const username = getUsername(token);
      const response = await getExamByClass(username,token);
      setExamList(response.data);
    }catch(error){
      console.log(error.message);
    }
    setLoading(false);
  }
  const activeExam = (endTime)=>{
    const currentTime = new Date();
    const examEndTime = new Date(endTime);
    return (currentTime < examEndTime);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <Box sx={isMobile ? pageStyle : mobilePageStyle}>
    {loading && <CircularProgress sx={{ width: '28px !important', height: '28px !important',margin:'auto'}} />}
      {
        examList && examList.map((exam,id)=>{
          return <ExamCard 
          examDetails={exam} 
          key={exam.examId+"231"+id} 
          isActive={activeExam(exam.endTime)}/>
        })
      }
      {
        !loading && !examList && <p style={{textAlign:'center',width:'100%',marginTop:'10px'}}>Exam is not create yet for your class</p> 
      }
    </Box>
  )
}

export default TestsPage