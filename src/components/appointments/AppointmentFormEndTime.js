import {mapAppointmentTimes} from "../../methods/appointmentMethods";


function AppointmentFormEndTime({ form, handleChange }) {
    const createEndTimes = () => {
        let endHour = parseInt(form.start.substring(0,2));
        let endMinute = parseInt(form.start.substring(2,4));
        let endTimes = [];
        for(let i = 0; i < 95; i++) {
            endMinute += 15;
            if(endMinute === 60) {
                endMinute = 0;
                endHour += 1;
                if(endHour === 24) {
                    endHour = 0;
                }
            }
            endTimes.push({
                hour: endHour,
                minute: endMinute
            });
        }
        return endTimes;
    };

    const renderedEndTimes = createEndTimes().map((endTime, index) => {
        return mapAppointmentTimes(endTime, index);
    });

    return(
        <div>
            <label className="text-white" htmlFor="end">End: </label>
            <select name="end" id="end" value={form.end} onChange={handleChange}>
                {renderedEndTimes}
            </select>
        </div>
    );
}

export default AppointmentFormEndTime;