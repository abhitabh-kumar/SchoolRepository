import { Button, Typography } from '@mui/material'
import React from 'react'
import './FAQ.css'
import CustomizedAccordions from '../../materialUIComponents/accordion/CustomizedAccordions';

const FAQ = () => {
    const questionsAndAnswers = [
        { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
        { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript used in React." },
        { question: "What is a component in React?", answer: "A component is a reusable piece of UI in React." },
        { question: "What is state in React?", answer: "State is an object that holds information that influences the output of a component." },
        { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
        { question: "What is a prop in React?", answer: "Props are inputs to components and are passed down from parent to child components." },
        { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript used in React." },
        { question: "What is a component in React?", answer: "A component is a reusable piece of UI in React." },
    ];
    return (
        <>
            <div className="faq">
                <Typography variant="h3" textAlign="center" mb={3} sx={{ fontWeight: 'bold' }}>
                    Frequently Asked Question
                </Typography>
                <Button className='askedQuestion'>Ask a Question</Button>
            </div>
            <CustomizedAccordions faq={questionsAndAnswers} />
        </>
    )
}

export default FAQ