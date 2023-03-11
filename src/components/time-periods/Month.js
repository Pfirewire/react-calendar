import Week from "./Week";
import {useSelector} from "react-redux";


function Month({ appointments }) {
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    const weekContainsAppointment = date => {
        const startDate = new Date(date);
        let endDate = (new Date(new Date(date).setDate(new Date(date).getDate() + 6)));
        endDate.setHours(23);
        endDate.setMinutes(59);
        const trimmedAppointments = appointments.filter(appointment => {
            let appointmentDate = new Date(appointment.date);
            appointmentDate.setHours(0);
            appointmentDate.setMinutes(0);
            return appointmentDate >= startDate && appointmentDate <= endDate;
        });
        console.log(trimmedAppointments);
        return trimmedAppointments;
    };

    const renderedWeeks = () => {
        let tempDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);
        const currentMonth = tempDate.getMonth();
        let content = [];
        let monthWeek = 0;

        let startDate = tempDate.setDate(tempDate.getDate() - tempDate.getDay());
        do {
            content.push(<Week key={monthWeek} monthWeek={monthWeek+1} startDate={startDate} appointments={weekContainsAppointment(startDate)} />);
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