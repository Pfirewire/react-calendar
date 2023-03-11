import Button from "./Button";
import {GoArrowLeft, GoArrowRight} from "react-icons/go";
import {useSelector} from "react-redux";
import {useState} from "react";
import AppointmentModal from "./appointments/AppointmentModal";

function Header({ handlePrev, handleNext }) {
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);
    const [showModal, setShowModal] = useState(false);
    console.log("Show modal is " + showModal);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const currentMonthAndYear = (
        <div className='flex-1 flex justify-center text-xl font-bold'>
            {`${dateAndTime.monthString} ${dateAndTime.year}`}
        </div>
    );

    const prevAndNextButtons = (
        <div className='flex-1 flex flex-row justify-end ml-auto'>
            <Button primary className='text-black rounded m-1' onClick={handlePrev}>
                <GoArrowLeft />
            </Button>
            <Button primary className='text-black rounded m-1' onClick={handleNext}>
                <GoArrowRight />
            </Button>
        </div>
    );

    const addAppointmentButtonAndModal = (
        <div className='flex-1 flex justify-start mr-auto'>
            <Button primary className='text-black rounded m-1' onClick={handleOpenModal}>
                + Add Appointment
            </Button>
            {showModal && <AppointmentModal handleClose={handleCloseModal} />}
        </div>
    );

    return (
        <div className='flex flex-row items-center mb-8'>
            {addAppointmentButtonAndModal}
            {currentMonthAndYear}
            {prevAndNextButtons}
        </div>
    );
}

export default Header;