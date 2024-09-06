// components/RecurrenceOptions.js
import React from 'react';
import { useDatePickerContext } from '../context/DatePickerContext';

const RecurrenceOptions = () => {
  const { recurrenceType, setRecurrenceType, recurrenceInterval, setRecurrenceInterval } = useDatePickerContext();

  return (
    <div className="mb-6">
      {/* <h3 className="text-lg font-semibold text-gray-800 mb-3">Recurrence</h3> */}
      <div className=" flex flex-row justify-between ">
        <div className='w-1/2 '>
          <label className="block text-gray-700 font-medium mb-2">Repeat</label>
          <select
            value={recurrenceType}
            onChange={(e) => setRecurrenceType(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="none">Does not repeat</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        {recurrenceType !== 'none' && (
          <div>
            <label className="block text-gray-700 font-medium mb-2">Recurring Gaps</label>
            <div className="flex items-center">
              <input
                type="number"
                min="1"
                value={recurrenceInterval}
                onChange={(e) => setRecurrenceInterval(parseInt(e.target.value))}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 mr-2 "
              />
              <span className="text-gray-700">{recurrenceType}(s)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecurrenceOptions;