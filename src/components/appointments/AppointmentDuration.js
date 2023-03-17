

function AppointmentDuration({ form }) {
    const renderedDuration = () => {
        if(form.duration === 0){
            return `Duration: All Day`;
        } else {
            return `Duration: ${form.duration} minutes`;
        }
    }

    return(
        <div className='w-full flex justify-center text-white'>
            {renderedDuration()}
        </div>
    );
}

export default AppointmentDuration;