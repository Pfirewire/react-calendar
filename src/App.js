import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentDateAndTime } from "./store";
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import MonthPage from "./components/pages/MonthPage";
import WeekPage from "./components/pages/WeekPage";
import DayPage from "./components/pages/DayPage";

function App() {
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
            <div className='flex flex-row'>
                <Sidebar className='w-40 mt-24' />

                {/*Month, Week, and Page view routes*/}
                <div className='grow flex justify-center'>
                    <Route path='/'>
                        <MonthPage />
                    </Route>
                    <Route path='/week'>
                        <WeekPage />
                    </Route>
                    <Route path='/day'>
                        <DayPage />
                    </Route>
                </div>
            </div>
        </div>
    );
}

export default App;