import {useState} from "react";
import AppointmentModal from "./AppointmentModal";


function Appointment({ appointment }) {
    const [showEditModal, setShowEditModal] = useState(false);

    const handleOpenModal = () => {
        setShowEditModal(true);
    };

    const handleCloseModal = async () => {
        await setShowEditModal(false);
    };

    return(
        <div>
            <div className='flex justify-between w-full bg-green-300 rounded my-1 h-6 cursor-pointer text-black' onClick={handleOpenModal}>
                <div className='ml-1 overflow-hidden text-ellipsis'>
                    {appointment.title}
                </div>
                <div className='mr-1'>
                    {appointment.start}
                </div>
            </div>
            {showEditModal && <AppointmentModal appointment={appointment} handleClose={handleCloseModal} />}
        </div>

    );
}

export default Appointment;