import { Button, Grid2, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './exam.module.css';
import { examList } from '../../dummyData/exams'
import { useSearchParams } from 'react-router-dom';
import ExamDashBoard from './ExamDashBoard';
import { FenceTwoTone } from '@mui/icons-material';

const questionDesc = [
    'Each question offers four options, with only one correct answer',
    'You must select the correct option for mandatory questions.',
    'Some questions are optional, and you may choose to skip them.',
    'Skipping optional questions will not affect your overall score.'
];
const examDesc = [
    'Please ensure you have a stable Internet connection.',
    'This is timed test. Please make sure you are not interrupted during the test, as the timer cannot be pause once started.',
];


const ExamLandPage = () => {
    const isMobile = useMediaQuery("(min-width:800px)");
    const [searchParams] = useSearchParams();
    const examId = searchParams.get('examId');
    const [examDetails, setExamDetails] = useState(null);
    const [startExam, setStartExam] = useState(false);

    useEffect(() => {
        const fetchedExam = examList.filter(item => item.examId == examId);
        if (fetchedExam != null && fetchedExam.length != 0)
            setExamDetails(fetchedExam[0]);
    }, []);

    return (
        <>
            {
                startExam ? <ExamDashBoard examDetails={examDetails}/> :
                    <Grid2 container spacing={2}>
                        <Grid2 size={isMobile ? 6 : 12} className={styles.schoolDesc}>
                            <div className={styles.customSchoolDescBox}>
                                <p>Hey Pandey</p>
                                <h2 style={{ color: 'white' }}>Welcome to <br /> <span style={{ color: 'yellow' }}> Sushila Public School's </span>  Test Series</h2>
                            </div>
                        </Grid2>
                        {
                            examDetails && <Grid2 size={isMobile ? 6 : 12} className={styles.quesDesc}>
                                <h1 style={{ marginBottom: '0px' }}>{examDetails.subject} Test</h1>
                                <ul className={styles.quesDescription}>
                                    <p style={{ fontSize: '1.1rem', position: 'relative', left: '-45px' }}>Instructions :</p>
                                    {
                                        questionDesc && questionDesc.map((item, index) => {
                                            return <li key={`0086tw${index}`}>{item}</li>
                                        })
                                    }
                                </ul>
                                <div className={styles.quesDescription}>
                                    {
                                        examDesc && examDesc.map((item, index) => {
                                            return <p key={`002qw${index}`}>{index + 1}. {item}</p>
                                        })
                                    }
                                </div>
                                <div className={styles.questionDetails}>
                                    <p>Test Durations <br /> {examDetails.startTiming} </p>
                                    <p>No. of Qusetions  <br /> {examDetails.questions.length} questions</p>
                                </div>
                                <Button className={styles.examButton} onClick={() => setStartExam(true)}>Start</Button>
                            </Grid2>
                        }
                        <div className={styles.footer}>
                            <span>For any query : </span>
                            <span> sushilapublicschool@gmail.com</span>
                        </div>
                    </Grid2>
            }
        </>
    )
}

export default ExamLandPage