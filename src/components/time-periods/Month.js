import Week from "./Week";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setDay} from "../../store";
import {filterAppointmentsToWeek} from "../../methods/appointmentMethods";


function Month({ appointments }) {
    const dispatch = useDispatch();
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    useEffect(() => {
        dispatch(setDay(1));
    }, []);

    const renderedWeeks = () => {
        let tempDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);
        const currentMonth = tempDate.getMonth();
        let content = [];
        let monthWeek = 0;
        let startDate = tempDate.setDate(tempDate.getDate() - tempDate.getDay() - 1);
        do {

            let appointmentDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate());
            appointmentDate = new Date(appointmentDate.setDate(appointmentDate.getDate() + 1));
            content.push(<Week key={monthWeek} monthWeek={monthWeek+1} startDate={startDate} appointments={filterAppointmentsToWeek(appointments, appointmentDate)} />);
            monthWeek++;
            startDate = tempDate.setDate(tempDate.getDate() + 7);
        } while (tempDate.getMonth() === currentMonth)
        return content;
    };

    return (
        <div>
            {renderedWeeks()}
        </div>
    );
}

export default Month;