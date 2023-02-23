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
        }, (5 * 60 * 1000));
        return () => {
            clearInterval(timer);
        };
    }, [currentDateAndTime]);

    return(
        <div>
            <div className='flex justify-center'>
                {`${currentDateAndTime.dayString}, ${currentDateAndTime.monthString} ${currentDateAndTime.day} ${currentDateAndTime.prettyHour}:${currentDateAndTime.prettyMinute}:${currentDateAndTime.prettySecond}`}
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