import Week from "./Week";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setDay} from "../../store";
import {filterAppointmentsToWeek} from "../../util/appointmentMethods";
import {weeksInMonth} from "../../util/conversionMethods";


function Month({ appointments }) {
    const dispatch = useDispatch();
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    useEffect(() => {
        dispatch(setDay(1));
    }, []);

    const renderedWeeks = () => {
        let tempDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);
        const weeks = weeksInMonth(tempDate);
        let content = [];
        let monthWeek = 0;
        let startDate = tempDate.setDate(tempDate.getDate() - tempDate.getDay() - 1);
        for(let i=0; i<weeks; i++) {
            let appointmentDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate());
            appointmentDate = new Date(appointmentDate.setDate(appointmentDate.getDate() + 1));
            let filteredAppointments = [];
            filteredAppointments = filterAppointmentsToWeek(appointments, appointmentDate);
            console.log(filteredAppointments);
            content.push(<Week key={monthWeek} monthWeek={monthWeek+1} weeksInMonth={weeks} startDate={startDate} appointments={filteredAppointments} />);
            monthWeek++;
            startDate = tempDate.setDate(tempDate.getDate() + 7);
        }
        return content;
    };

    return (
        <div className='w-full flex flex-col h-full'>
            {renderedWeeks()}
        </div>
    );
}

export default Month;