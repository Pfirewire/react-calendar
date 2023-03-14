import {useSelector} from "react-redux";


function AppointmentFormTime({ form, handleChange }) {
    const { minute, hour } = useSelector(state => state.currentDateAndTime.dateAndTime);

    const createStartTimes = () => {
        let startHour = hour;
        let startMinute = (15 - (minute % 15)) + minute;
        if(startMinute === 60) {
            startHour = startHour + 1;
            startMinute = 0;
        }
        let startTimes = [];
        do {
            startTimes.push(`${startHour}:${startMinute}`);
            startMinute = startMinute + 15;
            if(startMinute === 60) {
                startHour = startHour + 1;
                startMinute = 0;
            }
        } while(startHour < 24)
        return startTimes;
    };

    const renderedStartTimes = createStartTimes().map((startTime, index) => {
        return <option key={index} value={startTime}>{startTime}</option>
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