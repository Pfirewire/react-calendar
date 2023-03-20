import { useDispatch, useSelector } from "react-redux";
import {incrementWeek, decrementWeek, useFetchAppointmentsQuery} from "../../store";
import Header from "../Header";
import Week from "../time-periods/Week";
import {filterAppointmentsToWeek} from "../../util/appointmentMethods";
import DaysOfWeekHeader from "../DaysOfWeekHeader";
import TimeBlocks from "../time-periods/TimeBlocks";

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
            <div className='w-full h-full flex'>
                <TimeBlocks />
                <Week appointments={appointments} startDate={selectedDate.setDate(selectedDate.getDate() - selectedDate.getDay() - 1)} />
            </div>
        </div>
    );
}

export default WeekPage;