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
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        currentDateAndTime: currentDateAndTimeReducer,
        selectedDateAndTime: selectedDateAndTimeReducer,
        [appointmentsApi.reducerPath]: appointmentsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(appointmentsApi.middleware)
        ;
    },
});

setupListeners(store.dispatch);

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
export {
    useFetchAppointmentsQuery,
    useAddAppointmentMutation,
    useEditAppointmentMutation,
    useDeleteAppointmentMutation
} from './apis/appointmentsApi';