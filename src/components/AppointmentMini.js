

function AppointmentMini({ appointment }) {
    return(
        <div className='flex justify-between w-full bg-green-300 rounded my-1'>
            <div className='ml-1'>
                {appointment.title}
            </div>
            <div className='mr-1'>
                {appointment.start}
            </div>
        </div>
    );
}

export default AppointmentMini;