import {useSelector} from "react-redux";


function AppointmentFormTime({ form, handleChange }) {
    const { minute, hour } = useSelector(state => state.currentDateAndTime.dateAndTime);

    const createStartTimes = () => {
        console.log(form);
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
        return <option
            key={index}
            value={`${startTime.hour.toString().padStart(2, '0')}${startTime.minute.toString().padStart(2, '0')}`}
        >
            {startTime.hour > 12
                ? `${startTime.hour - 12}:${startTime.minute.toString().padStart(2, '0')} pm`
                : `${startTime.hour === 0 ? 12 : startTime.hour}:${startTime.minute.toString().padStart(2, '0')} am`}
        </option>
    });

    return(
        <div>
            <label className="text-white" htmlFor="startTimeSelect">Start Time: </label>
            <select name="startTimeSelect" id="startTimeSelect">
                {renderedStartTimes}
            </select>
        </div>
    );
}

export default AppointmentFormTime;