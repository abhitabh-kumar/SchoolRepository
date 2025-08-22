import React, { useEffect, useState } from 'react'
import { Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FullScreenDialog from '../../materialUIComponents/dialog/FullScreenDialog';
import { examList } from '../../dummyData/exams';
import { studentResult } from '../../dummyData/result';
import { fecthResultByAuthorName, fecthResultByExamId } from '../../services/Result';
import { useSelector } from 'react-redux';
import { getUsername } from '../../services/TokenServices';
import { getExamByAuthorName } from '../../services/Exam';

const Results = () => {
  const isSmallScreen = useMediaQuery("(min-width:700px)");

  const [open, setOpen] = useState(false);
  const [selectedExam,setSelectedExam] = useState(null);
  const [examList,setExamList] = useState(null);
  const [studentResult,setStudentResult] = useState(null);
  const token = useSelector((state) => state.user.token);
  const userName = getUsername(token);

  const handleClickOpen = (exam) => {
    setSelectedExam(exam)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedExam(null);
  };

  const fetchExam = async ()=> {
    try{
      const exams = await getExamByAuthorName(userName,token);
      setExamList(exams.data);
      console.log(exams);
    }catch(error){
      console.log(error.message)
    }
  }
  const fetchResult = async () =>{
    try{
      const fetchResult = await fecthResultByExamId(selectedExam.examId,token)
      setStudentResult(fetchResult.data);
      console.log(fetchResult);
    }catch(error){
      console.log(error.message)
    }
  }
  useEffect(()=>{
    fetchExam();
  },[])
  useEffect(()=>{
    if(selectedExam){
      fetchResult();
    }
  },[selectedExam])

  return (
    <Container maxWidth="md" style={{paddingTop: '1rem' }}>
      <Typography sx={{ paddingLeft: "3px", paddingBottom: '15px', fontSize:'1.2rem', fontWeight:'600'}}> Results </Typography>

      <TableContainer component={Paper} className='reportCardTable'>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#545c71' }}>
              <TableCell></TableCell>
              <TableCell sx={{ color: 'white' }}>Exams</TableCell>
              <TableCell sx={{ color: 'white' }}>Conducted On</TableCell>
              <TableCell sx={{ color: 'white' }}>Class</TableCell>
              <TableCell sx={{ color: 'white' }}>Views</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {examList && examList.map((exam, index) => (
            <TableRow key={`${index}reportCard3425`}>
              <TableCell>{`#${index + 1}`}</TableCell>
              <TableCell>{exam.examName}</TableCell>
              <TableCell>{exam.startTime}</TableCell>
              <TableCell>{exam.grade}</TableCell>
              <TableCell>
                <IconButton color="primary" onClick={() => handleClickOpen(exam)}>
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <FullScreenDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} title={selectedExam == null ? "Exam Result" : selectedExam.subject}>
        <TableContainer component={Paper} className='reportCardTable'>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#545c71' }}>
                <TableCell></TableCell>
                <TableCell sx={{ color: 'white' }}>Student Name</TableCell>
                <TableCell sx={{ color: 'white' }}>Marks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentResult && studentResult.map((item, index) => (
              <TableRow key={`${index}student234Result`}>
                <TableCell>{`#${index + 1}`}</TableCell>
                <TableCell>{item.student.name}</TableCell>
                <TableCell>{item.obtainedMarks} / {item.totalMarks}</TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </FullScreenDialog>
    </Container>
  )
}

export default Results