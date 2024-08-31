// src/components/CreateExamPage.js
import React, { useState } from 'react';
import { createExam } from '../services/Api';
import '../formstyle/FormStyle.css'; // Ensure this CSS file includes the styles provided below

const CreateExamPage = () => {
  const [formData, setFormData] = useState({
    subject: '',
    topics: '',
    duration: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Exam Created:', formData);
    // Call API to create exam
    try {
        createExam(formData);
        setSuccess('Exam created successfully!');
        setError('');
      } catch (err) {
        setError(err.message);
        setSuccess('');
      }
  };

  return (
    <div className="form-container">
      <h2>Create Exam</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Mathematics"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="topics">Topics</label>
          <input
            type="text"
            id="topics"
            name="topics"
            placeholder="Algebra, Geometry"
            value={formData.topics}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            name="duration"
            placeholder="2 hours"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Create Exam</button>
      </form>
    </div>
  );
};

export default CreateExamPage;
