import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  useMediaQuery,
  Container,
  Typography,
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import './reportCard.css';
import ScrollingDialog from '../../materialUIComponents/dialog/ScrollingDialog';
import ShowAnswer from './ShowAnswer';
import { fecthResultByUserName } from '../../services/Result';
import { useSelector } from 'react-redux';
import { getUsername } from '../../services/TokenServices';

const ReportCard = () => {
  const isSmallScreen = useMediaQuery("(min-width:700px)");
  const [open, setOpen] = useState(false);
  const [reportCard,setReportCard] = useState(null);
  const [resultId, setResultId] = useState(null);
  const token = useSelector((state)=>state.user.token);
  const username = getUsername(token);

  const isPassed = (obtainedMarks, totalMarks) => {
    return (obtainedMarks / totalMarks) >= 0.5 ? true : false;
  }

  const handleClose = () => {
    setOpen(false);
  };
  const fetchResult = async ()=> {
    try{
      const response = await fecthResultByUserName(username,token);
      setReportCard(response.data);
      console.log(response);
    }catch(error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    fetchResult();
  },[]);

  return (
    <Container maxWidth="md" style={isSmallScreen ? { paddingTop: '1rem' } : { paddingTop: '5rem' }}>
      <Typography sx={{ paddingLeft: "3px", paddingBottom: '15px' }}> Report Card</Typography>

      <TableContainer component={Paper} className='reportCardTable'>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#545c71' }}>
              <TableCell></TableCell>
              <TableCell sx={{ color: 'white' }}>Exams</TableCell>
              <TableCell sx={{ color: 'white' }}>Conducted On</TableCell>
              <TableCell sx={{ color: 'white' }}>Marks</TableCell>
              <TableCell sx={{ color: 'white' }}>Views</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reportCard && reportCard.map((report, index) => (
              <TableRow key={`${index}reportCard3425`} sx={{ backgroundColor: isPassed(report.obtainedMarks, report.totalMarks) ? '#e9ffe9' : '#fff1f1' }}>
                <TableCell>{`#${index + 1}`}</TableCell>
                <TableCell>{report.exam.examName}</TableCell>
                <TableCell>{report.exam.startTime}</TableCell>
                <TableCell>{report.obtainedMarks}/{report.totalMarks}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => {
                    setResultId(report.resultId);
                    setOpen(true);
                  }}>
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ScrollingDialog
        title="Correct Answers"
        isClose={false}
        isSelect={true}
        selectContent="close"
        open={open}
        handleClose={handleClose} >
        <ShowAnswer openExamId={resultId} />
      </ScrollingDialog>
    </Container>
  )
}

export default ReportCard