import { createSlice } from "@reduxjs/toolkit";
import { convertDateAndTime } from "../../dateConversions";

const currentDateAndTimeSlice = createSlice({
    name: 'current',
    initialState: {
        dateAndTime: convertDateAndTime(new Date())
    },
});

export const currentDateAndTimeReducer = currentDateAndTimeSlice.reducer;