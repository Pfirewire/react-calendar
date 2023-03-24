import { useDispatch, useSelector } from "react-redux";
import {incrementDay, decrementDay, useFetchAppointmentsQuery} from "../../store";
import Header from "../Header";
import Day from '../time-periods/Day';
import {filterAppointmentsToDay} from "../../util/appointmentMethods";
import DaysOfWeekHeader from "../DaysOfWeekHeader";
import TimeBlocks from "../time-periods/TimeBlocks";

function DayPage() {
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);
    const { data, error, isFetching } = useFetchAppointmentsQuery();
    const selectedDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);
    const dispatch = useDispatch();

    const handlePrevDay = () => {
        dispatch(decrementDay());
    };

    const handleNextDay = () => {
        dispatch(incrementDay());
    };

    let appointments;
    if(isFetching) {
        appointments = [];
    } else if(error) {
        appointments = [];
    } else {
        appointments = filterAppointmentsToDay(data, selectedDate);
    }

    return(
        <div className='flex flex-col items-end w-full'>
            <Header handlePrev={handlePrevDay} handleNext={handleNextDay} />
            <div className='w-full flex items-stretch'>
                <TimeBlocks />
                <div className='w-full flex flex-col'>
                    <DaysOfWeekHeader isSingleDay={true} />
                    <Day className='grow' isSingleDay date={selectedDate} appointments={appointments} />
                </div>
            </div>
        </div>
    );
}

export default DayPage;