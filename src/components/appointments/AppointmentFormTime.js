import {useSelector} from "react-redux";


function AppointmentFormTime({ form, handleChange }) {
    const { minute, hour } = useSelector(state => state.currentDateAndTime.dateAndTime);
    console.log(`${hour}:${minute}`);

    const createStartTimes = () => {
        let startHour = hour;
        let startMinute = (15 - (minute % 15)) + minute;
        let startTimes = [];
        do {
            if(startMinute === 60) {
                startHour = startHour + 1;
                startMinute = 0;
            } else {
                startMinute = startMinute + 15;
            }
            startTimes.push(`${startHour}:${startMinute}`);
        } while(startHour < 24)
        startTimes.pop();
        console.log(startTimes);
    };

    createStartTimes();

    return(
        <div>
            start times here
        </div>
    );
}

export default AppointmentFormTime;