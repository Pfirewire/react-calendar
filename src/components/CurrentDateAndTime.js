import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {updateCurrentDateAndTime} from "../store";


function CurrentDateAndTime() {
    const dispatch = useDispatch();
    const currentDateAndTime = useSelector((state) => {
        return state.currentDateAndTime.dateAndTime;
    });

    // Function to update current time
    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(updateCurrentDateAndTime());
        }, (0.1 * 1000));
        // returns clear interval so setInterval does not run forever and stack
        return () => {
            clearInterval(timer);
        };
    }, [currentDateAndTime]);

    return(
        <div>
            {/*Current Date and Time Header*/}
            <h3 className='text-2xl font-bold m-2'>
                {`${currentDateAndTime.dayString}, ${currentDateAndTime.monthString} ${currentDateAndTime.day}, ${currentDateAndTime.prettyHour}:${currentDateAndTime.prettyMinute}:${currentDateAndTime.prettySecond}`}
            </h3>
        </div>
    )
}

export default CurrentDateAndTime;