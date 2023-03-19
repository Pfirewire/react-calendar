import { prettyDuration } from "../../util/conversionMethods";

function AppointmentDuration({ form }) {
    const renderedDuration = () => {
        if(form.duration === 0){
            return `Duration: All Day`;
        } else {
            let duration = prettyDuration(form.duration);
            return `Duration: ${duration.hour} hours, ${duration.minute} minutes`;
        }
    };

    return(
        <div className='w-full flex justify-center text-white'>
            {renderedDuration()}
        </div>
    );
}

export default AppointmentDuration;