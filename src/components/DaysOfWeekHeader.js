import {useSelector} from "react-redux";
import {convertDateAndTime} from "../methods/conversionMethods";


function DaysOfWeekHeader({ isSingleDay }) {
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);
    let selectedDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);

    let renderedDaysOfWeek = [];
    if(isSingleDay){
        renderedDaysOfWeek = <div className='flex justify-center text-lg'>{dateAndTime.dayString}</div>
    } else {
        selectedDate = new Date(selectedDate.setDate(selectedDate.getDate() - selectedDate.getDay()));
        for(let i = 0; i < 7; i++) {
            const prettyDate = convertDateAndTime(new Date(selectedDate));
            renderedDaysOfWeek.push(<div className='flex justify-center text-lg w-56'>{prettyDate.dayString}</div>);
            selectedDate = new Date(selectedDate.setDate(selectedDate.getDate() + 1));
        }
    }

    return(
        <div className='flex justify-center'>
            {renderedDaysOfWeek}
        </div>
    );
}

export default DaysOfWeekHeader;