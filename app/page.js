// pages/index.js
"use client"
import Calendar from './components/Calendar';
import DatePicker from './components/DatePicker';
import { DatePickerProvider } from './context/DatePickerContext';

export default function Home() {
  return (
    <DatePickerProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-3 max-w-[32rem] w-full">
          <DatePicker />
        </div>
      </div>
    </DatePickerProvider>
  );
}
