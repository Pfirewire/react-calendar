import {convertDateAndTime} from "../../dateConversions";


function MonthDay({ date }) {
    let prettyDate = convertDateAndTime(new Date(date));

    return(
        <div className='border-2 h-60 w-60'>
            {prettyDate.dayString} {prettyDate.monthString} {prettyDate.day}
        </div>
    )
}

export default MonthDay;