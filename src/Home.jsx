import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredItems = valuableItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Overview</h1>
        <span className="text-green-600 font-semibold">USD</span>
      </div>

      <div className="text-4xl font-bold">$271,171.49</div>
      <div className="text-green-500">+$65,882.13 in the last 30 days</div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={portfolioData}>
            <XAxis dataKey="date" />
            <YAxis domain={[200000, 280000]} />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="pt-4">
        <h2 className="text-xl font-semibold mb-2">Most Valuable</h2>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search cards..."
          className="mb-4 w-full p-2 border border-gray-300 rounded-md"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {filteredItems.map((item, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-4 flex justify-between items-center">
                <div className="space-y-1">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-muted-foreground text-sm">Sealed</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">${item.value.toLocaleString()}</div>
                  <div className="text-green-500 text-sm">0.00%</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
