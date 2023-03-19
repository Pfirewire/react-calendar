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
        <div className='flex flex-row h-screen'>
            <Sidebar className='w-20 mt-24' />

            {/*Month, Week, and Page view routes*/}
            <div className='grow flex justify-center mx-12' style={{minWidth: 100+'rem'}}>
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
    );
}

export default App;