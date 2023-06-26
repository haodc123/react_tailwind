import React, { useState } from 'react';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <button onClick={handlePrevMonth}>&lt;</button>
          <h2 className="text-xl font-bold">
            {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
          </h2>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {weekdays.map((weekday, index) => (
            <div key={index} className="uppercase font-bold text-gray-500">
              {weekday}
            </div>
          ))}
          {[...Array(firstDayOfMonth).keys()].map((index) => (
            <div key={index}></div>
          ))}
          {[...Array(daysInMonth).keys()].map((index) => (
            <div key={index} className="p-2 rounded-full hover:bg-gray-200">
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;