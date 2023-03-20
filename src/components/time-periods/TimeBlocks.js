

function TimeBlocks() {
    const createPrettyHourAndMinute = (time) => {
        return time.hour >= 12
            ? `${time.hour === 12 ? 12 : time.hour - 12}:${time.minute.toString().padStart(2, '0')} pm`
            : `${time.hour === 0 ? 12 : time.hour}:${time.minute.toString().padStart(2, '0')} am`;
    }

    const renderedTimeBlocks = () => {
        let timeBlocks = [];
        const time = {
            hour: 0,
            minute: 0
        };
        for(let i = 0; i < 95; i++) {
            if(time.minute === 60){
                time.minute = 0;
                time.hour += 1;
            }
            timeBlocks.push(<div>{createPrettyHourAndMinute(time)}</div>);
            time.minute += 15;
        }
        console.log(timeBlocks);
        return timeBlocks;
    }

    return(
        <div className='w-40 h-4 flex flex-col justify-center items-end'>
            {renderedTimeBlocks()}
        </div>
    );
}

export default TimeBlocks;