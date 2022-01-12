import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ReactCalendar = ({date, onChange}) => {
    return (
        <Calendar
            onChange={onChange}
            value={date}
            calendarType="Hebrew"
            prev2Label={null}
            next2Label={null}
            minDate={new Date()}
        ></Calendar>
    );
}

export default ReactCalendar;