import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentDateAndTime } from "./store/slices/currentDateAndTimeSlice";

function App() {
    const dispatch = useDispatch();
    const { dateAndTime } = useSelector((state) => state.currentDateAndTime);

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(updateCurrentDateAndTime());
        }, 500);
    }, [dateAndTime]);

    return(
        <div>
            {dateAndTime.second}
        </div>
    );
}

export default App;