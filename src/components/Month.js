import Week from "./Week";
import {useSelector} from "react-redux";


function Month({ appointments }) {
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    const weekContainsAppointment = date => {
        const startDate = new Date(date);
        const endDate = new Date(new Date(date).setDate(new Date(date).getDate() + 6));
        const trimmedAppointments = appointments.filter(appointment => {
            const appointmentDate = new Date(appointment.date);
            return appointmentDate >= startDate && appointmentDate <= endDate;
        });
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