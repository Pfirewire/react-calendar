import Day from "./Day";
import app from "../App";

function Week({ monthWeek, startDate, appointments }) {

    const dayContainsAppointment = date => {
        return appointments.filter(appointment => {
            const appointmentDate = new Date(appointment.date);
            return date.getFullYear() === appointmentDate.getFullYear() &&
                date.getMonth() === appointmentDate.getMonth() &&
                date.getDate() === appointmentDate.getDate();
        });
    };

    const renderedDays = () => {
        let date = new Date(startDate);
        const content = [];
        let dayOfWeek = 0;
        date.setDate(date.getDate() - 1);
        while(dayOfWeek < 7) {
            content.push(<Day key={dayOfWeek} firstWeek={monthWeek === 1} isSingleWeek={!monthWeek} date={date} appointments={dayContainsAppointment(date)} />);
            date = new Date(date.setDate(date.getDate() + 1));
            dayOfWeek++;
        }
        return content;
    }

    return(
        <div className='flex flex-row items-center justify-center'>
            {renderedDays()}
        </div>
    );
}

export default Week;