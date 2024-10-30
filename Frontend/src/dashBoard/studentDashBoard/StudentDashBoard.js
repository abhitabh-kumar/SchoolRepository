import * as React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './studentDashBoard.css';
import DashBoardNavBar from '../../materialUIComponents/navbar/DashBoardNavBar';
import DashHome from './DashHome';
import TimeTable from './TimeTable';
import TestsPage from './TestsPage';
import AttendancePage from './AttendancePage';
import Announcement from './Announcement';
import ReportCard from './ReportCard';
import Profile from '../Profile';
import NotFound from '../../components/pageNotFound/NotFound';
import SwipeableEdgeDrawer from '../../materialUIComponents/navbar/SwipeableEdgeDrawer';
import { useMediaQuery } from '@mui/material';

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashHome />} />
            <Route path="/dashHome" element={<DashHome />} />
            <Route path="/timeTable" element={<TimeTable />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/tests" element={<TestsPage />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/reportCard" element={<ReportCard />} />
            <Route path="/myProfile" element={<Profile />} />
            <Route path="*" element={<NotFound homeLink="/student" />} />
        </Routes>
    );
}

export default function StudentDashBoard() {

    const isSmallScreen = useMediaQuery("(min-width:700px)");

    return (
        <>
            {
                isSmallScreen ? <DashBoardNavBar>
                    <Routes>
                        <Route path="/" element={<DashHome />} />
                        <Route path="/dashHome" element={<DashHome />} />
                        <Route path="/timeTable" element={<TimeTable />} />
                        <Route path="/attendance" element={<AttendancePage />} />
                        <Route path="/tests" element={<TestsPage />} />
                        <Route path="/announcement" element={<Announcement />} />
                        <Route path="/reportCard" element={<ReportCard />} />
                        <Route path="/myProfile" element={<Profile />} />
                        <Route path="*" element={<NotFound homeLink="/student" />} />
                    </Routes>
                </DashBoardNavBar>
                    : <SwipeableEdgeDrawer>
                        <Routes>
                            <Route path="/" element={<DashHome />} />
                            <Route path="/dashHome" element={<DashHome />} />
                            <Route path="/timeTable" element={<TimeTable />} />
                            <Route path="/attendance" element={<AttendancePage />} />
                            <Route path="/tests" element={<TestsPage />} />
                            <Route path="/announcement" element={<Announcement />} />
                            <Route path="/reportCard" element={<ReportCard />} />
                            <Route path="/myProfile" element={<Profile />} />
                            <Route path="*" element={<NotFound homeLink="/student" />} />
                        </Routes>
                    </SwipeableEdgeDrawer>
            }
        </>
    );
}
