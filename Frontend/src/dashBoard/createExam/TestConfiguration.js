import React, { useEffect, useRef, useState } from 'react'
import './exam.css'
import { Button } from '@mui/material';

const TestConfiguration = ({handleValue}) => {
  const dateRef = useRef(null);
  const [examName, setExamName] = useState("");
  const [createBy, setCreatedBy] = useState("")

  const handleExamChange = (e) => {
    setExamName(e.target.value);
  }
  
  useEffect(() => {
    setCreatedBy("Abhitabh Kr. Pandey");
    if (dateRef.current) {
      dateRef.current.min = new Date().toISOString().split("T")[0];
    }
  }, []);

  return (
    <>
      <div className='testConfiguration'>
        <div className="examName">
          <label htmlFor="examName" className="form-label">Exam Name :</label>
          <input
            type="text"
            id="examName"
            name="examName"
            className="form-input"
            value={examName}
            onChange={handleExamChange}
            placeholder='Subject Name'
            required
          />
        </div>
        <div className="createdBy">
          <label htmlFor="createdBy" className="form-label">Created By :</label>
          <input
            type="text"
            id="createdBy"
            name="createdBy"
            className="form-input"
            value={createBy}
            disabled
          />
        </div>
        <div className="examDate">
          <label htmlFor="examDate" className="form-label">exam Date :</label>
          <input
            type="date"
            id="examDate"
            name="examDate"
            className="form-input"
            ref={dateRef}
          />
        </div>
        <div className="examTime">
          <label htmlFor="examTime" className="form-label">Start timing :</label>
          <input
            type="time"
            id="examTime"
            name="examTime"
            className="form-input"
          />
        </div>
      </div>
      <Button
        variant="contained"
        className="create-question-button"
        sx={{marginTop:'20px'}}
        onClick={(e)=>handleValue(e,1)}
      >
        Next {' >>'}
      </Button>
    </>
  )
}

export default TestConfiguration