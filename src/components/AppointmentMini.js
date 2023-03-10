import {useState} from "react";
import EditAppointmentModal from "./modals/EditAppointmentModal";


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
            <div className='flex justify-between w-full bg-green-300 rounded my-1 h-6 cursor-pointer' onClick={handleOpenModal}>
                <div className='ml-1 overflow-hidden text-ellipsis'>
                    {appointment.title}
                </div>
                <div className='mr-1'>
                    {appointment.start}
                </div>
            </div>
            {showModal && <EditAppointmentModal appointment={appointment} handleClose={handleCloseModal} />}
        </div>
    );
}

export default AppointmentMini;