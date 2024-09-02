import React, { useState } from 'react';
import axios from 'axios';
import { getTeacher } from '../services/Api';
import './SearchBy.css'; // Ensure this CSS file includes card styles

const SearchBy = () => {
  const [searchType, setSearchType] = useState(''); // 'teacher' or 'student'
  const [searchCriteria, setSearchCriteria] = useState(''); // 'name', 'email', etc.
  const [searchValue, setSearchValue] = useState(''); // User input
  const [results, setResults] = useState([]); // Search results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
        console.log(searchType);
        // const r= searchType;
        // console.log(r);
      const response = await axios.get('http://localhost:8080/api/teacher/all', {
        params: {
          type: searchType,
          criteria: searchCriteria,
          value: searchValue
        }
      });
      console.log(response);
      setResults(response.data);
    // const response = getTeacher(searchType, searchCriteria, searchValue);
    setResults(response.data);
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
          <label>
            <input
              type="radio"
              name="searchCriteria"
              value="rollNo"
              checked={searchCriteria === 'rollNo'}
              onChange={(e) => setSearchCriteria(e.target.value)}
            />
            Roll Number
          </label>
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
        {results.length > 0 ? (
          <div className="cards-container">
            {results.map((result) => (
              <div className="card" key={result.id}>
                <h3>{searchType === 'student' ? result.firstName : result.firstName + ' ' + result.lastName}</h3>
                {searchType === 'student' ? (
                  <>
                    <p><strong>Roll No:</strong> {result.rollNo}</p>
                    <p><strong>Class:</strong> {result.class}</p>
                  </>
                ) : (
                  <>
                    <p><strong>Email:</strong> {result.email}</p>
                    <p><strong>Mobile Number:</strong> {result.mobile_number}</p>
                    <p><strong>Age:</strong> {result.age}</p>
                    <p><strong>Address:</strong> {result.address}</p>
                    <p><strong>Date of Birth:</strong> {result.dateofBirth}</p>
                    <p><strong>Qualification:</strong> {result.qualification}</p>
                    <p><strong>Discription:</strong> {result.discription}</p>
                  </>
                )}
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
