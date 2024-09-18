import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getAllTeacher, getTeacherByEmail, getAllStudent, deleteTeacher, deleteStudent, updateTeacher, updateStudent, getStudentByGrade, getStudentByName } from '../services/Api';

import './SearchBy.css'; // Ensure this CSS file includes card styles
import UpdateStudentPage from '../createstudentform/UpdateStudentForm';
import UpdateStudentForm from '../createstudentform/UpdateStudentForm';

const SearchBy = () => {
  const [searchType, setSearchType] = useState(''); // 'teacher' or 'student'
  const [searchCriteria, setSearchCriteria] = useState(''); // 'name', 'email', etc.
  const [searchValue, setSearchValue] = useState(''); // User input
  const [results, setResults] = useState([]); // Search results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  const navigate = useNavigate();

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      let response;
      if (searchType === "teacher" && searchCriteria === "all") {
        response = await getAllTeacher();
      } else if (searchType === "student" && searchCriteria === "name") {
        response = await getStudentByName(searchValue);
      } else if (searchType === "student" && searchCriteria === "all") {
        response = await getAllStudent();
      } else if(searchType === "student" && searchCriteria === "class"){
        response = await getStudentByGrade(searchValue);
      }
      // Ensure response data is set properly
      if (response && response.data && response.data.data) {
        // console.log(response.data.data);
        setResults(response.data.data);
      } else {
        setResults([]); // Clear results if response is not as expected
      } 
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleTypeChange = (type) => {
    setSearchType(type);
    setSearchCriteria(''); // Reset criteria when changing type
    setSearchValue(''); // Reset search value when changing type
    setResults([]); // Clear previous results
  };

  const criteriaOptions = () => {
    if (searchType === 'teacher') {
      return (
        <>
          <label>
            <input
              type="radio"
              name="searchCriteria"
              value="name"
              checked={searchCriteria === 'name'}
              onChange={(e) => setSearchCriteria(e.target.value)}
            />
            Name
          </label>
          <label>
            <input
              type="radio"
              name="searchCriteria"
              value="email"
              checked={searchCriteria === 'email'}
              onChange={(e) => setSearchCriteria(e.target.value)}
            />
            Email
          </label>
          <label>
            <input
              type="radio"
              name="searchCriteria"
              value="all"
              checked={searchCriteria === 'all'}
              onChange={(e) => setSearchCriteria(e.target.value)}
            />
            All
          </label>
        </>
      );
    } else if (searchType === 'student') {
      return (
        <>
          <label>
            <input
              type="radio"
              name="searchCriteria"
              value="name"
              checked={searchCriteria === 'name'}
              onChange={(e) => setSearchCriteria(e.target.value)}
            />
            Name
          </label>
          {/* <label>
            <input
              type="radio"
              name="searchCriteria"
              value="rollNo"
              checked={searchCriteria === 'rollNo'}
              onChange={(e) => setSearchCriteria(e.target.value)}
            />
            Roll Number
          </label> */}
          <label>
            <input
              type="radio"
              name="searchCriteria"
              value="class"
              checked={searchCriteria === 'class'}
              onChange={(e) => setSearchCriteria(e.target.value)}
            />
            Class
          </label>
          <label>
            <input
              type="radio"
              name="searchCriteria"
              value="all"
              checked={searchCriteria === 'all'}
              onChange={(e) => setSearchCriteria(e.target.value)}
            />
            All
          </label>
        </>
      );
    }
    return null;
  };

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        if (searchType === 'teacher') {
          await deleteTeacher(userId);
        } else if (searchType === 'student') {
          await deleteStudent(userId);
        }
        // Refresh results after deletion
        await handleSearch();
      } catch (error) {
        console.error('Error deleting item:', error);
        setError('Failed to delete item. Please try again later.');
      }
    }
  };

  const handleUpdate = async (userId) => {
    // // Implement update functionality. Here we'll just use a placeholder.
    const updatedData = { /* data to update */ };

    try {
      if (searchType === 'teacher') {
        await updateTeacher(userId, updatedData);
      }
     if (searchType === 'student') {
      console.log(userId);
        navigate(`/admin/search-by/update/student/${userId}`);
      }
      if (searchType === "teacher"){
        console.log("Line No. 162");
        console.log(userId);
        navigate(`/admin/search-by/update/teacher/${userId}`);

      }
      // Refresh results after update
      await handleSearch();
    } catch (error) {
      console.error('Error updating item:', error);
      setError('Failed to update item. Please try again later.');
    }
  };

  return (
    <div className="search-by">
      <h2>Search</h2>
      <div className="search-options">
        <label>
          <input
            type="radio"
            name="searchType"
            value="teacher"
            checked={searchType === 'teacher'}
            onChange={() => handleTypeChange('teacher')}
          />
          Teacher
        </label>
        <label>
          <input
            type="radio"
            name="searchType"
            value="student"
            checked={searchType === 'student'}
            onChange={() => handleTypeChange('student')}
          />
          Student
        </label>
      </div>
      {searchType && (
        <>
          <div className="search-criteria">
            {criteriaOptions()}
          </div>
          <input
            type="text"
            placeholder={`Search by ${searchCriteria}`}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            disabled={!searchCriteria} // Disable input if no criteria is selected
          />
          <button onClick={handleSearch} disabled={loading || !searchCriteria}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </>
      )}
      {error && <p className="error-message">{error}</p>}
      <div className="search-results">
        <p>Total results: {results.length}</p>
        {results.length >= 0 ? (
          <div className="cards-container">
            {results.map((result) => (
              <div className="card" key={result.userId}>
                <h3>{searchType === 'student' ? result.firstName : result.firstName + ' ' + result.lastName}</h3>
                {searchType === 'student' ? (
                  <>
                    <p><strong>Name:</strong> {result.userName}</p>
                    <p><strong>Class:</strong> {result.grade}</p>
                    <p><strong>RollNo:</strong> {result.rollNo}</p>
                    <p><strong>Mother Name:</strong> {result.motherName}</p>
                    <p><strong>Father Name:</strong> {result.fatherName}</p>
                    <p><strong>Age:</strong> {result.age}</p>
                    <p><strong>Mobile Number:</strong> {result.mobileNumber}</p>
                    <p><strong>Parent Email Id:</strong> {result.fatherName}</p>
                    <p><strong>City:</strong> {result.address.city}</p>
                    <p><strong>State:</strong> {result.address.state}</p>
                    <p><strong>Street:</strong> {result.address.street}</p>
                    <p><strong>ZipCode:</strong> {result.address.zipCode}</p>
                  </>
                ) : (
                  <>
                    <p><strong>Email:</strong> {result.email}</p>
                    <p><strong>Mobile Number:</strong> {result.mobile_number}</p>
                    <p><strong>Age:</strong> {result.age}</p>
                    <p><strong>Address:</strong> {result.address}</p>
                    <p><strong>Date of Birth:</strong> {result.dateofBirth}</p>
                    <p><strong>Qualification:</strong> {result.qualification}</p>
                    <p><strong>Description:</strong> {result.description}</p>
                  </>
                )}
                <div className="card-actions">
                  <button onClick={() => handleUpdate(result.userId)}>Update</button>
                  <button onClick={() => handleDelete(result.userId)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBy;
