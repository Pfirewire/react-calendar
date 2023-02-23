import {convertDateAndTime} from "../../dateConversions";


function MonthDay({ date }) {
    let prettyDate = convertDateAndTime(new Date(date));

    return(
        <div>
            {prettyDate.dayString} {prettyDate.monthString} {prettyDate.day}
        </div>
    )
}

export default MonthDay;