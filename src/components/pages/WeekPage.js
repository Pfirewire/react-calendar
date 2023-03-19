import { useDispatch, useSelector } from "react-redux";
import {incrementWeek, decrementWeek, useFetchAppointmentsQuery} from "../../store";
import Header from "../Header";
import Week from "../time-periods/Week";
import {filterAppointmentsToWeek} from "../../util/appointmentMethods";
import DaysOfWeekHeader from "../DaysOfWeekHeader";

function WeekPage() {
    const dispatch = useDispatch();
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);
    const { data, error, isFetching } = useFetchAppointmentsQuery();
    const selectedDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);

    const handlePrevWeek = () => {
        dispatch(decrementWeek());
    };

    const handleNextWeek = () => {
        dispatch(incrementWeek());
    };

    let appointments;
    if(isFetching) {
        appointments = [];
    } else if(error) {
        appointments = [];
    } else {
        appointments = filterAppointmentsToWeek(data, selectedDate);
    }

    return(
        <div className='flex flex-col items-end w-full'>
            <Header handlePrev={handlePrevWeek} handleNext={handleNextWeek} />
            <DaysOfWeekHeader isSingleDay={false} />
            <Week appointments={appointments} startDate={selectedDate.setDate(selectedDate.getDate() - selectedDate.getDay() - 1)} />
        </div>
    );
}

export default WeekPage;