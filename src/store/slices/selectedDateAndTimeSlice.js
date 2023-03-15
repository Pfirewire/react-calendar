import { createSlice } from "@reduxjs/toolkit";
import {convertDateAndTime, getDateObject} from "../../methods/conversionMethods";

const setSelectedDate = (date) => {
    date.setDate(1);
    return date;
};

const selectedDateAndTimeSlice = createSlice({
    name: 'selected',
    initialState: {
        dateAndTime: convertDateAndTime(setSelectedDate(new Date())),
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
            date.setDate(1);
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
            date.setDate(1);
            state.dateAndTime = convertDateAndTime(date);
        },
        incrementWeek(state, action) {
            let date = getDateObject(state.dateAndTime);
            date.setDate(date.getDate() + 7);
            state.dateAndTime = convertDateAndTime(date);
        },
        decrementWeek(state, action) {
            let date = getDateObject(state.dateAndTime);
            date.setDate(date.getDate() - 7);
            state.dateAndTime = convertDateAndTime(date);
        },
        incrementDay(state, action) {
            let date = getDateObject(state.dateAndTime);
            date.setDate(date.getDate() + 1);
            state.dateAndTime = convertDateAndTime(date);
        },
        decrementDay(state, action) {
            let date = getDateObject(state.dateAndTime);
            date.setDate(date.getDate() - 1);
            state.dateAndTime = convertDateAndTime(date);
        },
        setDay(state, action) {
            let date = getDateObject(state.dateAndTime);
            date.setDate(action.payload);
            state.dateAndTime = convertDateAndTime(date);
        },
        changeTime(state, action) {

        }
    },
});

export const {
    incrementMonth,
    decrementMonth,
    incrementWeek,
    decrementWeek,
    incrementDay,
    decrementDay,
    setDay,
    changeTime,
} = selectedDateAndTimeSlice.actions;
export const selectedDateAndTimeReducer = selectedDateAndTimeSlice.reducer;