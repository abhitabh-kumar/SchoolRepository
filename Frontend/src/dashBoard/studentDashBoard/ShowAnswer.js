import React, { useEffect, useState } from 'react'
import { examList } from '../../dummyData/exams';
import './reportCard.css'
import QuestionBox from '../../components/exam/QuestionBox';
import { Box, Typography } from '@mui/material';

const ShowAnswer = ({ openExamId }) => {
    const [exam, setExam] = useState(null);
    useEffect(() => {
        const fetchedExam = examList.filter((item) => {
            if (item.examId == openExamId) return true;
            return false;
        });
        console.log(fetchedExam);
        if (fetchedExam.length != 0) setExam(fetchedExam[0]);
    }, []);
    return (
        <>
            {
                exam != null ? exam.questions.map((item, index) => {
                    return <Box className="questionContainer" key={`${item.questionId}ques205`}>
                        <QuestionBox question={item} selectedOption={item.correctAnswer} isDisabled={true} questionNo={index+1} />
                        <Typography className='correctAnswer'>correctAnswer : {item.options[item.correctAnswer]}</Typography>
                    </Box>
                })
                    : <p style={{ color: 'black' }}>Something Went Wrong !</p>
            }
        </>
    )
}

export default ShowAnswer