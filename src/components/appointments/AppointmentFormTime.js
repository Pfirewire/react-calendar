import AppointmentFormStartTime from "./AppointmentFormStartTime";
import AppointmentFormEndTime from "./AppointmentFormEndTime";


function AppointmentFormTime({ form, handleChange }) {

    return(
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <AppointmentFormStartTime form={form} handleChange={handleChange} />
                <AppointmentFormEndTime form={form} handleChange={handleChange} />
            </div>
            <div className='w-full flex justify-center text-white'>
                Duration: {form.duration} minutes
            </div>
        </div>
    );
}

export default AppointmentFormTime;