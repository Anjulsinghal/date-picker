// context/DatePickerContext.js
import React, { createContext, useContext, useState } from 'react';

const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [recurrenceType, setRecurrenceType] = useState('none');
  const [recurrenceInterval, setRecurrenceInterval] = useState(1);

  return (
    <DatePickerContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        recurrenceType,
        setRecurrenceType,
        recurrenceInterval,
        setRecurrenceInterval,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};

export const useDatePickerContext = () => useContext(DatePickerContext);