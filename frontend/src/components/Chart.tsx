import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart: React.FC = () => {
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
    datasets: [{
      data: [47, 21, 18, 12],
      backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0']
    }]
  };

  return (
    <div className="chart">
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
