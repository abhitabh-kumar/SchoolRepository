import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBy.css'; 

const SearchBy = () => {
  const [searchType, setSearchType] = useState(''); 
  const [searchCriteria, setSearchCriteria] = useState('');
  const [searchValue, setSearchValue] = useState(''); 
  const navigate = useNavigate();

  const handleSearch = () => {
    // Send the searchType, searchCriteria, and searchValue to the search results page
    navigate('/admin/search-results', {
      state: { searchType, searchCriteria, searchValue },
    });
  };

  const handleTypeChange = (type) => {
    setSearchType(type);
    setSearchCriteria(''); 
    setSearchValue('');
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
            disabled={!searchCriteria} 
          />
          <button onClick={handleSearch} disabled={!searchCriteria}>
            Search
          </button>
        </>
      )}
    </div>
  );
};

export default SearchBy;
