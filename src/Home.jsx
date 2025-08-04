import React from 'react';

const HomePage = () => {
  // Dummy data for each category
  const totalValue = {
    sealed: 43800,
    raw: 5500,
    graded: 17400,
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-8 md:px-16 lg:px-32">
      <h1 className="text-3xl font-bold">
        Portfolio: <span className="text-green-600">Main</span>
      </h1>

      <h2 className="text-4xl font-bold mt-4">${(totalValue.sealed + totalValue.raw + totalValue.graded).toLocaleString()}</h2>
      <p className="text-green-600 mt-2">+65,882.13 in the last 30 days</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Sealed Products</h3>
          <p className="text-green-600 font-bold text-xl">${totalValue.sealed.toLocaleString()}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Single Raws</h3>
          <p className="text-green-600 font-bold text-xl">${totalValue.raw.toLocaleString()}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Graded Cards</h3>
          <p className="text-green-600 font-bold text-xl">${totalValue.graded.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
