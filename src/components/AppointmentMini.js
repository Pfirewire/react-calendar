

function AppointmentMini({ appointment }) {
    return(
        <div className='flex justify-between w-full bg-green-300 rounded my-1 h-6'>
            <div className='ml-1 overflow-hidden text-ellipsis'>
                {appointment.title}
            </div>
            <div className='mr-1'>
                {appointment.start}
            </div>
        </div>
    );
}

export default AppointmentMini;