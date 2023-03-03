import Button from "./Button";
import {GoArrowLeft, GoArrowRight} from "react-icons/go";
import { useSelector } from "react-redux";

function Header({ handleAdd, handlePrev, handleNext }) {
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    return (
        <div className='flex flex-row items-center mb-8'>
            <div className='flex-1 flex justify-center mr-auto'>
                <Button outline primary className='text-black rounded m-1' onClick={handleAdd}>
                    + Add Appointment
                </Button>
            </div>
            <div className='flex-1 flex justify-center text-xl font-bold'>
                {`${dateAndTime.monthString} ${dateAndTime.year}`}
            </div>
            <div className='flex-1 flex flex-row justify-end ml-auto'>
                <Button outline primary className='text-black rounded m-1' onClick={handlePrev}>
                    <GoArrowLeft />
                </Button>
                <Button outline primary className='text-black rounded m-1' onClick={handleNext}>
                    <GoArrowRight />
                </Button>
            </div>
        </div>
    );
}

export default Header;