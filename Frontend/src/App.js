import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './components/login/Login';
import ForgotPassword from './components/forgotpassword/ForgotPassword';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import VerifyOTP from './components/verifyotp/VerifyOTP';
import ResetPassword from './components/resetpassword/ResetPassword';
import CreateStudentPage from './components/createstudentform/CreateStudentForm';
import CreateTeacherPage from './components/createteacherform/CreateTeacherForm';
import CreateExamPage from './components/createexamform/CreateExamForm';
import SearchBy from './components/searchby/SearchBy';
import UpdateStudentForm from './components/createstudentform/UpdateStudentForm';
import UpdateTeacherForm from './components/createteacherform/UpdateTeacherForm';
import HomePage from './components/homePage/HomePage';
import { ThemeProvider } from '@emotion/react';
import theme from './materialUIComponents/theme/Theme';
import TeacherPage from './components/teacher/TeacherPage';
import AboutPage from './components/about/AboutPage';
import ClassPage from './components/classes/ClassPage';
import Events from './components/events/Events';
import BlogPage from './components/blog/BlogPage';
import ContactPage from './components/contact/ContactPage';
import NotFound from './components/pageNotFound/NotFound';
import StudentDashBoard from './dashBoard/studentDashBoard/StudentDashBoard';
import TeacherDashBoard from './dashBoard/teacherDashBoard/TeacherDashBoard';
import SearchResults from './components/searchby/SearchResult';
import AdminDashBoard from './dashBoard/adminDashBoard/AdminDashBoard';
import ExamLandPage from './components/exam/ExamLandPage';
import { useSelector } from 'react-redux';
import ResponsiveAppBar from './materialUIComponents/navbar/ResponsiveAppBar'
import Footer from './components/footer/Footer';
import Navigate from './materialUIComponents/navigation/Navigate';

function AppContent() {

  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState(null);
  const role = useSelector((state) => state.user.role);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    setUserType(role)
    setLoading(false);
    console.log(role);
  }, [role])

  return (
    <ThemeProvider theme={theme}>
      {(pathname === "/" || pathname === "/teachers" || pathname === "/about" || pathname === "/classes" || pathname === "/events" || pathname === "/blog" || pathname === '/contact') &&
       <ResponsiveAppBar isTransparent={pathname === "/"} /> }
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/teachers' element={<TeacherPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/classes' element={<ClassPage />} />
        <Route path='/events' element={<Events />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
        {/* <Route path="/verify-otp" element={<VerifyOTP />} /> */}
        <Route path='/exam' element={<ExamLandPage />} />
        {
          userType == 'ADMIN' && admin()
        }
        {
          userType == 'STUDENT' && student()
        }
        {
          userType == 'TEACHER' && teacher()
        }
        {!loading && <Route path="*" element={<NotFound homeLink="/" />} />}
      </Routes>
      {(pathname === "/teachers" || pathname === "/about" || pathname === "/classes" || pathname === "/events" || pathname === "/blog") &&
        <>
          <Footer />
          <Navigate />
      </>}
    </ThemeProvider>
  );
}

const admin = () => {
  return (<>
    <Route path="/admin" element={<AdminDashBoard />} />
    <Route path="/admin/create-teacher" element={<CreateTeacherPage />} />
    <Route path="/admin/create-student" element={<CreateStudentPage />} />
    <Route path="/admin/create-exam" element={<CreateExamPage />} />
    <Route path="/admin/search-by" element={<SearchBy />} />
    <Route path="/admin/search-by/update/student/:id" element={<UpdateStudentForm />} />
    <Route path="/admin/search-by/update/teacher/:id" element={<UpdateTeacherForm />} />
    <Route path="/admin/search-results" element={<SearchResults />} />
  </>)
}

const student = () => {
  return (
    <Route path="/student/*" element={<StudentDashBoard />} />
  )
}

const teacher = () => {
  return (
    <Route path="/teacher/*" element={<TeacherDashBoard />} />
  )
}


export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

