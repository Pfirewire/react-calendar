import Button from "./Button";
import {GoArrowLeft, GoArrowRight} from "react-icons/go";
import {useDispatch, useSelector} from "react-redux";
import {useAddAppointmentMutation} from "../store";
import {useState} from "react";
import Modal from "./Modal";

function Header({ handlePrev, handleNext }) {
    const dispatch = useDispatch();
    const [addAppointment, results] = useAddAppointmentMutation();
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleAddAppointment = () => {
        const tempAppointment = {
            title: 'Test Title',
            date: 23,
            duration: 60,
            notes: 'These are some notes. They are a test',
        };
        addAppointment(tempAppointment);
        handleCloseModal();
    };

    const actionBar = (
        <div>
            <Button onClick={handleAddAppointment} primary>Create Appointment</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleCloseModal} actionBar={actionBar}>
            Set up appointment here
        </Modal>
    );

    return (
        <div className='flex flex-row items-center mb-8'>
            <div className='flex-1 flex justify-center mr-auto'>
                <Button primary className='text-black rounded m-1' onClick={handleOpenModal}>
                    + Add Appointment
                </Button>
                {showModal && modal}
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