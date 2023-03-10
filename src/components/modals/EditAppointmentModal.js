import {useState} from "react";
import {useDeleteAppointmentMutation, useEditAppointmentMutation} from "../../store";
import Button from "../Button";
import Modal from "../Modal";
import AppointmentForm from "../AppointmentForm";


function EditAppointmentModal({ appointment, handleClose }) {
    const [form, setForm] = useState({
        id: appointment.id,
        title: appointment.title,
        date: appointment.date,
        start: appointment.start,
        duration: appointment.duration,
        notes: appointment.notes,
    });

    const [editAppointment, editResults] = useEditAppointmentMutation();
    const [deleteAppointment, deleteResults] = useDeleteAppointmentMutation();

    const handleEditAppointment = (e) => {
        e.preventDefault();
        editAppointment(form);
        handleClose();
    };

    const handleDeleteAppointment = (e) => {
        e.preventDefault();
        deleteAppointment(form);
        handleClose();
    }

    const actionBar = (
        <div className='flex justify-between items-center py-2'>
            <Button onClick={handleEditAppointment} primary>Edit</Button>
            <Button onClick={handleDeleteAppointment} danger>Delete</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <AppointmentForm form={form} setForm={setForm} handleSubmit={handleEditAppointment} />
        </Modal>
    );

    return (
        <div>
            {modal}
        </div>
    );
}

export default EditAppointmentModal;