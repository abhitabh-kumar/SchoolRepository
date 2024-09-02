// src/components/AdminPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'; // Ensure you create this CSS file for styling

const Admin = () => {
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <div className="option-buttons">
        <Link to="/admin/create-teacher">
          <button>Create Teacher</button>
        </Link>
        <Link to="/admin/create-student">
          <button>Create Student</button>
        </Link>
        <Link to="/admin/create-exam">
          <button>Create Exam</button>
        </Link>
        <Link to="/admin/search-by">
            <button>Search-By</button>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
