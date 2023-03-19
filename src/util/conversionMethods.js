
// returns month string in plain english
function convertMonthToString(month) {
    switch(month) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
        default:
            return 'Unknown Month';
    }
}

// returns day of week string in plain english
function convertDayToString(day) {
    switch(day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'Unknown Day of Week';
    }
}

// returns date and time object from JS Date object
function convertDateAndTime(date) {
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        prettyMonth: (date.getMonth() + 1).toString().padStart(2, '0'),
        monthString: convertMonthToString(date.getMonth()),
        day: date.getDate(),
        prettyDay: date.getDate().toString().padStart(2, '0'),
        dayString: convertDayToString(date.getDay()),
        dayOfWeek: date.getDay(),
        hour: date.getHours(),
        prettyHour: date.getHours().toString().padStart(2, '0'),
        minute: date.getMinutes(),
        prettyMinute: date.getMinutes().toString().padStart(2, '0'),
        second: date.getSeconds(),
        prettySecond: date.getSeconds().toString().padStart(2, '0'),
    }
}

// converts date and time object to JS Date object
function getDateObject(dateAndTime) {
    return new Date(
        dateAndTime.year,
        dateAndTime.month,
        dateAndTime.day,
        dateAndTime.hour,
        dateAndTime.minute,
        dateAndTime.second,
    );
}

function prettyDuration(durationInMinutes) {
    return {
        hour: Math.floor(durationInMinutes / 60),
        minute: durationInMinutes % 60
    };
}

function weeksInMonth(date) {
    const ourDate = new Date(date)
    let weeks = 0;
    let newDate = new Date();
    do {
        weeks++;
        newDate = new Date(ourDate.setDate(ourDate.getDate() - ourDate.getDay() + 7));
    } while(newDate.getMonth() === date.getMonth())
    return weeks;
}

export { convertDateAndTime, getDateObject, prettyDuration, weeksInMonth };