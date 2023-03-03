import Week from "./Week";
import {useSelector} from "react-redux";


function Month() {
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    const renderedWeeks = () => {
        let tempDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);
        const currentMonth = tempDate.getMonth();
        let content = [];
        let monthWeek = 0;
        content.push(<Week key={monthWeek} monthWeek={monthWeek+1} startDate={tempDate.setDate(tempDate.getDate() - tempDate.getDay())} />);
        monthWeek++;
        do {
            content.push(<Week key={monthWeek} monthWeek={monthWeek+1} startDate={tempDate.setDate(tempDate.getDate() + 7)} />);
            monthWeek++;
        } while (tempDate.getMonth() === currentMonth)
        content.pop();
        return content;
    };

    return (
        <div>
            {renderedWeeks()}
        </div>
    )

}

export default Month;