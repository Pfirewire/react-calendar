import {useState} from "react";
import AppointmentModal from "./modals/AppointmentModal";


function Appointment({ appointment }) {
    const [showEditModal, setShowEditModal] = useState(false);
    console.log("Show modal is " + showEditModal);

    const handleOpenModal = () => {
        setShowEditModal(true);
    };

    const handleCloseModal = async () => {
        console.log("Close Modal");
        await setShowEditModal(false);
        console.log(showEditModal);
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
            {showEditModal && <AppointmentModal appointment={appointment} handleClose={handleCloseModal} />}
        </div>

    );
}

export default Appointment;