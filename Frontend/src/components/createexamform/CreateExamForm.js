import React, { useState } from 'react';
import { createExam } from '../services/Api';
import './CreateExamForm.css';

const CreateExamPage = () => {
  const [formData, setFormData] = useState({
    subject: '',
    topics: '',
    duration: '',
  });

  const [questions, setQuestions] = useState([]);
  const [numQuestions, setNumQuestions] = useState(0);
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

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[oIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (qIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answer = value;
    setQuestions(updatedQuestions);
  };

  const handleMarksChange = (qIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].marks = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createExam({ ...formData, questions });
      setSuccess('Exam created successfully!');
      setError('');
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  const handleNumQuestionsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumQuestions(value);

    const newQuestions = Array.from({ length: value }, () => ({
      question: '',
      options: ['', '', '', ''],
      answer: '',
      marks: ''
    }));
    setQuestions(newQuestions);
  };

  return (
    <div className="form-container">
      <h2>Create Exam</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Form Fields in Horizontal Layout */}
        <div className="form-horizontal">
  <div className="form-row">
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
  </div>

  <div className="form-row">
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
    <div className="form-group">
      <label htmlFor="numQuestions">Number of Questions</label>
      <input
        type="text"
        id="numQuestions"
        name="numQuestions"
        placeholder="Enter number of questions"
        value={formData.numQuestions}
        onChange={handleNumQuestionsChange}
        required
      />
    </div>
  </div>
</div>


        {/* Input for number of questions */}
        {/* <div className="form-group">
          <label htmlFor="numQuestions">Number of Questions</label>
          <input
            type="number"
            id="numQuestions"
            name="numQuestions"
            value={numQuestions}
            onChange={handleNumQuestionsChange}
            min="1"
            max="100"
            placeholder="Enter number of questions"
            required
          />
        </div> */}

        {/* Dynamically Generated Questions */}
        {questions.map((q, qIndex) => (
  <div key={qIndex} className="question-card hover-glow">
    <div className="question-header">
      <h4>Question {qIndex + 1}</h4>
      <div className="marks-input">
        <label htmlFor={`marks-${qIndex}`} className="marks-label">Marks</label>
        <input
          type="number"
          id={`marks-${qIndex}`}
          name="marks"
          className="marks-circle"
          placeholder="0"
          value={q.marks}
          onChange={(e) => handleMarksChange(qIndex, e.target.value)}
          required
        />
      </div>
    </div>

    <div className="form-group">
      <label htmlFor={`question-${qIndex}`}>Enter Question</label>
      <input
        type="text"
        id={`question-${qIndex}`}
        name="question"
        className="question-input"
        placeholder="Enter your question here"
        value={q.question}
        onChange={(e) => handleQuestionChange(qIndex, e)}
        required
      />
    </div>

    {/* Options and Answer Inputs */}
    <div className="options-container">
  {q.options.map((option, oIndex) => (
    <div key={oIndex} className="form-group option-item">
      <label htmlFor={`option-${qIndex}-${oIndex}`}>Option {oIndex + 1}</label>
      <input
        type="text"
        id={`option-${qIndex}-${oIndex}`}
        placeholder={`Option ${oIndex + 1}`}
        value={option}
        onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
        required
      />
    </div>
  ))}
</div>


    <div className="form-group">
      <label htmlFor={`answer-${qIndex}`}>Answer</label>
      <input
        type="text"
        id={`answer-${qIndex}`}
        name="answer"
        placeholder="Enter correct answer"
        value={q.answer}
        onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
        required
      />
    </div>
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
