import React, { useEffect, useState } from 'react'
import { questions } from '../../dummyData/questions'
import QuestionBox from '../../components/exam/QuestionBox'
import './exam.css'
import { Box, Button, Pagination, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ScrollingDialog from '../../materialUIComponents/dialog/ScrollingDialog'
import CreateQuestions from './CreateQuestions'

const AddQuestions = ({ selectedQuestions, handleAddQuestion, handleRemoveQuestion, handleValue }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages,setTotalPages] = useState(0);
  const itemsPerPage = 7;


  useEffect(()=>{
      setTotalPages(10);
  },[])

  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleClose = () => {
    setOpenDialog(false);
  }
  return (
    <div className='addingQuestionBox'>
      <div className="addingQuestionButtonBox">
        <Button className='prevButton' onClick={(e) => handleValue(e,0)}>{'<< '} prev</Button>
        <Button className='createQuestionButton' onClick={() => setOpenDialog(true)}>Create Custom Question +</Button>
      </div>

      {questions.map((question, index) => {

        return <Box className='addQuestion' key={`add${index}637Question`}>
          {!selectedQuestions.includes(question) ? (
            <Button className='addButton' onClick={() => handleAddQuestion(question)}> {'add +'}</Button>
          ) :
            (<Button className='removeButton' onClick={() => handleRemoveQuestion(question.questionId)}>
              remove <DeleteIcon />
            </Button>
            )}

          <QuestionBox question={question}
            isDisabled={true}
            questionNo={index + 1}
            selectedOption={question.correctAnswer} />
        </Box>
      })}
      <Stack
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={5}
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