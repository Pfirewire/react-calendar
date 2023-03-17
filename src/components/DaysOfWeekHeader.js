import {useSelector} from "react-redux";
import {convertDateAndTime} from "../methods/conversionMethods";


function DaysOfWeekHeader({ isSingleDay }) {
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);
    let selectedDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);

    let renderedDaysOfWeek = [];
    if(isSingleDay){
        renderedDaysOfWeek = <div className='flex justify-center flex-grow text-lg'>{dateAndTime.dayString}</div>
    } else {
        selectedDate = new Date(selectedDate.setDate(selectedDate.getDate() - selectedDate.getDay()));
        for(let i = 0; i < 7; i++) {
            const prettyDate = convertDateAndTime(new Date(selectedDate));
            renderedDaysOfWeek.push(<div key={i} className='flex justify-center flex-grow text-lg'>{prettyDate.dayString}</div>);
            selectedDate = new Date(selectedDate.setDate(selectedDate.getDate() + 1));
        }
    }

    return(
        <div className='flex justify-center w-full'>
            {renderedDaysOfWeek}
        </div>
    );
}

export default DaysOfWeekHeader;