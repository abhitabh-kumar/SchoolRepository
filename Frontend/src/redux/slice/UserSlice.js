import { createSlice } from "@reduxjs/toolkit";
import { getUsername, validateToken } from "../../services/TokenServices";

export const UserSlice = createSlice({
    name:'user',
    initialState:{
        token : localStorage.getItem("token") != null && validateToken(localStorage.getItem("token")),
        userName : localStorage.getItem("token") != null && getUsername(localStorage.getItem("token")),
        role : localStorage.getItem("role") ? localStorage.getItem("role") : ""
    },
    reducers:{
        setUser: (state,action) =>{
            const { user_name, access_token, role} = action.payload;
            state.token = `Bearer ${access_token}`;
            state.userName = user_name; 
            state.role = role;
            localStorage.setItem("token", access_token); 
            localStorage.setItem("role",role);
        },
        logoutUser: (state) => {
            console.log("logout user");
            state.token = null;
            state.userName = null;
            state.role = null;
            if(localStorage.getItem("token")) localStorage.removeItem("token"); // Remove token on logout
            if(localStorage.getItem("role")) localStorage.removeItem("role");
        }
    }
})

export const { logoutUser, setUser } = UserSlice.actions

export default UserSlice.reducer