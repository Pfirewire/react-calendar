import {useSelector} from "react-redux";
import {mapAppointmentTimes} from "../../methods/appointmentMethods";
import AppointmentFormStartTime from "./AppointmentFormStartTime";
import AppointmentFormEndTime from "./AppointmentFormEndTime";


function AppointmentFormTime({ form, handleChange }) {




    return(
        <div className='flex justify-between'>
            <AppointmentFormStartTime form={form} handleChange={handleChange} />
            <AppointmentFormEndTime form={form} handleChange={handleChange} />
        </div>
    );
}

export default AppointmentFormTime;