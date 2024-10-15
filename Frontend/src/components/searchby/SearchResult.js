import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllTeacher, getTeacherByName, getAllStudent, getStudentByName, getStudentByGrade, deleteTeacher, deleteStudent } from '../services/Api';
import './SearchResults.css'; // CSS file for styling

const SearchResults = () => {
  const { state } = useLocation(); // Receive the passed state from navigation
  const { searchType, searchCriteria, searchValue } = state;
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        let response = null;
        if (searchType === 'teacher' && searchCriteria === 'all') {
          response = await getAllTeacher();
        } else if (searchType === 'teacher' && searchCriteria === 'name') {
          response = await getTeacherByName(searchValue);
        } else if (searchType === 'student' && searchCriteria === 'all') {
          response = await getAllStudent();
        } else if (searchType === 'student' && searchCriteria === 'name') {
          response = await getStudentByName(searchValue);
        } else if (searchType === 'student' && searchCriteria === 'class') {
          response = await getStudentByGrade(searchValue);
        }
        if (response && response.data) {
          setResults(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchType, searchCriteria, searchValue]);

  const handleBack = () => {
    navigate('/admin/search-by'); // Go back to the previous page (SearchBy)
  };

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        if (searchType === 'teacher') {
          await deleteTeacher(userId);
        } else if (searchType === 'student') {
          await deleteStudent(userId);
        }
        // Refresh the search results after deletion
        const updatedResults = results.filter((item) => item.userId !== userId);
        setResults(updatedResults);
      } catch (error) {
        console.error('Error deleting item:', error);
        setError('Failed to delete item.');
      }
    }
  };

  const handleUpdate = (userId) => {
    if (searchType === 'teacher') {
      navigate(`/admin/search-by/update/teacher/${userId}`);
    } else if (searchType === 'student') {
      navigate(`/admin/search-by/update/student/${userId}`);
    }
  };

  return (
    <div className="search-results-page">
      <h2>Search Results</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <>
          <p>Total results: {results.length}</p>
          <div className="results-list">
            {results.length > 0 ? (
              results.map((result) => (
                <div key={result.userId} className="result-card">
                  {searchType === 'student' ? (
                    <>
                      <div className="result-card-header">
                        <h3>{result.name}</h3>
                      </div>
                      <div className="result-card-body">
                      <p><strong>Name:</strong> {result.name}</p>
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
                    <p><strong>DOB</strong> {result.dateOfBirth}</p>
                    <p><strong>DOJ</strong> {result.dateOfJoining}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="result-card-header">
                        <h3>{result.name}</h3>
                      </div>
                      <div className="result-card-body">
                      <p><strong>Name:</strong> {result.name}</p>
                    <p><strong>Email:</strong> {result.emailId}</p>
                    <p><strong>Mobile Number:</strong> {result.mobileNumber}</p>
                    <p><strong>Age:</strong> {result.age}</p>
                    {/* <p><strong>Address:</strong> {result.address}</p> */}
                    {/* <p><strong>Date of Birth:</strong> {result.dateofBirth}</p> */}
                    <p><strong>Qualification:</strong> {result.qualification}</p>
                    <p><strong>Description:</strong> {result.description}</p>
                      </div>
                    </>
                  )}
                  <div className="card-actions">
                    <button onClick={() => handleUpdate(result.userId)} className="update-button">Update</button>
                    <button onClick={() => handleDelete(result.userId)} className="delete-button">Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </>
      )}
      <button onClick={handleBack} className="back-button">Back</button>
    </div>
  );
};

export default SearchResults;
