import React, { useState } from 'react'
import './exam.css'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

const CreateQuestions = ({isDialog}) => {

  const [formData, setFormData] = useState({
    question: "",
    options: ["", "", "", ""],
  });
  const [option, setOption] = useState('');
  const [marks, setMarks] = useState("");

  const handleMarks = (event) => {
    const value = event.target.value;
    // Allow only integers
    if (/^\d*$/.test(value)) {
      setMarks(value);
    }
  };

  const handleOption = (event) => {
    setOption(event.target.value);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...formData.options];
    updatedOptions[index] = value;
    setFormData({ ...formData, options: updatedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className='createQuestion' style={{padding: isDialog?'0px':'20px'}}>
      <Typography mb={2}>Create Question</Typography>
      <Box className="createQuestionContainer">
        <form onSubmit={handleSubmit} className='form-container'>
          <div className="questions">
            <label htmlFor="question" className="form-label">Ques :</label>
            <input
              type="text"
              id="question"
              name="question"
              className="form-input"
              value={formData.question}
              onChange={handleInputChange}
              placeholder='Enter question'
              required
            />
          </div>

          <div className="options">
            <div id="option1">
              <label htmlFor="option1" className="form-label">Option 1:</label>
              <input
                type="text"
                name="option1"
                placeholder="Type option 1"
                value={formData.options[0]}
                onChange={(e) => handleOptionChange(0, e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div id="option2">
              <label htmlFor="option2" className="form-label">Option 2:</label>
              <input
                type="text"
                name="option2"
                placeholder="Type option 2"
                value={formData.options[1]}
                onChange={(e) => handleOptionChange(1, e.target.value)}
                className="form-input"
                required
              />
            </div>
          </div>
          <div className="options">
            <div id="option3">
              <label htmlFor="option3" className="form-label">Option 3:</label>
              <input
                type="text"
                name="option3"
                placeholder="Type option 3"
                value={formData.options[2]}
                onChange={(e) => handleOptionChange(2, e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div id="option4">
              <label htmlFor="option4" className="form-label">Option 4:</label>
              <input
                type="text"
                name="option4"
                placeholder="Type option 4"
                value={formData.options[3]}
                onChange={(e) => handleOptionChange(3, e.target.value)}
                className="form-input"
                required
              />
            </div>
          </div>
          <FormControl className='correctMarks' sx={{mt:'30px', width: '100%', display: 'flex', gap: '10px', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }} size="small">
            <InputLabel id="demo-select-small-label">Correct Option</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={option}
              label="Correct Option"
              onChange={handleOption}
              sx={{ minWidth: '40vw', maxWidth: '100%' }}
              className='correctOption'
            >
              <MenuItem value={1}>option 1</MenuItem>
              <MenuItem value={2}>option 2</MenuItem>
              <MenuItem value={3}>option 3</MenuItem>
              <MenuItem value={4}>option 4</MenuItem>
            </Select>
            <TextField
              label="Enter Marks"
              variant="outlined"
              value={marks}
              size="small"
              onChange={handleMarks}
              className='marks'
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} // For mobile numeric keypad
              sx={{
                minWidth: '40vw', maxWidth: '100%',
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    outline:'none', // Optional: Transparent on hover
                   border:'1px solid rgb(188 188 188)'
                  },
                  "&.Mui-focused fieldset": {
                    outline: "none", // Remove outline on focus
                    border:'1px solid rgb(188 188 188)'
                  }
                }
              }}
            />
          </FormControl>


          <Button
            type="submit"
            variant="contained"
            className="create-question-button"
          >
            create question
          </Button>
        </form>
      </Box>
    </div>
  )
}

export default CreateQuestions