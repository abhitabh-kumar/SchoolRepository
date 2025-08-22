import React, {useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './studentDashBoard.css';
import DashBoardNavBar from '../../materialUIComponents/navbar/DashBoardNavBar';
import DashHome from './DashHome';
import TestsPage from './TestsPage';
import AttendancePage from './AttendancePage';
import Announcement from '../Announcement';
import ReportCard from './ReportCard';
import Profile from '../Profile';
import NotFound from '../../components/pageNotFound/NotFound';
import SwipeableEdgeDrawer from '../../materialUIComponents/navbar/SwipeableEdgeDrawer';
import { useMediaQuery } from '@mui/material';
import StudentTimeTable from './StudentTimeTable';
import { menu1, menu2 } from '../../dummyData/studentMenuData';
import { announcement as announcement1 }  from '../../dummyData/announcement'

export default function StudentDashBoard() {

    const isSmallScreen = useMediaQuery("(min-width:700px)");
    const [announcement, setAnnouncement] = useState([]);
    const [notificationCount,setnotificationCount] = useState(1)

    useEffect(() => {
      setAnnouncement(announcement1);
    });

    return (
        <>
            {
                isSmallScreen ? <DashBoardNavBar menu1={menu1} menu2={menu2} notificationCount={notificationCount}>
                    <Routes>
                        <Route path="/" element={<DashHome />} />
                        <Route path="/dashHome" element={<DashHome />} />
                        <Route path="/timeTable" element={<StudentTimeTable />} />
                        <Route path="/attendance" element={<AttendancePage />} />
                        <Route path="/tests" element={<TestsPage />} />
                        <Route path="/announcement" element={<Announcement announcement={announcement}/>} />
                        <Route path="/reportCard" element={<ReportCard />} />
                        <Route path="/myProfile" element={<Profile />} />
                        <Route path="*" element={<NotFound homeLink="/student" />} />
                    </Routes>
                </DashBoardNavBar>
                    : <SwipeableEdgeDrawer menu1={menu1} menu2={menu2}>
                        <Routes>
                            <Route path="/" element={<DashHome />} />
                            <Route path="/dashHome" element={<DashHome />} />
                            <Route path="/timeTable" element={<StudentTimeTable />} />
                            <Route path="/attendance" element={<AttendancePage />} />
                            <Route path="/tests" element={<TestsPage />} />
                            <Route path="/announcement" element={<Announcement announcement={announcement}/>} />
                            <Route path="/reportCard" element={<ReportCard />} />
                            <Route path="/myProfile" element={<Profile />} />
                            <Route path="*" element={<NotFound homeLink="/student" />} />
                        </Routes>
                    </SwipeableEdgeDrawer>
            }
        </>
    );
}
