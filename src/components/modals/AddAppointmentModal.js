import Button from "../Button";
import Modal from "../Modal";
import {useAddAppointmentMutation} from "../../store";
import {useState} from "react";
import {useSelector} from "react-redux";
import AppointmentForm from "../AppointmentForm";


function AddAppointmentModal({ handleClose }) {
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);
    const [form, setForm] = useState({
        title: '',
        date: `${dateAndTime.year}-${dateAndTime.prettyMonth}-${dateAndTime.prettyDay}`,
        start: '00:00',
        duration: 0,
        notes: '',
    });
    const [addAppointment, results] = useAddAppointmentMutation();

    const handleAddAppointment = (e) => {
        e.preventDefault();
        addAppointment(form);
        handleClose();
    };

    const actionBar = (
        <div className='flex justify-center items-center py-2'>
            <Button onClick={handleAddAppointment} primary>Create Appointment</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <AppointmentForm form={form} setForm={setForm} handleSubmit={handleAddAppointment} />
        </Modal>
    );

    return (
        <div>
            {modal}
        </div>
    )
}

export default AddAppointmentModal;