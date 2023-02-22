

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

function convertDateAndTime(date) {
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        monthString: convertMonthToString(date.getMonth()),
        day: date.getDate(),
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

export { convertDateAndTime, getDateObject };