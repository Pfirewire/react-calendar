import { createSlice } from "@reduxjs/toolkit";
import { convertDateAndTime } from "../../dateConversions";

const selectedDateAndTimeSlice = createSlice({
    name: 'selected',
    initialState: {
        dateAndTime: convertDateAndTime(new Date())
    },
    reducers: {
        incrementMonth(state, action) {
            const date = state.dateAndTime;
            if(date.month === 11) {
                date.month = 0;
                date.year = date.year + 1;
            } else {
                date.month = date.month + 1;
            }
        },
        decrementMonth(state, action) {
            const month = state.dateAndTime.getMonth();
            state.dateAndTime.setMonth(month )
        },
        changeWeek(state, action) {

        },
        changeDay(state, action) {

        },
        changeTime(state, action) {

        }
    },
});

export const {
    incrementMonth,
    decrementMonth,
    changeWeek,
    changeDay,
    changeTime,
} = selectedDateAndTimeSlice.actions;
export const selectedDateAndTimeReducer = selectedDateAndTimeSlice.reducer;