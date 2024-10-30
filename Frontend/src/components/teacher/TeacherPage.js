import React, { useEffect, useState } from 'react'
import ComponentsHeading from '../componentsHeading/ComponentsHeading'
import ResponsiveAppBar from '../../materialUIComponents/navbar/ResponsiveAppBar'
import Footer from '../footer/Footer';
import Navigate from '../../materialUIComponents/navigation/Navigate';
import { Grid2, Pagination, Stack } from '@mui/material';
import TeacherCard from '../../materialUIComponents/teacherCard/TeacherCard';
import "./teacherPage.css"
import { teachers } from '../../dummyData/teachers';

const TeacherPage = () => {

  const [page, setPage] = useState(1);
  const itemsPerPage = 7;
  const totalPages = Math.ceil(teachers.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };
  const paginatedTeachers = teachers.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );


  return (
    <>
      <ResponsiveAppBar isTransparent={false} />
      <ComponentsHeading prevPath={"Home "} path={" / Teachers"} comColor="#ffeef0" content={"Our Teachers"} />
      <Grid2 container size={12} justifyContent={"center"} rowSpacing={3} columnSpacing={2} mt={5}>
        {paginatedTeachers && paginatedTeachers.map((item, index) => {
          return <Grid2 item key={index + " " + item.name} id='teacherGrid'>
            <TeacherCard details={item} />
          </Grid2>
        })}
      </Grid2>
      <Stack
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={5}
      >
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
          variant="outlined" shape="rounded"
        />
      </Stack>
      <Footer />
      <Navigate />
    </>
  )
}

export default TeacherPage