import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import vacationsReducer from "./VacationSlice";


export default configureStore({
    reducer: {
        authSlice: authReducer,
        vacations: vacationsReducer,
    }
})

