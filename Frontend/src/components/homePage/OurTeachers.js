import { Button, Card, Grid2, Typography } from '@mui/material';
import * as React from 'react';
import TeacherCard from '../../materialUIComponents/teacherCard/TeacherCard';
import teacher1 from '../../assests/teacher1.jpg';
import teacher2 from '../../assests/teacher2.png';
import teacher3 from '../../assests/teacher3.png';

const teachers = [
  {
    name: 'Aniket Jain',
    role: 'Early Childhood Development',
    img: teacher2,
  },
  {
    name: 'Shiv Meena',
    role: 'Innovative Education Methods',
    img: teacher1,
  },
  {
    name: 'Abhitabh Kr. Pandey',
    role: 'Arts and Creative Expression',
    img: teacher3,
  },
];

export default function OurTeachers() {
  return (
    <div className='ourTeachers'>
      <Typography variant="h4" textAlign="center" fontWeight="bold" fontSize={30} mb={3}>
        Meet Our Expert Teacher
      </Typography>
      <Grid2 container size={12}>
        {teachers && teachers.map((item, index) => {
          return <Grid2 item size={4} key={index + " " + item.name} id='teacherGrid'>
            <TeacherCard details={item} />
          </Grid2>
        })}
      </Grid2>
      <Button id='seeAllTeacherbutton'>See All Teachers</Button>
    </div>
  );
}