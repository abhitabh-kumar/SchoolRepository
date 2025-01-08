import React from 'react'

const CreateQuestions = () => {
  return (
    <div className="form-group">
    <label>Enter Question</label>
    <input
      type="text"
      name="question"
      className="question-input"
      placeholder="Enter your question here"
      required
    />
  </div>
  )
}

export default CreateQuestions