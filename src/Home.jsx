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
        borderColor: '#16a34a',
        pointBackgroundColor: '#16a34a',
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
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        Portfolio: <span style={{ color: '#16a34a' }}>Main</span>
      </h1>

      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>
        ${totalPortfolio.toLocaleString()}
      </h2>

      <p style={{ color: '#16a34a', marginBottom: '2rem' }}>
        +${delta30Days.toLocaleString()} in the last 30 days
      </p>

      <div style={{ maxWidth: '50%', maxHeight: '200px', marginBottom: '2rem' }}>
        <Line data={chartData} options={chartOptions} />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
        }}
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            style={{
              width: '100%',
              maxWidth: '300px',
              backgroundColor: '#f9f9f9',
              borderRadius: '10px',
              padding: '1.25rem',
              textAlign: 'left',
              flex: '1 1 0',
            }}
          >
            <h3 style={{ fontWeight: '600' }}>{cat.name}</h3>
            <p style={{ color: '#16a34a', fontSize: '1.5rem', fontWeight: 'bold' }}>
              ${cat.value.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
