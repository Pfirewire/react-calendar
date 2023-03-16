

function filterAppointmentsToDay(appointments, selectedDate) {
    return sortAppointments(appointments.filter(appointment => {
        const appointmentDate = new Date(appointment.date);
        appointmentDate.setDate(appointmentDate.getDate() + 1);
        return dateMatches(selectedDate, appointmentDate)
    }));
}

function filterAppointmentsToWeek(appointments, selectedDate) {
    return sortAppointments(appointments.filter(appointment => {
        let contains = false;
        let date = new Date(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()).setDate(selectedDate.getDate() - selectedDate.getDay()));
        for(let i = 0; i < 7; i++) {
            const appointmentDate = new Date(appointment.date);
            if(dateMatches(date, appointmentDate)) {
                contains = true;
            }
            date = new Date(date.setDate(date.getDate() + 1));
        }
        return contains;
    }));
}

function filterAppointmentsToMonth(appointments, selectedDate) {
    return sortAppointments(appointments.filter(appointment => {
        return appointment.date.includes(`${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}`);
    }));
}

function sortAppointments(appointments) {
    return appointments.sort((a, b) => {
        return parseFloat(a.start) - parseFloat(b.start);
    });
}

function dateMatches(dateOne, dateTwo) {
    return (
        dateOne.getFullYear() === dateTwo.getFullYear() &&
        dateOne.getMonth() === dateTwo.getMonth() &&
        dateOne.getDate() === dateTwo.getDate()
    );
}

export { filterAppointmentsToDay, filterAppointmentsToWeek, filterAppointmentsToMonth };