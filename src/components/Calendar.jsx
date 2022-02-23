import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ReactCalendar = ({ date, onChange }) => {
  const now = Date.now();
  const deliveryDate = now + 1000 * 60 * 60 * 24 * 2;

  return (
    <Calendar
      onChange={onChange}
      value={date}
      calendarType="Hebrew"
      prev2Label={null}
      next2Label={null}
      minDate={new Date(deliveryDate)}
    />
  );
};

export default ReactCalendar;
