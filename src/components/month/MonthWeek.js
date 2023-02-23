import MonthDay from "./MonthDay";

function MonthWeek({ startDate }) {
    console.log(startDate);
    let date = new Date(startDate);
    let content = [];
    let dayOfWeek = 0;
    date.setDate(date.getDate() - 1);
    while(dayOfWeek < 7) {
        content.push(<MonthDay key={dayOfWeek} date={date.setDate(date.getDate() + 1)} />);
        dayOfWeek++;
        console.log(date);
    }
    return(
        <div className='flex flex-row items-center justify-center'>
            {content}
        </div>
    );
}

export default MonthWeek;