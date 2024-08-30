import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/login/Login';
import ForgotPassword from './components/forgotpassword/ForgotPassword';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResetPassword from './components/resetpassword/ResetPassword';
import Layout from './components/layout/Layout';



function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

