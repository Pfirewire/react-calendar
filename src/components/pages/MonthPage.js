import { useDispatch } from "react-redux";
import { incrementMonth, decrementMonth } from "../../store";
import Header from "../Header";
import Month from "../Month";

function MonthPage() {
    const dispatch = useDispatch();

    const handlePrevMonth = () => {
        dispatch(decrementMonth());
    };

    const handleNextMonth = () => {
        dispatch(incrementMonth());
    };

    return(
        <div className='flex flex-col'>
            <Header handlePrev={handlePrevMonth} handleNext={handleNextMonth} />
            <Month />
        </div>
    );
}

export default MonthPage;