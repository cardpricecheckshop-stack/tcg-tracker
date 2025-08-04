
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "1D", value: 205000 },
  { name: "7D", value: 210000 },
  { name: "1M", value: 271171 },
  { name: "3M", value: 280000 },
  { name: "6M", value: 283000 },
  { name: "MAX", value: 285000 },
];

const mostValuable = [
  { name: "Call of Legends Booster Box", price: "$21K", change: "0.00%" },
  { name: "Evolving Skies Booster Box Case", price: "$12.8K", change: "+1.15%" },
  { name: "Burning Shadows Booster Box Case", price: "$10K", change: "0.00%" },
  { name: "Charizard (Staff Prerelease)", price: "$9.9K", change: "0.00%" },
];

export default function Home() {
  return (
    <main style={{ padding: '1rem', maxWidth: 600, margin: '0 auto' }}>
      <div>
        <h1 style={{ fontWeight: 700 }}>Portfolio: <span style={{ color: '#10B981' }}>Main</span></h1>
        <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>$271,171.49</h2>
        <p style={{ color: '#10B981' }}>+65,882.13 in the last 30 days</p>
      </div>

      <div style={{ background: '#f9f9f9', padding: '1rem', borderRadius: '1rem' }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 style={{ marginTop: '2rem', fontSize: '1.2rem', fontWeight: 600 }}>Most Valuable</h3>
        {mostValuable.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: 6, marginTop: 12 }}>
            <div>
              <div style={{ fontWeight: 500 }}>{item.name}</div>
              <div style={{ fontSize: 12, color: '#666' }}>Sealed</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 600 }}>{item.price}</div>
              <div style={{ fontSize: 12, color: '#10B981' }}>{item.change}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
