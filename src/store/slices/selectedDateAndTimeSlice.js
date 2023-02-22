import { createSlice } from "@reduxjs/toolkit";
import {convertDateAndTime, getDateObject} from "../../dateConversions";

const selectedDateAndTimeSlice = createSlice({
    name: 'selected',
    initialState: {
        dateAndTime: convertDateAndTime(new Date()),
    },
    reducers: {
        incrementMonth(state, action) {
            let date = getDateObject(state.dateAndTime);
            if(date.getMonth() === 11) {
                date.setMonth(0);
                date.setFullYear(date.getFullYear() + 1);
            } else {
                date.setMonth(date.getMonth() + 1);
            }
            state.dateAndTime = convertDateAndTime(date);
        },
        decrementMonth(state, action) {
            let date = getDateObject(state.dateAndTime);
            if(date.getMonth() === 0) {
                date.setMonth(11);
                date.setFullYear(date.getFullYear() - 1);
            } else {
                date.setMonth(date.getMonth() - 1);
            }
            state.dateAndTime = convertDateAndTime(date);
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