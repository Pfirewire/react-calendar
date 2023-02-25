import { useDispatch, useSelector } from "react-redux";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { incrementMonth, decrementMonth } from "../../store";
import Button from "../Button";
import Header from "../Header";
import MonthWeek from "./MonthWeek";

function MonthPage() {
    const dispatch = useDispatch();
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    const handlePrevMonth = () => {
        dispatch(decrementMonth());
    };

    const handleNextMonth = () => {
        dispatch(incrementMonth());
    };

    const renderedWeeks = () => {
        let tempDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);
        const currentMonth = tempDate.getMonth();
        let content = [];
        let monthWeek = 0;
        content.push(<MonthWeek key={monthWeek} monthWeek={monthWeek+1} startDate={tempDate.setDate(tempDate.getDate() - tempDate.getDay())} />);
        monthWeek++;
        do {
            content.push(<MonthWeek key={monthWeek} monthWeek={monthWeek+1} startDate={tempDate.setDate(tempDate.getDate() + 7)} />);
            monthWeek++;
        } while (tempDate.getMonth() === currentMonth)
        content.pop();
        return content;
    };

    return(
        <div className='flex flex-col'>
            <Header handlePrev={handlePrevMonth} handleNext={handleNextMonth} />
            <div>
                {renderedWeeks()}
            </div>
        </div>
    );
}

export default MonthPage;