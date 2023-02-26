import { convertDateAndTime } from "../dateConversions";
import { useSelector } from "react-redux";
import className from 'classnames';

function Day({ firstWeek, isSingleWeek, date }) {
    const { month } = useSelector(state => state.selectedDateAndTime.dateAndTime);
    const prettyDate = convertDateAndTime(new Date(date));
    const showMonth = prettyDate.day === 1;
    const classes = className(
        'border-2 border-slate-400 w-48',
        {
            'bg-gray-200': prettyDate.month !== month,
            'h-32': !isSingleWeek,
            'h-4/5': isSingleWeek
        }
    );

    return(
        <div className='mx-auto h-screen'>
            {firstWeek && <div className='flex justify-center text-lg'>{prettyDate.dayString}</div>}
            <div className={classes}>
                <div className='flex justify-center'>
                    {showMonth && prettyDate.monthString} {prettyDate.day}
                </div>
            </div>
        </div>
    );
}

export default Day;