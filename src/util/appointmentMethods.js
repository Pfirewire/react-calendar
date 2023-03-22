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
            let appointmentDate = new Date(appointment.date);
            appointmentDate = new Date(appointmentDate.setDate(appointmentDate.getDate()+1));
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

function updateDuration(start, end) {
    const startHour = parseInt(start.substring(0, 2));
    const startMinute = parseInt(start.substring(2, 4));
    const endHour = parseInt(end.substring(0, 2));
    const endMinute = parseInt(end.substring(2, 4));
    if(start === end) {
        return 0;
    } else if (start < end) {
        return ((endHour - startHour) * 60) + ((60 - startMinute) - (60 - endMinute));
    } else {
        return (((24 - startHour) * 60) - startMinute) + ((endHour * 60) + endMinute);
    }
}

function mapAppointmentTimes(time, index) {
    const timeString = `${time.hour.toString().padStart(2, '0')}${time.minute.toString().padStart(2, '0')}`;
    return <option
        key={index}
        value={timeString}
    >
        {time.hour > 12
            ? `${time.hour === 12 ? 12 : time.hour - 12}:${time.minute.toString().padStart(2, '0')} pm`
            : `${time.hour === 0 ? 12 : time.hour}:${time.minute.toString().padStart(2, '0')} am`}
    </option>
}

export {
    filterAppointmentsToDay,
    filterAppointmentsToWeek,
    filterAppointmentsToMonth,
    updateDuration,
    mapAppointmentTimes
};