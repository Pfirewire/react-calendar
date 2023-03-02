import { configureStore } from "@reduxjs/toolkit";
import { currentDateAndTimeReducer, updateCurrentDateAndTime } from "./slices/currentDateAndTimeSlice";
import {
    selectedDateAndTimeReducer,
    incrementMonth,
    decrementMonth,
    incrementWeek,
    decrementWeek,
    incrementDay,
    decrementDay,
    changeTime
} from "./slices/selectedDateAndTimeSlice";
import { appointmentsApi } from "./apis/appointmentsApi";

const store = configureStore({
    reducer: {
        currentDateAndTime: currentDateAndTimeReducer,
        selectedDateAndTime: selectedDateAndTimeReducer,
        [appointmentsApi.reducerPath]: appointmentsApi.reducer,
    }
});


export {
    store,
    updateCurrentDateAndTime,
    incrementMonth,
    decrementMonth,
    incrementWeek,
    decrementWeek,
    incrementDay,
    decrementDay,
    changeTime
};