import React, { useState } from 'react';
import { createExam } from '../services/Api';
import '../formstyle/FormStyle.css'; // Ensure this CSS file includes the styles provided below

const CreateExamPage = () => {
  const [formData, setFormData] = useState({
    subject: '',
    topics: '',
    duration: ''
  });

  const [questions, setQuestions] = useState([]); // State for questions
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (index, e) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][e.target.name] = e.target.value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''] }]);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[oIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Exam Created:', { ...formData, questions });
    // Call API to create exam
    try {
      createExam({ ...formData, questions });
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

        {/* Button to add a new question */}
        <button type="button" onClick={addQuestion} className="add-question-button">
          Add Question
        </button>

        {/* Dynamic Question Fields */}
        {questions.map((q, qIndex) => (
          <div key={qIndex} className="question-container">
            <div className="form-group">
              <label htmlFor={`question-${qIndex}`}>Question {qIndex + 1}</label>
              <input
                type="text"
                id={`question-${qIndex}`}
                name="question"
                placeholder="Enter your question here"
                value={q.question}
                onChange={(e) => handleQuestionChange(qIndex, e)}
                required
              />
            </div>
            {q.options.map((option, oIndex) => (
              <div key={oIndex} className="form-group">
                <label htmlFor={`option-${qIndex}-${oIndex}`}>Option {oIndex + 1}</label>
                <input
                  type="text"
                  id={`option-${qIndex}-${oIndex}`}
                  name={`option-${oIndex}`}
                  placeholder={`Option ${oIndex + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                  required
                />
              </div>
            ))}
          </div>
        ))}

        <button type="submit" className="submit-button">Create Exam</button>

        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
      </form>
    </div>
  );
};

export default CreateExamPage;
