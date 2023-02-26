import { useDispatch, useSelector } from "react-redux";
import { incrementMonth, decrementMonth } from "../../store";
import Header from "../Header";
import Week from "./Week";

function WeekPage() {
    const dispatch = useDispatch();
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    const handlePrevWeek = () => {
        dispatch(decrementMonth());
    };

    const handleNextWeek = () => {
        dispatch(incrementMonth());
    };

    const renderedWeeks = () => {
        let tempDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);
        const currentMonth = tempDate.getMonth();
        let content = [];
        let monthWeek = 0;
        content.push(<Week key={monthWeek} monthWeek={monthWeek+1} startDate={tempDate.setDate(tempDate.getDate() - tempDate.getDay())} />);
        monthWeek++;
        do {
            content.push(<Week key={monthWeek} monthWeek={monthWeek+1} startDate={tempDate.setDate(tempDate.getDate() + 7)} />);
            monthWeek++;
        } while (tempDate.getMonth() === currentMonth)
        content.pop();
        return content;
    };

    return(
        <div className='flex flex-col'>
            <Header handlePrev={handlePrevWeek} handleNext={handleNextWeek} />
            <div>
                {renderedWeeks()}
            </div>
        </div>
    );
}

export default WeekPage;