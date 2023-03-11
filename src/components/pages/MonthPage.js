import {useDispatch, useSelector} from "react-redux";
import { incrementMonth, decrementMonth } from "../../store";
import { useFetchAppointmentsQuery } from "../../store";
import Header from "../Header";
import Month from "../time-periods/Month";

function MonthPage() {
    const dispatch = useDispatch();
    const { data, error, isFetching } = useFetchAppointmentsQuery();
    const { year, prettyMonth } = useSelector(state => state.selectedDateAndTime.dateAndTime)
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
        appointments = data.filter(appointment => {
            return appointment.date.includes(`${year}-${prettyMonth}`);
        });
    }
    return(
        <div className='flex flex-col'>
            <Header handlePrev={handlePrevMonth} handleNext={handleNextMonth} />
            <Month appointments={appointments} />
        </div>
    );
}

export default MonthPage;