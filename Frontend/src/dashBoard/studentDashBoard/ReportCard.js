import React, { useState } from 'react'
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
import { reportCard } from '../../dummyData/reportCard';
import ScrollingDialog from '../../materialUIComponents/dialog/ScrollingDialog';
import ShowAnswer from './ShowAnswer';

const ReportCard = () => {
  const isSmallScreen = useMediaQuery("(min-width:700px)");
  const [open, setOpen] = useState(false);
  const [openExamId, setOpenExamId] = useState(null);

  const isPassed = (obtainedMarks, totalMarks) => {
    return (obtainedMarks / totalMarks) > 0.75 ? true : false;
  }

  const handleClose = () => {
    setOpen(false);
  };

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
              <TableRow key={`${index}reportCard3425`} sx={{ backgroundColor: isPassed(report.obtainedMarks, report.exam.totalMarks) ? '#e9ffe9' : '#fff1f1' }}>
                <TableCell>{`#${index + 1}`}</TableCell>
                <TableCell>{report.exam.examName}</TableCell>
                <TableCell>{report.exam.startTiming}</TableCell>
                <TableCell>{report.obtainedMarks}/{report.exam.totalMarks}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => {
                    setOpenExamId(report.exam.examId);
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
        <ShowAnswer openExamId={openExamId} />
      </ScrollingDialog>
    </Container>
  )
}

export default ReportCard