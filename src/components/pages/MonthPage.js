import { useDispatch, useSelector } from "react-redux";
import { incrementMonth, decrementMonth, useAddAppointmentMutation } from "../../store";
import Header from "../Header";
import Week from "../Week";

function MonthPage() {
    const dispatch = useDispatch();
    const [addAppointment, results] = useAddAppointmentMutation();
    const dateAndTime = useSelector(state => state.selectedDateAndTime.dateAndTime);

    const handlePrevMonth = () => {
        dispatch(decrementMonth());
    };

    const handleNextMonth = () => {
        dispatch(incrementMonth());
    };

    const handleAddAppointment = () => {
        const tempAppointment = {
            title: 'Test Title',
            date: 23,
            duration: 60,
            notes: 'These are some notes. They are a test',
        };
        addAppointment(tempAppointment);
    };

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

    const content = renderedWeeks();

    return(
        <div className='flex flex-col'>
            <Header handlePrev={handlePrevMonth} handleNext={handleNextMonth} handleAdd={handleAddAppointment} />
            <div>
                {content}
            </div>
        </div>
    );
}

export default MonthPage;