import React from 'react'
import QuestionBox from '../../components/exam/QuestionBox'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box, Button, CircularProgress } from '@mui/material'

const PreviewExam = ({ selectedQuestions, handleSwap, handleValue, examDetails,createTest,loading}) => {
    
    return (
        <Box sx={{display:'flex',flexDirection:'column'}}>
            <div className="addingQuestionButtonBox" style={{marginBottom:"20px"}}>
                <Button className='prevButton' onClick={(e) => handleValue(e,1)}>{'<< '} prev</Button>
                <Button className='submitButton' onClick={()=>createTest()} disabled={loading}>
                    {loading ? <CircularProgress sx={{ width: '25px !important', height: '25px !important' }}/> : 'create'}
                </Button>
            </div>
            <>
            {
                selectedQuestions && selectedQuestions.map((question, index) => {
                    return <div className='previewExamQuestions' key={`${index}swap342`}>
                        {index != 0 && <Button className='swapButton' id="swapUp" onClick={() => handleSwap(index, -1)}><KeyboardDoubleArrowUpIcon /></Button>}
                        <QuestionBox question={question}
                            isDisabled={true}
                            questionNo={index + 1}
                            selectedOption={parseInt(question.answer)-1} />
                        {index != (selectedQuestions.length - 1) && <Button className='swapButton' id="swapDown" onClick={() => handleSwap(index, +1)}><KeyboardDoubleArrowDownIcon /></Button>}
                    </div>
                })
            }
            </>
        </Box>
    )
}

export default PreviewExam