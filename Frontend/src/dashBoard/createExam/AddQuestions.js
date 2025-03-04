import React, { useEffect, useState } from 'react'
import QuestionBox from '../../components/exam/QuestionBox'
import './exam.css'
import { Box, Button, CircularProgress, Pagination, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ScrollingDialog from '../../materialUIComponents/dialog/ScrollingDialog'
import CreateQuestions from './CreateQuestions'
import { useDispatch, useSelector } from 'react-redux'
import { setAllQuestions } from '../../redux/slice/ExamSlice';
import { getAllQuestions } from '../../services/Exam';

const AddQuestions = ({ selectedQuestions, handleAddQuestion, handleRemoveQuestion, handleValue }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.user.token);
  const reduxQuestion = useSelector((state) => state.exam.allQuestions);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleClose = () => {
    setOpenDialog(false);
  }

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const fetchQuestions = await getAllQuestions(token);
      setTotalPages(Math.ceil(fetchQuestions.length / itemsPerPage))
      const paginatedQuestions = fetchQuestions.slice((page - 1) * itemsPerPage, page * itemsPerPage);
      setQuestions(paginatedQuestions);
      dispatch(setAllQuestions(fetchQuestions));
      console.log(fetchQuestions);
    } catch (error) {
      console.error('Error fetching questions:', error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (reduxQuestion) {
      setQuestions(reduxQuestion.slice((page - 1) * itemsPerPage, page * itemsPerPage));
      setLoading(false);
    }
  }, [page]);

  useEffect(()=>{
    if(!openDialog) fetchQuestions();
    // console.log(questions);
  },[openDialog]);

  

  return (
    <div className='addingQuestionBox'>
      <div className="addingQuestionButtonBox">
        <Button className='prevButton' onClick={(e) => handleValue(e, 0)}>{'<< '} prev</Button>
        <Button className='createQuestionButton' onClick={() => setOpenDialog(true)}>Create Custom Question +</Button>
      </div>
      {loading && <CircularProgress sx={{ width: '33px !important', height: '33px !important', margin: "40px auto" }} />}
      {questions && questions.map((question, index) => {

        return <Box className='addQuestion' key={`add${index}637Question`}>
          <QuestionBox question={question}
            isDisabled={true}
            questionNo={index + 1}
            selectedOption={parseInt(question.answer)-1} />
          {!selectedQuestions.includes(question) ? (
            <Button className='addButton' onClick={() => handleAddQuestion(question)}> {'add +'}</Button>
          ) :
            (<Button className='removeButton' onClick={() => handleRemoveQuestion(question.questionId)}>
              remove <DeleteIcon />
            </Button>
            )}

        </Box>
      })}
      {!questions && !loading && <p style={{ textAlign: 'center' }}>There is no question yet 🥲. You can create a new question.</p>}
      <Stack
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={5}
        mb={3}
      >
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
          variant="outlined" shape="rounded"
        />
      </Stack>
      {
        selectedQuestions.length != 0 && (
          <div className="addedQuestions">
            <p style={{ color: '#187e00' }}>{selectedQuestions.length} Questions</p>
            <Button
              variant="contained"
              className="create-question-button"
              onClick={(e) => handleValue(e, 2)}
            >
              Next {' >>'}
            </Button>
          </div>
        )
      }
      {
        openDialog && <ScrollingDialog title={"Create Question"} isClose={false} isSelect={false} open={openDialog} handleClose={handleClose}>
          <CreateQuestions isDialog={true} />
        </ScrollingDialog>
      }
    </div>
  )
}

export default AddQuestions