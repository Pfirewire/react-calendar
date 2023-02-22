import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentDateAndTime } from "./store/slices/currentDateAndTimeSlice";
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import MonthPage from "./components/month/MonthPage";
import WeekPage from "./components/week/WeekPage";
import DayPage from "./components/day/DayPage";

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
            <div className='flex justify-center'>
                {`${dateAndTime.dayString}, ${dateAndTime.monthString} ${dateAndTime.day} ${dateAndTime.prettyHour}:${dateAndTime.prettyMinute}:${dateAndTime.prettySecond}`}
            </div>
            <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
                <Sidebar />
                <div className='col-span-5'>
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