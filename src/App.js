import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentDateAndTime } from "./store";
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import MonthPage from "./components/month/MonthPage";
import WeekPage from "./components/week/WeekPage";
import DayPage from "./components/day/DayPage";

function App() {
    const dispatch = useDispatch();
    const currentDateAndTime = useSelector((state) => {
        return state.currentDateAndTime.dateAndTime;
    });

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(updateCurrentDateAndTime());
        }, (0.1 * 1000));
        return () => {
            clearInterval(timer);
        };
    }, [currentDateAndTime]);

    return(
        <div>
            <h3 className='text-2xl font-bold m-2'>
                {`${currentDateAndTime.dayString}, ${currentDateAndTime.monthString} ${currentDateAndTime.day}, ${currentDateAndTime.prettyHour}:${currentDateAndTime.prettyMinute}:${currentDateAndTime.prettySecond}`}
            </h3>
            <div className='flex flex-row'>
                <Sidebar className='w-40 mt-24' />
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