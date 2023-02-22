import { configureStore } from "@reduxjs/toolkit";
import {currentDateAndTimeReducer} from "./slices/currentDateAndTimeSlice";

const store = configureStore({
    reducer: {
        currentDateAndTime: currentDateAndTimeReducer,

    }
});

export { store };