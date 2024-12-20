import React, { useEffect, useState } from 'react'
import QuestionBox from './QuestionBox';
import styles from './exam.module.css'
import { Button } from '@mui/material';

const ExamDashBoard = ({examDetails}) => {
    const [selectedOption, setSelectedOption] = useState({});
    const [questions,setQuestions] = useState(null)

    const handleOptionChange = (questionId,optionId) => {
        console.log(questionId);
        selectedOption[`${questionId}`] = optionId
        setSelectedOption(selectedOption);
        console.log(selectedOption);
    };

    useEffect(()=>{
        if(examDetails && examDetails.questions){
            setQuestions(examDetails.questions);
        }
    },[])

    return (
        <>
        <div className={styles.schoolHeader}>
            <p>Sushila Public School's Test Series</p>
            <p>{examDetails.subject}</p>    
            <div className="details">
                <Button></Button>
            </div>
        </div>
            <div className={styles.allQuestions}>
            {
                questions && questions.map((question,index) => {
                    return <QuestionBox question={question} 
                                key={`question9029${index}`} 
                                handleOptionChange={handleOptionChange} 
                                selectedOption={selectedOption}/>
                })
            }
            </div>
            <Button className={styles.examButton}>Submit</Button>
        </>
    )
}

export default ExamDashBoard