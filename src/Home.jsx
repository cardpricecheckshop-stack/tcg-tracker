const [search, setSearch] = useState("");
const [selectedItem, setSelectedItem] = useState(null);
import React, { useState } from "react";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const portfolioData = [
  { date: "1D", value: 204000 },
  { date: "7D", value: 205000 },
  { date: "1M", value: 271171.49 },
];

const valuableItems = [
  { name: "Call of Legends Booster Box", value: 21000 },
  { name: "Evolving Skies Booster Box Case", value: 12800 },
  { name: "Burning Shadows Booster Box Case", value: 10000 },
  { name: "Charizard (Staff Prerelease)", value: 9900 },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredItems = valuableItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ padding: "1rem", maxWidth: 600, margin: "0 auto" }}>
      <div>
        <h1 style={{ fontWeight: 700 }}>
          Portfolio: <span style={{ color: "#10B981" }}>Main</span>
        </h1>
        <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>$271,171.49</h2>
        <p style={{ color: "#10B981" }}>+65,882.13 in the last 30 days</p>
      </div>

      <div style={{ background: "#f9f9f9", padding: "1rem", borderRadius: "1rem", marginTop: "1.5rem" }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={portfolioData}>
            <XAxis dataKey="date" />
            <YAxis domain={[200000, 280000]} />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ fontWeight: 600 }}>Most Valuable</h3>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search cards..."
          style={{
            padding: "0.5rem",
            marginTop: "0.5rem",
            marginBottom: "1rem",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        filteredItems.map((item, index) => (
  <div
    key={index}
    onClick={() => alert(`You clicked: ${item.name}`)}
    style={{
      marginBottom: "1rem",
      borderBottom: "1px solid #eee",
      paddingBottom: "0.75rem",
      cursor: "pointer"
    }}
  >
    <div style={{ fontWeight: "bold" }}>{item.name}</div>
    <div style={{ fontSize: "0.875rem", color: "#666" }}>Sealed</div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ color: "#108981", fontWeight: "bold" }}>${item.value.toLocaleString()}</div>
      <div style={{ fontSize: "0.875rem", color: "#108981" }}>0.00%</div>
    </div>
  </div>
))

      </div>
    </main>
  );
}
     
