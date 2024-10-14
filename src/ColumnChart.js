import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = ({ data }) => {
  const countryData = data.reduce((acc, entry) => {
    acc[entry.country] = (acc[entry.country] || 0) + entry.adults + entry.children + entry.babies;
    return acc;
  }, {});

  const series = [{ name: 'Visitors', data: Object.values(countryData) }];
  const options = {
    chart: { type: 'bar' },
    xaxis: { categories: Object.keys(countryData) },
    title: { text: 'Visitors by Country' },
  };

  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default ColumnChart;
