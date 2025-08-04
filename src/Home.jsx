// src/Home.jsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function Home() {
  const totalPortfolio = 66700;
  const delta30Days = 65882.13;

  const chartData = {
    labels: ['1D', '7D', '1M'],
    datasets: [
      {
        label: 'Portfolio Value',
        data: [201000, 215000, 271000],
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        ticks: {
          callback: value => `$${value.toLocaleString()}`,
        },
      },
    },
  };

  const categories = [
    { name: 'Sealed Products', value: 43800 },
    { name: 'Single Raws', value: 5500 },
    { name: 'Graded Cards', value: 17400 },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>
        Portfolio: <span style={{ color: 'green' }}>Main</span>
      </h1>
      <h2>${totalPortfolio.toLocaleString()}</h2>
      <p style={{ color: 'green' }}>+${delta30Days.toLocaleString()} in the last 30 days</p>

      <div style={{ maxWidth: 600, marginTop: '2rem' }}>
        <Line data={chartData} options={chartOptions} />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            style={{
              flex: '1 1 250px',
              background: '#f8f8f8',
              padding: '1.5rem',
              borderRadius: '10px',
              minWidth: '250px',
            }}
          >
            <h3>{cat.name}</h3>
            <p style={{ color: 'green', fontSize: '1.5rem' }}>
              ${cat.value.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
