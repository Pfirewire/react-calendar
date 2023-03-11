import { useDispatch, useSelector } from "react-redux";
import { incrementDay, decrementDay } from "../../store";
import Header from "../Header";
import Day from '../time-periods/Day';

function DayPage() {
    const dispatch = useDispatch();

    const handlePrevDay = () => {
        dispatch(decrementDay());
    };

    const handleNextDay = () => {
        dispatch(incrementDay());
    };

    return(
        <div className='flex flex-col flex-grow m-6'>
            <Header handlePrev={handlePrevDay} handleNext={handleNextDay} />
            <div className='flex justify-center items-center'>
                <Day isSingleDay />
            </div>
        </div>
    );
}

export default DayPage;