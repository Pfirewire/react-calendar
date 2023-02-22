import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentDateAndTime } from "./store/slices/currentDateAndTimeSlice";

function App() {
    const dispatch = useDispatch();
    const { dateAndTime } = useSelector((state) => state.currentDateAndTime);

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(updateCurrentDateAndTime());
        }, (0.5 * 1000));
        return () => {
            clearInterval(timer);
        };
    }, [dateAndTime]);

    return(
        <div>
            {`${dateAndTime.dayString}, ${dateAndTime.monthString} ${dateAndTime.day} ${dateAndTime.prettyHour}:${dateAndTime.prettyMinute}:${dateAndTime.prettySecond}`}

        </div>
    );
}

export default App;