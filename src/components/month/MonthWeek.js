import MonthDay from "./MonthDay";

function MonthWeek({ startDate }) {
    console.log(startDate);
    let date = new Date(startDate);
    let content = [];
    let dayOfWeek = 0;
    while(dayOfWeek < 7) {
        content.push(<MonthDay key={dayOfWeek} date={date} />);
        dayOfWeek++;
        date.setDate(date.getDate() + 1);
        console.log(date);
    }
    return(
        <div>
            MonthWeek
            {content}
        </div>
    );
}

export default MonthWeek;