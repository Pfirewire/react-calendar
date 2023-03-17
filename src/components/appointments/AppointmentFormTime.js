import AppointmentFormStartTime from "./AppointmentFormStartTime";
import AppointmentFormEndTime from "./AppointmentFormEndTime";
import AppointmentDuration from "./AppointmentDuration";


function AppointmentFormTime({ form, handleChange }) {

    return(
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <AppointmentFormStartTime form={form} handleChange={handleChange} />
                <AppointmentFormEndTime form={form} handleChange={handleChange} />
            </div>
            <AppointmentDuration form={form} />
        </div>
    );
}

export default AppointmentFormTime;