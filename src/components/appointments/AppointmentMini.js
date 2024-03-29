import {useState} from "react";
import AppointmentModal from "./AppointmentModal";
import {timeStringToPrettyTimeString} from "../../util/appointmentMethods";


function AppointmentMini({ appointment }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return(
        <div>
            <div className='flex justify-between w-full bg-green-300 rounded my-1 h-6 cursor-pointer text-black' onClick={handleOpenModal}>
                <div className='ml-1 overflow-hidden text-ellipsis'>
                    {appointment.title}
                </div>
                <div className='mr-1'>
                    {timeStringToPrettyTimeString(appointment.start)}
                </div>
            </div>
            {showModal && <AppointmentModal appointment={appointment} handleClose={handleCloseModal} />}
        </div>
    );
}

export default AppointmentMini;