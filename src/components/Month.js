import Week from "./Week";
import {useSelector} from "react-redux";


function Month({ appointments }) {
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    const weekContainsAppointment = startDate => {
        console.log(startDate);
        return appointments.filter(appointment => {
            return true;
        });
    };

    const renderedWeeks = () => {
        let tempDate = new Date(dateAndTime.year, dateAndTime.month, dateAndTime.day);
        const currentMonth = tempDate.getMonth();
        let content = [];
        let monthWeek = 0;

        let startDate = tempDate.setDate(tempDate.getDate() - tempDate.getDay());
        content.push(<Week key={monthWeek} monthWeek={monthWeek+1} startDate={startDate} />);
        monthWeek++;
        do {
            startDate = tempDate.setDate(tempDate.getDate() + 7);
            content.push(<Week key={monthWeek} monthWeek={monthWeek+1} startDate={startDate} />);
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