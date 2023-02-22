import { useDispatch, useSelector } from "react-redux";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { incrementMonth, decrementMonth } from "../../store";
import Button from "../Button";

function MonthPage() {
    const dispatch = useDispatch();
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    const handlePrevMonth = () => {

    };

    const handleNextMonth = () => {
        dispatch(incrementMonth());
        console.log(dateAndTime);
    };

    return(
        <div>
            <div className='flex align-center justify-between'>
                {dateAndTime.monthString}
                <div className='flex flex-row justify-center'>
                    <Button>
                        <GoArrowLeft onClick={handlePrevMonth} />
                    </Button>
                    <Button>
                        <GoArrowRight onClick={handleNextMonth} />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default MonthPage;