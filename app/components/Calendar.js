// components/Calendar.js
import React, { useState, useEffect } from 'react';
import { useDatePickerContext } from '../context/DatePickerContext';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Calendar = () => {
  const { startDate, endDate, recurrenceType, recurrenceInterval } = useDatePickerContext();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    setSelectedDates(getRecurringDates()); 
  }, [startDate, endDate, recurrenceType, recurrenceInterval]);

  const getRecurringDates = () => {
    if (!startDate || recurrenceType === 'none') return [];

    const dates = [];
    let currentDate = new Date(startDate);
    const endDateTime = endDate ? new Date(endDate).getTime() : currentDate.getTime() + 365 * 24 * 60 * 60 * 1000; // Default to 1 year if no end date

    while (currentDate.getTime() <= endDateTime) {
      dates.push(new Date(currentDate));

      switch (recurrenceType) {
        case 'daily':
          currentDate.setDate(currentDate.getDate() + recurrenceInterval);
          break;
        case 'weekly':
          currentDate.setDate(currentDate.getDate() + 7 * recurrenceInterval);
          break;
        case 'monthly':
          currentDate.setMonth(currentDate.getMonth() + recurrenceInterval);
          break;
        case 'yearly':
          currentDate.setFullYear(currentDate.getFullYear() + recurrenceInterval);
          break;
      }
    }

    return dates;
  };

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const changeMonth = (offset) => {
    setCurrentMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + offset, 1));
  };

  const isDateSelected = (date) => {
    return selectedDates.some(selectedDate => 
      selectedDate.getDate() === date &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(currentMonth);
    const firstDay = firstDayOfMonth(currentMonth);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const isSelected = isDateSelected(day);
      days.push(
        <div 
          key={day} 
          className={`h-[2.1rem] w-[2.2rem] flex items-center justify-center rounded-full transition-colors duration-200 ${
            isSelected 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-700 hover:bg-blue-100'
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-blue-500 text-white">
        <button onClick={() => changeMonth(-1)} className="p-1 rounded-full hover:bg-blue-600 transition-colors duration-200">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <button onClick={() => changeMonth(1)} className="p-1 rounded-full hover:bg-blue-600 transition-colors duration-200">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {renderCalendar()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;