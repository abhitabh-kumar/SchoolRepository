import { createSlice } from "@reduxjs/toolkit";

export const ExamSlice = createSlice({
    name:'exam',
    initialState:{
        allQuestions : null,
    },
    reducers:{
        setAllQuestions: (state,action) =>{
            console.log("setting questions")
            console.log(action.payload);
            state.allQuestions = action.payload
        },
        addQuestions:(state,action) =>{
            if(!state.allQuestions)
                state.allQuestions = [];
            state.allQuestions.add(action.payload);
        }
    }
})

export const { setAllQuestions, addQuestions} = ExamSlice.actions

export default ExamSlice.reducer