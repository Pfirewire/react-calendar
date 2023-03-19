import Day from "./Day";
import app from "../../App";
import {filterAppointmentsToDay} from "../../util/appointmentMethods";

function Week({ monthWeek, startDate, appointments }) {
    const renderedDays = () => {
        let date = new Date(startDate);
        const content = [];
        let dayOfWeek = 0;
        while(dayOfWeek < 7) {
            let appointmentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            appointmentDate = new Date(appointmentDate.setDate(appointmentDate.getDate() + 1));
            content.push(<Day key={dayOfWeek} firstWeek={monthWeek === 1} isSingleWeek={!monthWeek} date={date} appointments={filterAppointmentsToDay(appointments, appointmentDate)} />);
            date = new Date(date.setDate(date.getDate() + 1));
            dayOfWeek++;
        }
        return content;
    };

    return(
        <div className='flex flex-row items-center justify-center w-full'>
            {renderedDays()}
        </div>
    );
}

export default Week;