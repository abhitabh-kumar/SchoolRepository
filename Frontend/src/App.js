import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/login/Login';
import ForgotPassword from './components/forgotpassword/ForgotPassword';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import VerifyOTP from './components/verifyotp/VerifyOTP';
import ResetPassword from './components/resetpassword/ResetPassword';
import Admin from './components/admin/Admin';
import CreateStudentPage from './components/createstudentform/CreateStudentForm';
import CreateTeacherPage from './components/createteacherform/CreateTeacherForm';
import CreateExamPage from './components/createexamform/CreateExamForm';
import SearchBy from './components/searchby/SearchBy';
import UpdateStudentForm from './components/createstudentform/UpdateStudentForm';
import UpdateTeacherForm from './components/createteacherform/UpdateTeacherForm';




function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/admin/create-teacher" element={<CreateTeacherPage />} />
        <Route path="/admin/create-student" element={<CreateStudentPage />} />
        <Route path="/admin/create-exam" element={<CreateExamPage />} />
        <Route path="/admin/search-by" element={<SearchBy />} />
        <Route path="/admin/search-by/update/student/:userId" element={<UpdateStudentForm />} />
        <Route path="/admin/search-by/update/teacher/:userId" element={<UpdateTeacherForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

