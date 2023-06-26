import React, { useState } from 'react';

const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  const handleAttendance = () => {
    const currentTime = new Date().toLocaleTimeString();
    const newRecord = { time: currentTime };
    setAttendanceRecords([...attendanceRecords, newRecord]);
    // You can save the attendance record to a database here
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Attendance App</h1>
      <p className="mb-4">Current Time: {new Date().toLocaleTimeString()}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAttendance}>
        Mark Attendance
      </button>
      <div className="mt-4">
        <h2 className="text-lg font-bold mb-2">Attendance Records:</h2>
        {attendanceRecords.map((record, index) => (
          <div key={index} className="border-b py-2">
            {record.time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
