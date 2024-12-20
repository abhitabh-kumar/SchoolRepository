import React, { useEffect, useState } from 'react'
import './question.css'

const QuestionBox = ({question,handleOptionChange,selectedOption}) => {
    const [select,setSelect] = useState(null);
    
    const setOption = (questionId, index)=>{
        handleOptionChange(questionId,index);
        setSelect(index);
    }
    
    return (
        <div className="questionBox">
            <div className="tagWithQuestionNo">
                1. Multiple Choice
            </div>
            <div className="point">2 pt</div>
            <div className="question">
                {question.question}
            </div>
            <div className="option">
                {question.options.map((option,index) => (
                    <label key={`${index}option231`} style={{ color : select === index ? 'rgb(22 184 52)' : 'black', cursor: 'pointer'}}>
                        <input
                            type="radio"
                            name={`option_${question.questionId}`}
                            value={index}
                            checked={select === index}
                            onChange={() => setOption(question.questionId,index)}
                            className='radioInput'
                        />
                        <span className="customRadio"></span>
                        {option}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default QuestionBox