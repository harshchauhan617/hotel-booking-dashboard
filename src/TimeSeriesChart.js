import React from 'react';
import Chart from 'react-apexcharts';

const TimeSeriesChart = ({ data }) => {
  const series = [
    {
      name: 'Visitors',
      data: data.map(entry => [
        new Date(entry.year, entry.month - 1, entry.day).getTime(),
        entry.adults + entry.children + entry.babies,
      ]),
    },
  ];

  const options = {
    chart: { type: 'line', zoom: { enabled: true } },
    xaxis: { type: 'datetime' },
    title: { text: 'Visitors per Day' },
  };

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default TimeSeriesChart;
