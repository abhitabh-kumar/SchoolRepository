import React, { useEffect, useState } from 'react'
import { examList } from '../../dummyData/exams';
import './reportCard.css'
import QuestionBox from '../../components/exam/QuestionBox';
import { Box, Typography } from '@mui/material';
import { fetchQuestionResponseByResultId } from '../../services/Result';
import { useSelector } from 'react-redux';

const ShowAnswer = ({ openExamId }) => {
    const [exam, setExam] = useState(null);
    const [question, setQuestion] = useState(null);
    const token = useSelector((state) => state.user.token);

    const fetchResponse = async () => {
        try {
            const response = await fetchQuestionResponseByResultId(openExamId, token);
            if (response.code != '200') throw new Error(response.message)
            setQuestion(response.data);
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        fetchResponse();
    }, []);
    return (
        <>
            {
                question != null ? question.map((item, index) => {
                    return <Box className="questionContainer" key={`${item.questionId}ques205`}>
                        <QuestionBox question={item.question} selectedOption={parseInt(item.selectedOption)-1} isDisabled={true} questionNo={index + 1} />
                        <Typography className='correctAnswer'>correctAnswer : {item.question.options[parseInt(item.question.answer)-1]}</Typography>
                    </Box>
                })
                    : <p style={{ color: 'black' }}>Something Went Wrong !</p>
            }
        </>
    )
}

export default ShowAnswer