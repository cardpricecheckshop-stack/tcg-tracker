return (
  <div style={{ padding: '2rem', fontFamily: 'sans-serif', display: 'flex', justifyContent: 'center' }}>
    <div style={{ width: '100%', maxWidth: '960px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        Portfolio: <span style={{ color: '#16a34a' }}>Main</span>
      </h1>

      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>
        ${totalPortfolio.toLocaleString()}
      </h2>

      <p style={{ color: '#16a34a', marginBottom: '2rem' }}>
        +${delta30Days.toLocaleString()} in the last 30 days
      </p>

      <div style={{ width: '100%', maxHeight: '200px', marginBottom: '2rem' }}>
        <Line data={chartData} options={chartOptions} />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            style={{
              width: 'calc(33.333% - 1rem)',
              backgroundColor: '#f9f9f9',
              borderRadius: '10px',
              padding: '1rem',
              boxSizing: 'border-box',
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
  </div>
);
