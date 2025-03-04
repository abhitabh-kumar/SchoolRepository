import { Button, Card, Grid2, Skeleton, Typography } from '@mui/material';
import * as React from 'react';
import TeacherCard from '../../materialUIComponents/teacherCard/TeacherCard';
import teacher1 from '../../assests/teacher1.jpg';
import teacher2 from '../../assests/teacher2.png';
import teacher3 from '../../assests/teacher3.png';
import { useNavigate } from 'react-router-dom';
import TeacherTemplate from '../teacher/TeacherTemplate';

const teachers = null;

export default function OurTeachers() {
  const navigate = useNavigate();
  return (
    <div className='ourTeachers'>
      <Typography variant="h4" textAlign="center" fontWeight="bold" fontSize={30} mb={3}>
        Meet Our Expert Teacher
      </Typography>
      <TeacherTemplate/>
      <Button id='seeAllTeacherbutton' onClick={() => navigate("/teachers")}>See All Teachers</Button>
    </div>
  );
}