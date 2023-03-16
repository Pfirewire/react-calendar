import {useSelector} from "react-redux";


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
        const startTimeString = `${startTime.hour.toString().padStart(2, '0')}${startTime.minute.toString().padStart(2, '0')}`;
        return <option
            key={index}
            value={startTimeString}
        >
            {startTime.hour > 12
                ? `${startTime.hour - 12}:${startTime.minute.toString().padStart(2, '0')} pm`
                : `${startTime.hour === 0 ? 12 : startTime.hour}:${startTime.minute.toString().padStart(2, '0')} am`}
        </option>
    });

    const createEndTimes = () => {
        let endHour = form.start.substring(0,2);
        let endMinute = form.start.substring(2,4);
        let endTimes = [];
        for(let i = 0; i < 96; i++) {
            endMinute += 15;
            if(endMinute !== 60) {

            }
        }
        console.log(endTimes);
        return endTimes;
    };

    const renderedEndTimes = createEndTimes().map((endTime, index) => {

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