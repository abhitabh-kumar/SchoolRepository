import React, { useEffect, useState } from 'react'
import './exam.css'
import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import authHeader from '../../services/authHeader';
import { createQuestion } from '../../services/Exam.js';
import { useSelector } from 'react-redux';
import SlideSnackBar from '../../materialUIComponents/snackbar/SlideSnackBar';
import { getUsername } from '../../services/TokenServices';

const CreateQuestions = ({ isDialog }) => {

  const [formData, setFormData] = useState({
    question: "",
    options: ["", "", "", ""]
  });
  const [answer, setAnswer] = useState('');
  const [marks, setMarks] = useState("");

  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(false);
  const [severity, setSeverity] = useState("error");
  const token = useSelector((state) => state.user.token);

  const handleMarks = (event) => {
    const value = event.target.value;
    // Allow only integers
    if (/^\d*$/.test(value)) {
      setMarks(value);
    }
  };
  const clearData = ()=>{
    setFormData({
      question: "",
      options: ["", "", "", ""]
    });
    setAnswer('');
    setMarks('');
  }

  const handleOption = (event) => {
    setAnswer(event.target.value);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...formData.options];
    updatedOptions[index] = value;
    setFormData({ ...formData, options: updatedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProgress(true);
    const author = getUsername(token);
    console.log(author)
    console.log("Form Data Submitted:", formData);
    const data = { ...formData, answer, marks, author};
    try {
      const response = await createQuestion(data, token);
      // console.log(response);
      if (response.code != '200')
        throw new Error("Something Went Wrong While Creating Question");

      setMessage("Question Created SuccessFully");
      setSeverity("success");
      setAlert(true);
      clearData();
    } catch (error) {
      setSeverity("error");
      setMessage(error.message);
      setAlert(true);
    }
    setProgress(false);
  };

  useEffect(()=>{
  },[alert]);

  return (
    <div className='createQuestion' style={{ padding: isDialog ? '0px' : '20px', }}>
      <Typography mb={2.5} ml={0.5} sx={{ fontSize: '1.2rem', fontWeight: '600' }}>Create Question</Typography>
      <Box className="createQuestionContainer">
        <form onSubmit={handleSubmit} className='form-container'>
          <div className="questions">
            <TextField
              id="outlined-multiline-flexible"
              label="Question"
              multiline
              value={formData.question}
              onChange={handleInputChange}
              maxRows={6}
              required
              name="question"
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
          <FormControl className='correctMarks' sx={{ mt: '30px', width: '100%', display: 'flex', gap: '10px', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }} size="small">
            <InputLabel id="demo-select-small-label" sx={{ color: 'black' }}>Correct Option</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={answer}
              label="Correct Option"
              onChange={handleOption}
              sx={{ minWidth: '40vw', maxWidth: '100%' }}
              className='correctOption'
              required
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
                    outline: 'none', // Optional: Transparent on hover
                    border: '1px solid rgb(188 188 188)'
                  },
                  "&.Mui-focused fieldset": {
                    outline: "none", // Remove outline on focus
                    border: '1px solid rgb(188 188 188)'
                  }
                },
                input: { color: 'black !important' }
              }}
              required
            />
          </FormControl>


          <Button
            type="submit"
            variant="contained"
            className="create-question-button"
          // onClick={createQuestionFromDashBoard}
          > 
          {progress ? <CircularProgress sx={{ width: '33px !important', height: '33px !important', color: 'white !important' }} /> : "create question"}
          </Button>
        </form>
      </Box>
      <SlideSnackBar message={message} severity={severity} open={alert} handleClose={() => setAlert(false)} />
    </div>
  )
}

export default CreateQuestions