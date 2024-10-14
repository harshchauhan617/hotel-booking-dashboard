import React from 'react';
import Chart from 'react-apexcharts';

const SparklineChart = ({ title, data }) => {
  const options = {
    chart: { type: 'line', sparkline: { enabled: true } },
    title: { text: title, align: 'center' },
  };

  const series = [{ name: title, data }];

  return <Chart options={options} series={series} type="line" height={100} />;
};

export default SparklineChart;
