import Button from "./Button";
import {GoArrowLeft, GoArrowRight} from "react-icons/go";
import {useDispatch, useSelector} from "react-redux";
import {useAddAppointmentMutation} from "../store";

function Header({ handlePrev, handleNext }) {
    const dispatch = useDispatch();
    const [addAppointment, results] = useAddAppointmentMutation();
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    const handleAddAppointment = () => {
        const tempAppointment = {
            title: 'Test Title',
            date: 23,
            duration: 60,
            notes: 'These are some notes. They are a test',
        };
        addAppointment(tempAppointment);
    };

    return (
        <div className='flex flex-row items-center mb-8'>
            <div className='flex-1 flex justify-center mr-auto'>
                <Button primary className='text-black rounded m-1' onClick={handleAddAppointment}>
                    + Add Appointment
                </Button>
            </div>
            <div className='flex-1 flex justify-center text-xl font-bold'>
                {`${dateAndTime.monthString} ${dateAndTime.year}`}
            </div>
            <div className='flex-1 flex flex-row justify-end ml-auto'>
                <Button primary className='text-black rounded m-1' onClick={handlePrev}>
                    <GoArrowLeft />
                </Button>
                <Button primary className='text-black rounded m-1' onClick={handleNext}>
                    <GoArrowRight />
                </Button>
            </div>
        </div>
    );
}

export default Header;