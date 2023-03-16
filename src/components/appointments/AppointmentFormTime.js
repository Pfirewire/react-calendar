import {useSelector} from "react-redux";
import {mapAppointmentTimes} from "../../methods/appointmentMethods";


function AppointmentFormTime({ form, handleChange }) {
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
                startHour = startHour + 1;
                startMinute = 0;
            }
        } while(startHour < 24)
        return startTimes;
    };

    const renderedStartTimes = createStartTimes().map((startTime, index) => {
        return mapAppointmentTimes(startTime, index);
    });

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
        console.log(endTimes);
        return endTimes;
    };

    const renderedEndTimes = createEndTimes().map((endTime, index) => {
        return mapAppointmentTimes(endTime, index);
    });

    return(
        <div>
            <div>
                <label className="text-white" htmlFor="start">Start Time: </label>
                <select name="start" id="start" value={form.start} onChange={handleChange}>
                    {renderedStartTimes}
                </select>
            </div>
            <div>
                <label className="text-white" htmlFor="end">End Time: </label>
                <select name="end" id="end" value={form.end} onChange={handleChange}>
                    {renderedEndTimes}
                </select>
            </div>
        </div>
    );
}

export default AppointmentFormTime;