// src/components/PortfolioSummary.tsx

import React from 'react';

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

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">
        Portfolio: <span className="text-green-600">Main</span>
      </h1>
      <p className="text-2xl font-bold mb-1">${(sealedTotal + rawTotal + gradedTotal).toLocaleString()}</p>
      <p className="text-green-600 mb-6">+65,882.13 in the last 30 days</p>

      {/* 3 Cards Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CategorySummaryCard title="Sealed Products" amount={sealedTotal} />
        <CategorySummaryCard title="Single Raws" amount={rawTotal} />
        <CategorySummaryCard title="Graded Cards" amount={gradedTotal} />
      </div>
    </div>
  );
};

export default PortfolioSummary;
