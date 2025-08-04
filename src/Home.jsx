// src/components/PortfolioSummary.tsx

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

interface CategorySummaryCardProps {
  title: string;
  amount: number;
}

const CategorySummaryCard: React.FC<CategorySummaryCardProps> = ({ title, amount }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow w-full">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-2xl font-bold text-green-500">${amount.toLocaleString()}</p>
  </div>
);

const PortfolioSummary: React.FC = () => {
  const sealedTotal = 43800;
  const rawTotal = 5500;
  const gradedTotal = 17400;

  const total = sealedTotal + rawTotal + gradedTotal;

  const graphData = {
    labels: ['1D', '7D', '1M'],
    datasets: [
      {
        label: 'Portfolio Value',
        data: [200000, 205000, total],
        borderColor: 'rgb(34,197,94)', // Tailwind green-500
        backgroundColor: 'rgba(34,197,94,0.2)',
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value: number) => `$${value.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">
        Portfolio: <span className="text-green-600">Main</span>
      </h1>
      <p className="text-2xl font-bold mb-1">${total.toLocaleString()}</p>
      <p className="text-green-600 mb-6">+65,882.13 in the last 30 days</p>

      {/* Graph Section */}
      <div className="bg-gray-50 p-4 rounded-lg mb-8">
        <Line data={graphData} options={graphOptions} />
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CategorySummaryCard title="Sealed Products" amount={sealedTotal} />
        <CategorySummaryCard title="Single Raws" amount={rawTotal} />
        <CategorySummaryCard title="Graded Cards" amount={gradedTotal} />
      </div>
    </div>
  );
};

export default PortfolioSummary;
