import React from 'react'
import QuestionBox from '../../components/exam/QuestionBox'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box, Button } from '@mui/material'

const PreviewExam = ({ selectedQuestions, handleSwap, handleValue, examDetails}) => {
    console.log(selectedQuestions);
    console.log(handleSwap);
    console.log(handleValue);
    return (
        <Box sx={{display:'flex',flexDirection:'column'}}>
            <div className="addingQuestionButtonBox" style={{marginBottom:"20px"}}>
                <Button className='prevButton' onClick={(e) => handleValue(e,1)}>{'<< '} prev</Button>
                <Button className='submitButton' >Submit</Button>
            </div>
            <>
            {
                selectedQuestions && selectedQuestions.map((question, index) => {
                    return <div className='previewExamQuestions' key={`${index}swap342`}>
                        {index != 0 && <Button className='swapButton' id="swapUp" onClick={() => handleSwap(index, -1)}><KeyboardDoubleArrowUpIcon /></Button>}
                        <QuestionBox question={question}
                            isDisabled={true}
                            questionNo={index + 1}
                            selectedOption={question.correctAnswer} />
                        {index != (selectedQuestions.length - 1) && <Button className='swapButton' id="swapDown" onClick={() => handleSwap(index, +1)}><KeyboardDoubleArrowDownIcon /></Button>}
                    </div>
                })
            }
            </>
        </Box>
    )
}

export default PreviewExam