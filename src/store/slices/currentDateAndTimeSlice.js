import { createSlice } from "@reduxjs/toolkit";
import {convertDateAndTime} from "../../dateConversions";

const currentDateAndTimeSlice = createSlice({
    name: 'current',
    initialState: {
        dateAndTime: convertDateAndTime(new Date()),
    },
    reducers: {
        updateCurrentDateAndTime(state, action) {
            state.dateAndTime = convertDateAndTime(new Date());
        },
    },
});

export const { updateCurrentDateAndTime } = currentDateAndTimeSlice.actions;
export const currentDateAndTimeReducer = currentDateAndTimeSlice.reducer;