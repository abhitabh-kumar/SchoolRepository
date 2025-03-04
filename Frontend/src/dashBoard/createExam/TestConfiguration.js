import React, { useEffect, useRef, useState } from 'react'
import './exam.css'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, useMediaQuery } from '@mui/material';
import { DateTimeField, DateTimePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { subjectsByClass } from '../../dummyData/class';
import dayjs from 'dayjs';

const TestConfiguration = ({ handleValue }) => {
  const isMobile = useMediaQuery("(min-width:400px)");
  const studentClass = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
  const [grade, setGrade] = useState(1);
  const [formData, setFormData] = useState({endTime:null,examName: '',grade: '',startTime:null,subject: ''});

  const handleExamChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('step1', JSON.stringify({
      ...formData,
      startTime: formData.startTime ? formData.startTime.toISOString() : null,
      endTime: formData.endTime ? formData.endTime.toISOString() : null
    }));
    handleValue(e, 1)
  }

  useEffect(() => {
    const savedData = localStorage.getItem('step1');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData({
        ...parsedData,
        startTime: parsedData.startTime ? dayjs(parsedData.startTime) : null,
        endTime: parsedData.endTime ? dayjs(parsedData.endTime) : null
      });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className='testConfiguration'>
        <FormControl sx={{ width: "100%", marginBottom: '9px' }}>
          <TextField id="outlined-basic" name="examName" label="Exam Name" variant="outlined" required value={formData.examName} onChange={handleExamChange} />
        </FormControl>
        <FormControl sx={{ width: "45%", minWidth: !isMobile ? '100% !important' : '300px !important' }}>
          <InputLabel id="demo-select-small-label" sx={{ color: 'black' }}>Grade</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={formData.grade ? formData.grade : ''}
            label="Grade"
            name="grade"
            onChange={handleExamChange}
            required
          >
            {studentClass.map((item, index) => <MenuItem value={index + 1} key={`studentClass${index + 1}090`}>{item}</MenuItem>)}
          </Select>

        </FormControl>
        <FormControl sx={{ width: "45%", minWidth: !isMobile ? '100% !important' : '300px !important' }}>
          <InputLabel id="demo-select-small-label" sx={{ color: 'black' }}>Subject</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            disabled={!formData.grade}
            value={formData.subject ? formData.subject : ''}
            label="Subject"
            name="subject"
            onChange={handleExamChange}
            required
          >
            {formData.grade && subjectsByClass[formData.grade].map((item, index) => <MenuItem value={index + 1} key={`studentClass${index + 1}090`}>{item}</MenuItem>)}
          </Select>
        </FormControl>
          <DemoContainer components={['DateTimeField']} sx={{ display: 'flex', width: '100%', flexDirection: 'row', gap: "10px", flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <DateTimeField label="Exam Start Timing" name="startTime" value={formData.startTime}
              onChange={(startTime) => setFormData({...formData,startTime})} sx={{ width: "45%", minWidth: !isMobile ? '100% !important' : '300px !important' }} required />
            <DateTimeField label="Exam End Timing" name='endTime' value={formData.endTime}
              onChange={(endTime) => setFormData({...formData,endTime})} sx={{ marginTop: '0px !important', width: "45%", minWidth: !isMobile ? '100% !important' : '300px !important' }} required />
          </DemoContainer>
      </div>
      <Button
        type='submit'
        variant="contained"
        className="create-question-button"
        sx={{ marginTop: '20px' }}
      >
        Next {' >>'}
      </Button>
    </form>
  )
}

export default TestConfiguration