import Day from "./Day";

function Week({ monthWeek, startDate }) {
    let date = new Date(startDate);
    const content = [];
    let dayOfWeek = 0;
    date.setDate(date.getDate() - 1);
    while(dayOfWeek < 7) {
        content.push(<Day key={dayOfWeek} firstWeek={monthWeek === 1} isSingleWeek={!monthWeek} date={date} />);
        date = new Date(date.setDate(date.getDate() + 1));
        dayOfWeek++;
    }
    return(
        <div className='flex flex-row items-center justify-center'>
            {content}
        </div>
    );
}

export default Week;