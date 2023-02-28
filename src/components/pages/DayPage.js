import { useDispatch, useSelector } from "react-redux";
import { incrementDay, decrementDay } from "../../store";
import Header from "../Header";
import Day from '../Day';

function DayPage() {
    const dispatch = useDispatch();
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    const handlePrevDay = () => {
        dispatch(decrementDay());
    };

    const handleNextDay = () => {
        dispatch(incrementDay());
    };

    return(
        <div className='flex flex-col'>
            <Header handlePrev={handlePrevDay} handleNext={handleNextDay} />
            <div>
                <Day isSingleDay />
            </div>
        </div>
    );
}

export default DayPage;