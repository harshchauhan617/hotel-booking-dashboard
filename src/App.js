import React, { useState, useEffect } from 'react';
import './App.css';
import DateSelector from './DateSelector';
import TimeSeriesChart from './TimeSeriesChart';
import ColumnChart from './ColumnChart';
import SparklineChart from './SparklineChart';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    fetch('/hotel_bookings_1000.csv')
      .then(response => response.text())
      .then(text => {
        const parsedData = text.split('\n').slice(1).map(row => {
          const [year, month, day, adults, children, babies, country] = row.split(',');
          return {
            year: parseInt(year),
            month: parseInt(month),
            day: parseInt(day),
            adults: parseInt(adults) || 0,
            children: parseInt(children) || 0,
            babies: parseInt(babies) || 0,
            country: country.trim(),
          };
        });
        setData(parsedData);
      });
  }, []);

  useEffect(() => {
    if (!startDate || !endDate) return;

    const filtered = data.filter(entry => {
      const entryDate = new Date(entry.year, entry.month - 1, entry.day);
      return entryDate >= new Date(startDate) && entryDate <= new Date(endDate);
    });

    setFilteredData(filtered);
  }, [startDate, endDate, data]);

  return (
    <div className="App">
      <DateSelector 
        startDate={startDate} 
        endDate={endDate} 
        setStartDate={setStartDate} 
        setEndDate={setEndDate} 
      />
      <TimeSeriesChart data={filteredData} />
      <ColumnChart data={filteredData} />
      <div className="sparkline-charts">
        <SparklineChart title="Adult Visitors" data={filteredData.map(d => d.adults)} />
        <SparklineChart title="Children Visitors" data={filteredData.map(d => d.children)} />
      </div>
    </div>
  );
};

export default App;
