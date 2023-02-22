import { useDispatch, useSelector } from "react-redux";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { incrementMonth, decrementMonth } from "../../store";
import Button from "../Button";

function MonthPage() {
    const dispatch = useDispatch();
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    const handlePrevMonth = () => {
        dispatch(decrementMonth());
    };

    const handleNextMonth = () => {
        dispatch(incrementMonth());
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
            </div>
        </div>
    );
}

export default MonthPage;