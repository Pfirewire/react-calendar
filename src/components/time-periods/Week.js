import Day from "./Day";
import {filterAppointmentsToDay} from "../../util/appointmentMethods";
import className from 'classnames';

function Week({ monthWeek, startDate, appointments, weeksInMonth, ...rest }) {
    const classes = className(
        'flex flex-row items-center justify-center w-full min-h-[9rem]',
        rest.className,
        {
            'h-[calc(100%/4)]': weeksInMonth === 4,
            'h-[calc(100%/5)]': weeksInMonth === 5,
            'h-[calc(100%/6)]': weeksInMonth === 6,
        }
    );

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
        <div className={classes}>
            {renderedDays()}
        </div>
    );
}

export default Week;