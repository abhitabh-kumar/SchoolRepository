import React, { useEffect, useState } from 'react'
import QuestionBox from './QuestionBox';
import styles from './exam.module.css'
import { Box, Button } from '@mui/material';
import SlideInAlertDialog from '../../materialUIComponents/dialog/SlideInAlertDialog';
import { useNavigate } from 'react-router-dom';
import { computeResult } from '../../services/Result';
import { useSelector } from 'react-redux';
import { getUsername } from '../../services/TokenServices';
import SlideSnackBar from '../../materialUIComponents/snackbar/SlideSnackBar';

//you have to put it in commonUtil
const calculateTimeLeft = (targetTime) => {
    const now = new Date();
    const target = new Date(targetTime);
    const difference = target - now; 

    if (difference > 0) {
        return Math.floor(difference / 1000); 
    }
    return 0; 
};

const ExamDashBoard = ({ examDetails }) => {
    const [selectedOption, setSelectedOption] = useState({});
    const [questions, setQuestions] = useState(null)
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(examDetails.endTime));
    const [open, setOpen] = useState(false);
    const [alert,setAlert] = useState(false);
    const [severity,setSeverity] = useState("success");
    const [message,setMessage] = useState("")
    const token = useSelector((state)=>state.user.token);
    const userName = getUsername(token);
    const navigate = useNavigate();

    const handleOptionChange = (questionId, optionId) => {
        selectedOption[`${questionId}`] = optionId +1;
        setSelectedOption(selectedOption);
    };
     
    useEffect(() => {
        if (examDetails && examDetails.questions) {
            setQuestions(examDetails.questions);
        }
    }, [])

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(calculateTimeLeft(examDetails.endTime));
            }, 1000);
            return () => clearInterval(timer); 
        }
        submitResponse(false)
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const submitResponse = async (check)=>{
        //change alert with material ui
        if(check && Object.keys(selectedOption).length != examDetails.questions.length){
            setMessage("Please select all options");
            setSeverity("warning");
            setAlert(true);
            return;
        }
        const resultdata = {
            userName,
            examId: examDetails.examId,
            questionEntityDto : selectedOption
        }
        try{
            await computeResult(resultdata,token);
            setMessage("Exam submited successfully");
            setSeverity("success");
            setAlert(true);
            setOpen(true)
        }catch(error){
            console.log(error);
            setMessage("Something went wrong while saving exam");
            setSeverity("warning");
            setAlert(true);
        }
    }
    const navigateDashHome = ()=>{
        navigate("/student/dashHome")
        setOpen(false);
    }
    const navigateResult = ()=>{
        navigate("/student/reportCard");
        setOpen(false)
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
            <Button className={styles.examButton} onClick={()=>submitResponse(true)}>Submit</Button>
            <SlideInAlertDialog open={open} handleClose={navigateDashHome} startTest={navigateResult}
                isCancel={true} isConfirm={true} cancelMess={"DashBoard"} confirmMess={"Result"}
                title={"Congratulation"}>
                Test Submitted SuccessFully !
            </SlideInAlertDialog>
            <SlideSnackBar message={message} severity={severity} open={alert} handleClose={()=>setAlert(false)} />
        </>
    )
}

export default ExamDashBoard