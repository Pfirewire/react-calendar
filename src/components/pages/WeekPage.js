import { useDispatch, useSelector } from "react-redux";
import {incrementWeek, decrementWeek, useFetchAppointmentsQuery} from "../../store";
import Header from "../Header";
import Week from "../Week";

function WeekPage() {
    const dispatch = useDispatch();
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);
    const { data, error, isFetching } = useFetchAppointmentsQuery();
    const tempDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);

    const handlePrevWeek = () => {
        dispatch(decrementWeek());
    };

    const handleNextWeek = () => {
        dispatch(incrementWeek());
    };

    const renderAppointments = () => {
        let appointmentList = [];
        appointmentList.push(...(data.filter(appointment => {
            let contains = false;
            let date = new Date(new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate()).setDate(tempDate.getDate() - tempDate.getDay()));
            for(let i = 0; i < 7; i++) {
                const appointmentDate = new Date(appointment.date);
                if(date.getFullYear() === appointmentDate.getFullYear() &&
                    date.getMonth() === appointmentDate.getMonth() &&
                    date.getDate() === appointmentDate.getDate()) {
                    contains = true;
                }
                date = new Date(date.setDate(date.getDate() + 1));
            }
            return contains;
        })));
        return appointmentList;
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
        <div className='flex flex-col'>
            <Header handlePrev={handlePrevWeek} handleNext={handleNextWeek} />
            <div>
                <Week appointments={appointments} startDate={tempDate.setDate(tempDate.getDate() - tempDate.getDay())} />
            </div>
        </div>
    );
}

export default WeekPage;