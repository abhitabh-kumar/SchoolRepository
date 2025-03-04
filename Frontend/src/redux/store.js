import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/UserSlice";
import teacherReducer from "./slice/TeacherSlice";
import examReducer from "./slice/ExamSlice";

const Store = configureStore({
  reducer: {
    user : userReducer,
    teacher : teacherReducer,
    exam : examReducer
  },
});

export default Store;
