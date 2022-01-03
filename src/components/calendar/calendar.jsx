import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
        <Calendar
            onChange={date => setDate(date)}
            value={date}
        ></Calendar>
        </>
    );
}

export default ReactCalendar;