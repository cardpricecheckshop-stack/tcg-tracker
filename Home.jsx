
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <main className="p-4 max-w-xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-bold">Portfolio: <span className="text-green-600">Main</span></h1>
        <h2 className="text-3xl font-bold">$271,171.49</h2>
        <p className="text-green-500 font-medium">+65,882.13 in the last 30 days</p>
      </div>

      <Card>
        <CardContent className="p-4">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-lg font-semibold">Most Valuable</h3>
        <div className="space-y-3 mt-2">
          {mostValuable.map((item, i) => (
            <div key={i} className="flex justify-between border-b pb-1">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">Sealed</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{item.price}</p>
                <p className="text-xs text-green-500">{item.change}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Button variant="link" className="text-blue-600 px-0">View All</Button>
        </div>
      </div>
    </main>
  );
}
