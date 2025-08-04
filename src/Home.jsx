// /src/Home.jsx
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "1D", value: 204000 },
  { date: "7D", value: 204000 },
  { date: "1M", value: 271171.49 },
];

const sealedProducts = [
  { name: "Call of Legends Booster Box", value: 21000 },
  { name: "Evolving Skies Booster Box Case", value: 12800 },
  { name: "Burning Shadows Booster Box Case", value: 10000 },
];

const singleRaws = [
  { name: "Charizard Base Set (Raw)", value: 3000 },
  { name: "Pikachu Illustrator (Raw)", value: 2500 },
];

const gradedCards = [
  { name: "Charizard PSA 10", value: 12000 },
  { name: "Blastoise CGC 9.5", value: 5400 },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filterItems = (items) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <main style={{ padding: "1rem", maxWidth: 600, margin: "0 auto" }}>
      <div>
        <h1 style={{ fontWeight: 700 }}>
          Portfolio: <span style={{ color: "#10B981" }}>Main</span>
        </h1>
        <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>
          ${271171.49.toLocaleString()}
        </h2>
        <p style={{ color: "#10B981" }}>+65,882.13 in the last 30 days</p>
      </div>

      <div
        style={{
          background: "#f9f9f9",
          padding: "1rem",
          borderRadius: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis domain={[200000, 280000]} />
            <Tooltip
              formatter={(value) => `$${value.toLocaleString()}`}
              labelFormatter={(label) => `${label}`}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ fontWeight: 600 }}>Category</h3>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search cards..."
          style={{
            width: "100%",
            padding: "0.8rem",
            marginBottom: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <Category title="Sealed Products" items={filterItems(sealedProducts)} />
        <Category title="Single Raws" items={filterItems(singleRaws)} />
        <Category title="Graded Cards" items={filterItems(gradedCards)} />
      </div>
    </main>
  );
}

function Category({ title, items }) {
  if (items.length === 0) return null;

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h4 style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{title}</h4>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1rem",
            borderBottom: "1px solid #eee",
            paddingBottom: "0.75rem",
          }}
        >
          <div style={{ fontWeight: 600 }}>{item.name}</div>
          <div style={{ fontSize: "0.9rem", color: "#666" }}>Sealed</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0.25rem",
            }}
          >
            <div style={{ color: "#10B981", fontWeight: "bold" }}>
              ${item.value.toLocaleString()}
            </div>
            <div style={{ fontSize: "0.875rem", color: "#10B981" }}>0.00%</div>
          </div>
        </div>
      ))}
    </div>
  );
}
