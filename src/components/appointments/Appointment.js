import {useState} from "react";
import AppointmentModal from "./AppointmentModal";
import {findHeight, findTopOffset} from "../../util/appointmentMethods";


function Appointment({ appointment }) {
    const [showEditModal, setShowEditModal] = useState(false);

    const handleOpenModal = () => {
        setShowEditModal(true);
    };

    const handleCloseModal = async () => {
        await setShowEditModal(false);
    };

    const appointmentSizeStyling = () => {
        const topOffset = findTopOffset(appointment.start);
        const height = findHeight(appointment.duration);
        return {
            top: topOffset,
            height: height
        };
    }

    return(
        <div className={`relative`}>
            <div className={`absolute flex justify-between w-full bg-green-300 rounded my-1 cursor-pointer text-black`} style={appointmentSizeStyling()} onClick={handleOpenModal}>
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