import { convertDateAndTime } from "../../dateConversions";
import { useSelector } from "react-redux";
import className from 'classnames';

function MonthDay({ firstWeek, date }) {
    const { month } = useSelector(state => state.selectedDateAndTime.dateAndTime);
    const prettyDate = convertDateAndTime(new Date(date));
    const showMonth = prettyDate.day === 1;
    const classes = className(
        'border-2 border-slate-400 h-36 w-48',
        {
            'bg-slate-200': prettyDate.month !== month,
        }

    );

    return(
        <div className='mx-auto'>
            {firstWeek && <div className='flex justify-center'>{prettyDate.dayString}</div>}
            <div className={classes}>
                <div className='flex justify-center'>
                    {showMonth && prettyDate.monthString} {prettyDate.day}
                </div>
            </div>
        </div>
    );
}

export default MonthDay;