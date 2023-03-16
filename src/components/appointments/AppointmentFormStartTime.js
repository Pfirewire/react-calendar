import {mapAppointmentTimes} from "../../methods/appointmentMethods";


function AppointmentFormStartTime({ form, handleChange }) {
    const createStartTimes = () => {
        let startHour = 0;
        let startMinute = 0;
        let startTimes = [];
        do {
            startTimes.push({
                hour: startHour,
                minute: startMinute
            });
            startMinute = startMinute + 15;
            if(startMinute === 60) {
                startHour += 1;
                startMinute = 0;
            }
        } while(startHour < 24)
        return startTimes;
    };

    const renderedStartTimes = createStartTimes().map((startTime, index) => {
        return mapAppointmentTimes(startTime, index);
    });

    return(
        <div>
            <label className="text-white" htmlFor="start">Start: </label>
            <select name="start" id="start" value={form.start} onChange={handleChange}>
                {renderedStartTimes}
            </select>
        </div>
    );
}

export default AppointmentFormStartTime;