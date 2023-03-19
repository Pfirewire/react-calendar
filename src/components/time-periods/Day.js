import { convertDateAndTime } from "../../util/conversionMethods";
import { useSelector } from "react-redux";
import className from 'classnames';
import Appointment from "../appointments/Appointment";
import AppointmentMini from "../appointments/AppointmentMini";

// Day Component to show single Day in all pages of calendar
// Receives props:
// firstWeek: true if first week of month
// isSingleWeek: true if called from WeekPage
// isSingleDay: true if called from DayPage
// date: date passed in from parent component
function Day({ firstWeek, isSingleWeek, isSingleDay, date, appointments, ...rest }) {
    const { month, day } = useSelector(state => state.selectedDateAndTime.dateAndTime);
    const prettyDate = convertDateAndTime(new Date(date));
    const showMonth = prettyDate.day === 1;
    const classes = className(
        rest.className,
        'border-2 border-slate-400 flex-grow w-full overflow-auto',
        {
            'bg-gray-700': prettyDate.month !== month,
            'w-auto': !isSingleDay,
            'w-full': isSingleDay,
            'h-36': !isSingleWeek && !isSingleDay,
            'h-4/5': isSingleWeek || isSingleDay
        }
    );

    const singleDayClasses = className(
        rest.className,
        'mx-auto h-screen w-full',
        {
            'flex-grow': isSingleDay
        }
    );

    const renderedAppointmentMinis = appointments.map((appointment, index) => {
        if(isSingleDay || isSingleWeek) {
            return <Appointment key={index} appointment={appointment} />;
        } else {
            return <AppointmentMini key={index} appointment={appointment} />;
        }
    });

    return(
        <div className={(isSingleDay || isSingleWeek) ? singleDayClasses : 'w-full' }>
            <div className={classes}>
                <div className='flex justify-center'>
                    {showMonth && !isSingleDay && prettyDate.monthString} {date && prettyDate.day}
                    {!date && day}
                </div>
                {renderedAppointmentMinis}
            </div>
        </div>
    );
}

export default Day;