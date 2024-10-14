import React from 'react';

const DateSelector = ({ startDate, endDate, setStartDate, setEndDate }) => (
  <div className="date-selector">
    <input 
      type="date" 
      value={startDate} 
      onChange={(e) => setStartDate(e.target.value)} 
    />
    <input 
      type="date" 
      value={endDate} 
      onChange={(e) => setEndDate(e.target.value)} 
    />
  </div>
);

export default DateSelector;

