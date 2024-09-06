// components/DatePicker.js
import React from "react";
import RecurrenceOptions from "./RecurrenceOptions";
import Calendar from "./Calendar";
import { useDatePickerContext } from "../context/DatePickerContext";

const DatePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } =
    useDatePickerContext();

  return (
    <div className="bg-white shadow-xl rounded-lg max-w-[32rem] mx-auto border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-5">
        <h2 className="text-2xl font-bold text-white mb-2">
          Pick Your Recurring Dates
        </h2>
        <p className="text-blue-100">
          Select a date and frequency for your recurring dates.
        </p>
      </div>

      <div className="p-6">
        <div className="flex flex-row justify-between">
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Start Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              End Date (optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              />
            </div>
          </div>
        </div>
        <RecurrenceOptions />
        <Calendar />
      </div>
    </div>
  );
};

export default DatePicker;
