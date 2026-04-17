"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#7C3AED", "#244D3F", "#22C55E"]; // Text, Call, Video

export default function StatsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeline =
      JSON.parse(localStorage.getItem("timeline")) || [];

    const counts = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    timeline.forEach((item) => {
      if (counts[item.type] !== undefined) {
        counts[item.type]++;
      }
    });

    const chartData = [
      { name: "Text", value: counts.Text },
      { name: "Call", value: counts.Call },
      { name: "Video", value: counts.Video },
    ];

    setData(chartData);
  }, []);

  return (
    <div className="bg-[#F8FAFC] py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Friendship Analytics
        </h1>

        {/* Chart Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          
          <p className="text-gray-600 mb-6 font-medium">
            By Interaction Type
          </p>

          <div className="flex justify-center">
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={110}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </div>

        </div>
      </div>
    </div>
  );
}