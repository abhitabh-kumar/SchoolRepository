import React from 'react'
import TeacherDashHome from './TeacherDashHome'
import CreateTest from '../CreateTest'
import CreateQuestions from '../CreateQuestions'
import Results from './Results'
import DashBoardNavBar from '../../materialUIComponents/navbar/DashBoardNavBar'
import SwipeableEdgeDrawer from '../../materialUIComponents/navbar/SwipeableEdgeDrawer'
import { Route, Routes } from 'react-router-dom'
import TeacherTimeTable from './TeacherTimeTable'
import Profile from '../Profile'
import MarkAttendance from './MarkAttendance'
import { useMediaQuery } from '@mui/material'
import NotFound from '../../components/pageNotFound/NotFound'
import Announcement from '../Announcement'
import { menu1 } from '../../dummyData/teacherMenuData'
import { menu2 } from '../../dummyData/teacherMenuData'

const TeacherDashBoard = () => {

  const isSmallScreen = useMediaQuery("(min-width:700px)");

  return (
    <>
      {
        isSmallScreen ? <DashBoardNavBar menu1={menu1} menu2={menu2}>
          <Routes>
            <Route path="/" element={<TeacherDashHome />} />
            <Route path="/dashHome" element={<TeacherDashHome />} />
            <Route path="/timeTable" element={<TeacherTimeTable />} />
            <Route path="/markAttendance" element={<MarkAttendance />} />
            <Route path="/createTest" element={<CreateTest />} />
            <Route path="/createQuestions" element={<CreateQuestions />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/result" element={<Results />} />
            <Route path="/myProfile" element={<Profile />} />
            <Route path="*" element={<NotFound homeLink="/teacher" />} />
          </Routes>
        </DashBoardNavBar>
          : <SwipeableEdgeDrawer menu1={menu1} menu2={menu2}>
          <Routes>
            <Route path="/" element={<TeacherDashHome />} />
            <Route path="/dashHome" element={<TeacherDashHome />} />
            <Route path="/timeTable" element={<TeacherTimeTable />} />
            <Route path="/markAttendance" element={<MarkAttendance />} />
            <Route path="/createTest" element={<CreateTest />} />
            <Route path="/createQuestions" element={<CreateQuestions />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/result" element={<Results />} />
            <Route path="/myProfile" element={<Profile />} />
            <Route path="*" element={<NotFound homeLink="/teacher" />} />
          </Routes>
          </SwipeableEdgeDrawer>
      }
    </>
  )
}

export default TeacherDashBoard