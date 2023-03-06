import Button from "../Button";
import Modal from "../Modal";
import {useAddAppointmentMutation} from "../../store";


function AddAppointmentModal({ handleClose }) {
    const [addAppointment, results] = useAddAppointmentMutation();

    const handleAddAppointment = () => {
        const tempAppointment = {
            title: 'Test Title',
            date: 23,
            duration: 60,
            notes: 'These are some notes. They are a test',
        };
        addAppointment(tempAppointment);
        handleClose();
    };

    const actionBar = (
        <div>
            <Button onClick={handleAddAppointment} primary>Create Appointment</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            Set up appointment here
        </Modal>
    );

    return (
        <div>
            {modal}
        </div>
    )
}

export default AddAppointmentModal;