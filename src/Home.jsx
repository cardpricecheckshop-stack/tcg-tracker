// /src/Home.jsx
import React from "react";

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

const getTotalValue = (items) =>
  items.reduce((total, item) => total + item.value, 0);

export default function Home() {
  return (
    <main style={{ padding: "2rem", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontWeight: 700 }}>
          Portfolio: <span style={{ color: "#10B981" }}>Main</span>
        </h1>
        <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>
          ${(getTotalValue(sealedProducts) +
            getTotalValue(singleRaws) +
            getTotalValue(gradedCards)
          ).toLocaleString()}
        </h2>
        <p style={{ color: "#10B981" }}>+65,882.13 in the last 30 days</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <CategoryCard
          title="Sealed Products"
          total={getTotalValue(sealedProducts)}
        />
        <CategoryCard title="Single Raws" total={getTotalValue(singleRaws)} />
        <CategoryCard title="Graded Cards" total={getTotalValue(gradedCards)} />
      </div>
    </main>
  );
}

function CategoryCard({ title, total }) {
  return (
    <div
      style={{
        flex: "1 1 30%",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        padding: "1.5rem",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        minWidth: "240px",
      }}
    >
      <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        {title}
      </h3>
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#10B981",
        }}
      >
        ${total.toLocaleString()}
      </p>
    </div>
  );
}
