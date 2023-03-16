import {useEffect, useState} from "react";
import {useAddAppointmentMutation, useDeleteAppointmentMutation, useEditAppointmentMutation} from "../../store";
import Button from "../Button";
import Modal from "../Modal";
import AppointmentForm from "./AppointmentForm";
import {useSelector} from "react-redux";


function AppointmentModal({ appointment, handleClose }) {
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);
    const [form, setForm] = useState({
        title: '',
        date: `${dateAndTime.year}-${dateAndTime.prettyMonth}-${dateAndTime.prettyDay}`,
        start: '0000',
        end: '0000',
        duration: 0,
        notes: '',
    });

    useEffect(() => {
        if(appointment) {
            setForm({
                id: appointment.id,
                title: appointment.title,
                date: appointment.date,
                start: appointment.start,
                end: appointment.end,
                duration: appointment.duration,
                notes: appointment.notes,
            });
        }
    }, []);


    const [editAppointment, editResults] = useEditAppointmentMutation();
    const [addAppointment, addResults] = useAddAppointmentMutation();
    const [deleteAppointment, deleteResults] = useDeleteAppointmentMutation();

    const handleAddAppointment = (e) => {
        e.preventDefault();
        addAppointment(form);
        handleClose();
    };

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
            {!appointment && <Button onClick={handleAddAppointment} primary>Create Appointment</Button>}
            {appointment && <Button onClick={handleEditAppointment} primary>Edit</Button>}
            {appointment && <Button onClick={handleDeleteAppointment} danger>Delete</Button>}
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            {!appointment && <AppointmentForm form={form} setForm={setForm} handleSubmit={handleAddAppointment} />}
            {appointment && <AppointmentForm form={form} setForm={setForm} handleSubmit={handleEditAppointment} />}
        </Modal>
    );

    return (
        <div>
            {modal}
        </div>
    );
}

export default AppointmentModal;