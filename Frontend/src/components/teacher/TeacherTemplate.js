import React, { useEffect, useState } from 'react'
import ComponentsHeading from '../componentsHeading/ComponentsHeading'
import ResponsiveAppBar from '../../materialUIComponents/navbar/ResponsiveAppBar'
import Footer from '../footer/Footer';
import Navigate from '../../materialUIComponents/navigation/Navigate';
import { Grid2, Pagination, Skeleton, Stack } from '@mui/material';
import TeacherCard from '../../materialUIComponents/teacherCard/TeacherCard';
import "./teacherPage.css"
// import { teachers } from '../../dummyData/teachers';
import authHeader from '../../services/authHeader';
import { getAllTeacher } from '../../services/Api';
import { useDispatch, useSelector } from 'react-redux';
import { setTeacher } from '../../redux/slice/TeacherSlice';

const TeacherTemplate = () => {

  const [page, setPage] = useState(1);
  const [allTeachers,setAllTeacher] = useState(null);
  const [teachers, setTeachers] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state)=>state.user.token);
  const itemsPerPage = 8;
  const reduxTeacher = useSelector((state)=>state.teacher.allTeachers);
  const dispatch = useDispatch();

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      
      const response = await getAllTeacher(token); 
      const allTeachers = response.data;
  
      setTotalPages(Math.ceil(allTeachers.length / itemsPerPage));
      dispatch(setTeacher(allTeachers));
  
      const paginatedTeachers = allTeachers.slice((page - 1) * itemsPerPage, page * itemsPerPage);
      setTeachers(paginatedTeachers);
  
    } catch (error) {
      console.error("Error fetching teachers:", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    if (!reduxTeacher) {
      fetchTeachers();  
    } else {
      setTotalPages(Math.ceil(reduxTeacher.length / itemsPerPage));
      setTeachers(reduxTeacher.slice((page - 1) * itemsPerPage, page * itemsPerPage));
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (reduxTeacher) {
      setTeachers(reduxTeacher.slice((page - 1) * itemsPerPage, page * itemsPerPage));
      setLoading(false);
    }
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };


  return (
    <>
      <Grid2 container size={12} justifyContent={"center"} rowSpacing={3} columnSpacing={2} mt={5}>
        {loading ? <>
          <Skeleton variant="rounded" width={250} height={300} />
          <Skeleton variant="rounded" width={250} height={300} />
          <Skeleton variant="rounded" width={250} height={300} />
          <Skeleton variant="rounded" width={250} height={300} />
        </> : teachers && teachers.map((item, index) => {
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
    </>
  )
}

export default TeacherTemplate