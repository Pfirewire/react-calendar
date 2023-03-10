import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentDateAndTime } from "./store";
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import MonthPage from "./components/pages/MonthPage";
import WeekPage from "./components/pages/WeekPage";
import DayPage from "./components/pages/DayPage";
import CurrentDateAndTime from "./components/CurrentDateAndTime";

function App() {

    return(
        <div>

            <CurrentDateAndTime />
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