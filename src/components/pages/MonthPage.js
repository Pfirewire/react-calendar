import {useDispatch, useSelector} from "react-redux";
import { incrementMonth, decrementMonth } from "../../store";
import { useFetchAppointmentsQuery } from "../../store";
import Header from "../Header";
import Month from "../time-periods/Month";
import {useEffect} from "react";
import {filterAppointmentsToMonth} from "../../methods/appointmentMethods";
import DaysOfWeekHeader from "../DaysOfWeekHeader";

function MonthPage() {
    const dispatch = useDispatch();
    const { data, error, isFetching } = useFetchAppointmentsQuery();
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);
    const selectedDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);
    const handlePrevMonth = () => {
        dispatch(decrementMonth());
    };

    const handleNextMonth = () => {
        dispatch(incrementMonth());
    };

    let appointments;
    if(isFetching) {
        appointments = [];
    } else if(error) {
        appointments = [];
    } else {
        appointments = filterAppointmentsToMonth(data, selectedDate);
    }
    return(
        <div className='flex flex-col w-full items-end'>
            <Header handlePrev={handlePrevMonth} handleNext={handleNextMonth} />
            <DaysOfWeekHeader isSingleDay={false} />
            <Month appointments={appointments} />
        </div>
    );
}

export default MonthPage;