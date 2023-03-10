import { useDispatch, useSelector } from "react-redux";
import {incrementDay, decrementDay, useFetchAppointmentsQuery} from "../../store";
import Header from "../Header";
import Day from '../time-periods/Day';
import app from "../../App";

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

    const renderAppointments = () => {
        return data.filter(appointment => {
            const appointmentDate = new Date(appointment.date);
            appointmentDate.setDate(appointmentDate.getDate() + 1);
            console.log(appointment);
            console.log(`Appointment Year: ${appointmentDate.getFullYear()}, Month: ${appointmentDate.getMonth()}, Day: ${appointmentDate.getDate()}`);
            console.log(`Selected Year: ${selectedDate.getFullYear()}, Month: ${selectedDate.getMonth()}, Day: ${selectedDate.getDate()}`);
            return selectedDate.getFullYear() === appointmentDate.getFullYear() &&
            selectedDate.getMonth() === appointmentDate.getMonth() &&
            selectedDate.getDate() === appointmentDate.getDate()
        });
    };

    let appointments;
    if(isFetching) {
        appointments = [];
    } else if(error) {
        appointments = [];
    } else {
        appointments = renderAppointments();
    }

    return(
        <div className='flex flex-col flex-grow m-6'>
            <Header handlePrev={handlePrevDay} handleNext={handleNextDay} />
            <div className='flex justify-center items-center'>
                <Day isSingleDay date={selectedDate} appointments={appointments} />
            </div>
        </div>
    );
}

export default DayPage;