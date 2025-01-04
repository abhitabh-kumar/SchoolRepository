import React, { useEffect, useState } from 'react'
import QuestionBox from './QuestionBox';
import styles from './exam.module.css'
import { Box, Button } from '@mui/material';
import SlideInAlertDialog from '../../materialUIComponents/dialog/SlideInAlertDialog';

//you have to put it in commonUtil
const targetTime = "2024-12-24T09:00:00";
const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetTime);
    const difference = target - now; // Time difference in milliseconds

    if (difference > 0) {
        return Math.floor(difference / 1000); // Convert milliseconds to seconds
    }
    return 0; // If the target time has passed, return 0
};

const ExamDashBoard = ({ examDetails }) => {
    const [selectedOption, setSelectedOption] = useState({});
    const [questions, setQuestions] = useState(null)
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
    const [open, setOpen] = useState(false);

    const handleOptionChange = (questionId, optionId) => {
        console.log(questionId);
        selectedOption[`${questionId}`] = optionId
        setSelectedOption(selectedOption);
        console.log(selectedOption);
    };
     
    useEffect(() => {
        if (examDetails && examDetails.questions) {
            setQuestions(examDetails.questions);
        }
    }, [])

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);

            return () => clearInterval(timer); // Cleanup timer on unmount
        }
    }, [timeLeft, targetTime]);

    // Convert seconds to HH:MM:SS format
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const submitResponse = ()=>{
        //change alert with material ui
        if(Object.keys(selectedOption).length != examDetails.questions.length) 
            alert("Select all option");
        //calling third api
        setOpen(true)
    }

    return (
        <>
            <div className={styles.schoolHeader}>
                <p className={styles.schoolName}> 
                Sushila Public School's Test Series
                </p>
                <p>Subject Name : {examDetails.subject}</p>
                <p>Total Questions : {examDetails.questions.length}</p>
                <div className={styles.details}>
                    <Box className={styles.timeBox}>Answered : {Object.keys(selectedOption).length}/{examDetails.questions.length}</Box>
                    <Box className={styles.timeBox}>
                        Time Left : 
                        <span style={{color : "red", marginLeft:"5px"}}> {timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"} </span>
                    </Box>
                </div>
            </div>
            <div className={styles.allQuestions}>
                {
                    questions && questions.map((question, index) => {
                        return <QuestionBox question={question}
                            key={`question9029${index}`}
                            handleOptionChange={handleOptionChange}
                            selectedOption={selectedOption}
                            isDisabled={false}
                            questionNo={index+1} />
                    })
                }
            </div>
            <Button className={styles.examButton} onClick={submitResponse}>Submit</Button>
            <SlideInAlertDialog open={open} handleClose={()=>setOpen(false)} startTest={()=>setOpen(false)}
                isCancel={true} isConfirm={true} cancelMess={"DashBoard"} confirmMess={"Result"}
                title={"Congratulation"}>
                Test Submitted SuccessFully !
            </SlideInAlertDialog>
        </>
    )
}

export default ExamDashBoard