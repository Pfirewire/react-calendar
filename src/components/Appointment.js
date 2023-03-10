import {useState} from "react";
import EditAppointmentModal from "./modals/EditAppointmentModal";


function Appointment({ appointment }) {
    const [showModal, setShowModal] = useState(false);
    console.log("Show modal is " + showModal);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        console.log("Close Modal");
        setShowModal(false);
        console.log(showModal);
    };

    return(
        <div className='flex justify-between w-full bg-green-300 rounded my-1 h-6 cursor-pointer' onClick={handleOpenModal}>
            <div className='ml-1 overflow-hidden text-ellipsis'>
                {appointment.title}
            </div>
            <div className='mr-1'>
                {appointment.start}
            </div>
            {showModal && <EditAppointmentModal appointment={appointment} handleClose={handleCloseModal} />}
        </div>
    );
}

export default Appointment;