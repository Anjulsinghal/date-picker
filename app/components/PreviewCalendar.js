import React from 'react';

const PreviewCalendar = ({ startDate, recurrence }) => {
  if (!startDate || !recurrence) return <p>No recurrence set.</p>;

  // Simulate recurring dates (for demo purposes)
  const recurringDates = Array.from({ length: 5 }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + index * recurrence.interval);
    return date.toISOString().split('T')[0];
  });

  return (
    <div>
      <h3>Recurring Dates Preview:</h3>
      <ul>
        {recurringDates.map((date, idx) => (
          <li key={idx}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default PreviewCalendar;
