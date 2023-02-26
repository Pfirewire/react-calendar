import { useDispatch, useSelector } from "react-redux";
import { incrementWeek, decrementWeek } from "../../store";
import Header from "../Header";
import Week from "../Week";

function WeekPage() {
    const dispatch = useDispatch();
    const tempDate = useSelector(state => {
        const dateAndTime = state.selectedDateAndTime.dateAndTime;
        return new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);
    });

    const handlePrevWeek = () => {
        dispatch(decrementWeek());
    };

    const handleNextWeek = () => {
        dispatch(incrementWeek());
    };

    return(
        <div className='flex flex-col'>
            <Header handlePrev={handlePrevWeek} handleNext={handleNextWeek} />
            <div>
                <Week startDate={tempDate.setDate(tempDate.getDate() - tempDate.getDay())} />
            </div>
        </div>
    );
}

export default WeekPage;