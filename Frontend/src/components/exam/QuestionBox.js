import React, { useEffect, useState } from 'react'
import './question.css'

const QuestionBox = ({question,handleOptionChange,selectedOption,isDisabled,questionNo}) => {
    const [select,setSelect] = useState(null);
    
    const setOption = (questionId, index)=>{
        if(!isDisabled){
            handleOptionChange(questionId,index);
            setSelect(index);
        }
    }
    useEffect(()=>{
        if(selectedOption != null) 
            setSelect(selectedOption);
    },[question,questionNo])
        
    return (
        <div className="questionBox">
            <div className="tagWithQuestionNo">
                {questionNo}. Multiple Choice
            </div>
            <div className="point">{question.marks} pt</div>
            <div className="question">
                {question.question}
            </div>
            <div className="option">
                {question && question.options.map((option,index) => (
                    <label key={`${index}option231`} style={{ color : select === index ? 'rgb(22 184 52)' : 'black', cursor: 'pointer'}}>
                        <input
                            type="radio"
                            name={`option_${question.questionId}`}
                            value={index}
                            checked={select === index}
                            onChange={() => setOption(question.questionId,index)}
                            className='radioInput'
                            disabled={isDisabled}
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