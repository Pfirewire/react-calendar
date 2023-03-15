

function filterAppointmentsToDay(data, selectedDate) {
    return sortAppointments(data.filter(appointment => {
        const appointmentDate = new Date(appointment.date);
        appointmentDate.setDate(appointmentDate.getDate() + 1);
        return selectedDate.getFullYear() === appointmentDate.getFullYear() &&
            selectedDate.getMonth() === appointmentDate.getMonth() &&
            selectedDate.getDate() === appointmentDate.getDate()
    }));
}

function sortAppointments(appointments) {
    return appointments.sort((a, b) => {
        return parseFloat(a.start) - parseFloat(b.start);
    });
}

export { filterAppointmentsToDay };