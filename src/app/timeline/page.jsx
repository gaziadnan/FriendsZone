"use client";

import { useEffect, useState } from "react";

const getIcon = (type) => {
  if (type === "Call") return "📞";
  if (type === "Text") return "💬";
  if (type === "Video") return "🎥";
  return "📌";
};

export default function TimelinePage() {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(data);
  }, []);

  const filteredData =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4">

        {/* 🔥 Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Timeline
        </h1>

        {/* 🔥 Filter (styled like Figma) */}
        <div className="mb-6">
          <select
            className="w-[220px] px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-500 shadow-sm focus:outline-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        {/* 🔥 Timeline List */}
        <div className="space-y-4">
          {filteredData.length === 0 ? (
            <p className="text-gray-400 text-sm">
              No interactions yet.
            </p>
          ) : (
            filteredData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="text-xl bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">
                  {getIcon(item.type)}
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.date}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}