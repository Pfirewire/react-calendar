import { convertDateAndTime } from "../../dateConversions";

function MonthDay({ firstWeek, date }) {
    const prettyDate = convertDateAndTime(new Date(date));
    const showMonth = prettyDate.day === 1;

    return(
        <div className='border-2 h-60 w-60'>
            {firstWeek && <div className='flex justify-center'>{prettyDate.dayString}</div>}
            <div className='flex justify-center'>
                {showMonth && prettyDate.monthString} {prettyDate.day}
            </div>
        </div>
    )
}

export default MonthDay;