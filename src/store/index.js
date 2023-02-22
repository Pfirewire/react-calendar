import { configureStore } from "@reduxjs/toolkit";
import { currentDateAndTimeReducer, updateCurrentDateAndTime } from "./slices/currentDateAndTimeSlice";
import { selectedDateAndTimeReducer, incrementMonth, decrementMonth, changeWeek, changeDay, changeTime } from "./slices/selectedDateAndTimeSlice";

const store = configureStore({
    reducer: {
        currentDateAndTime: currentDateAndTimeReducer,
        selectedDateAndTime: selectedDateAndTimeReducer,
    }
});


export { store, updateCurrentDateAndTime, incrementMonth, decrementMonth, changeWeek, changeDay, changeTime };