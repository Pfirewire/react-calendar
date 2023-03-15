import { createSlice } from "@reduxjs/toolkit";
import {convertDateAndTime} from "../../methods/conversionMethods";

const currentDateAndTimeSlice = createSlice({
    name: 'current',
    initialState: {
        dateAndTime: convertDateAndTime(new Date()),
    },
    reducers: {
        updateCurrentDateAndTime(state, action) {
            if(state.dateAndTime.second !== new Date().getSeconds()){
                state.dateAndTime = convertDateAndTime(new Date());
            }
        },
    },
});

export const { updateCurrentDateAndTime } = currentDateAndTimeSlice.actions;
export const currentDateAndTimeReducer = currentDateAndTimeSlice.reducer;