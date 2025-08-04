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

    <div style={{ maxWidth: '600px', marginBottom: '2rem' }}>
      <Line data={chartData} options={chartOptions} />
    </div>

    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'nowrap',
      }}
    >
      {categories.map((cat, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            maxWidth: 'calc(33.333% - 1rem)',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            padding: '1rem',
            boxSizing: 'border-box',
            minWidth: 0,
          }}
        >
          <h3 style={{ fontWeight: '600', fontSize: '1rem' }}>{cat.name}</h3>
          <p style={{ color: '#16a34a', fontSize: '1.25rem', fontWeight: 'bold' }}>
            ${cat.value.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  </div>
);
