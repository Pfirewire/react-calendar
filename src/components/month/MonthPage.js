import { useDispatch, useSelector } from "react-redux";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { incrementMonth, decrementMonth } from "../../store";
import Button from "../Button";
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
        const tempDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);
        const currentMonth = tempDate.getMonth();
        let content = [];
        let monthWeek = 0;
        content.push(<MonthWeek key={monthWeek} startDate={tempDate.setDate(tempDate.getDate() - tempDate.getDay())} />);
        monthWeek++;
        do {
            content.push(<MonthWeek key={monthWeek} startDate={tempDate.setDate(tempDate.getDate() + 7)} />);
            monthWeek++;
        } while (tempDate.getMonth() === currentMonth)
        content.pop();
        return(
            <div>
                {content}
            </div>
        );
    };

    return(
        <div className='flex flex-col'>
            <div className='flex align-center justify-between'>
                <div></div>
                {`${dateAndTime.monthString} ${dateAndTime.year}`}
                <div className='flex flex-row justify-center'>
                    <Button>
                        <GoArrowLeft onClick={handlePrevMonth} />
                    </Button>
                    <Button>
                        <GoArrowRight onClick={handleNextMonth} />
                    </Button>
                </div>
            </div>
            <div>
                Month View
                {renderedWeeks()}
            </div>
        </div>
    );
}

export default MonthPage;