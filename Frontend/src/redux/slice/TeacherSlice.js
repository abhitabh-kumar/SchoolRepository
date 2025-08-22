import { createSlice } from "@reduxjs/toolkit";
import { getUsername, validateToken } from "../../services/TokenServices";

export const TeacherSlice = createSlice({
    name:'teacher',
    initialState:{
        allTeachers : null,
    },
    reducers:{
        setTeacher: (state,action) =>{
            state.allTeachers = action.payload
        }
    }
})

export const { setTeacher } = TeacherSlice.actions

export default TeacherSlice.reducer