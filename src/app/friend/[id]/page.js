"use client";

import { useParams } from "next/navigation";
import friends from "@/data/friends.json";

const getStatusColor = (status) => {
  if (status === "overdue") return "bg-red-500";
  if (status === "almost due") return "bg-orange-400";
  return "bg-green-600";
};

export default function FriendDetailsPage() {
  const { id } = useParams();
  const friend = friends.find((f) => f.id == id);

  if (!friend) return <div className="p-10">Friend not found</div>;

  // ✅ UPDATED FUNCTION (IMPORTANT)
  const handleCheckIn = (type) => {
    const newEntry = {
      date: new Date().toLocaleDateString(),
      type,
      title: `${type} with ${friend.name}`,
    };

    // 🔥 localStorage এ save
    const existing = JSON.parse(localStorage.getItem("timeline")) || [];
    localStorage.setItem("timeline", JSON.stringify([newEntry, ...existing]));

    alert(`${type} added!`);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="space-y-4">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <img
              src={friend.picture}
              className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
            />

            <h2 className="text-lg font-semibold text-gray-800">
              {friend.name}
            </h2>

            <span className={`text-white px-3 py-1 rounded-full text-xs ${getStatusColor(friend.status)}`}>
              {friend.status === "on-track"
                ? "On-Track"
                : friend.status === "almost due"
                ? "Almost Due"
                : "Overdue"}
            </span>

            <div className="mt-3 flex justify-center gap-2 flex-wrap">
              {friend.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-3 italic">
              "{friend.bio}"
            </p>

            <p className="text-xs text-gray-400 mt-2">
              {friend.email}
            </p>
          </div>

          {/* Buttons */}
          <button className="w-full bg-white p-3 rounded-xl shadow-sm hover:bg-gray-50">
            ⏰ Snooze 2 Weeks
          </button>

          <button className="w-full bg-white p-3 rounded-xl shadow-sm hover:bg-gray-50">
            📦 Archive
          </button>

          <button className="w-full bg-white p-3 rounded-xl shadow-sm text-red-500 hover:bg-red-50">
            🗑️ Delete
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl shadow-sm text-center">
              <h2 className="text-xl font-bold text-gray-800">
                {friend.days_since_contact}
              </h2>
              <p className="text-sm text-gray-400">Days Since Contact</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm text-center">
              <h2 className="text-xl font-bold text-gray-800">
                {friend.goal}
              </h2>
              <p className="text-sm text-gray-400">Goal (Days)</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {friend.next_due_date}
              </h2>
              <p className="text-sm text-gray-400">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-800">
                Relationship Goal
              </h3>
              <p className="text-sm text-gray-500">
                Connect every <span className="font-semibold">{friend.goal} days</span>
              </p>
            </div>

            <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm">
              Edit
            </button>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="mb-4 font-semibold text-gray-800">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleCheckIn("Call")}
                className="bg-gray-100 p-4 rounded-xl hover:bg-gray-200"
              >
                📞 Call
              </button>

              <button
                onClick={() => handleCheckIn("Text")}
                className="bg-gray-100 p-4 rounded-xl hover:bg-gray-200"
              >
                💬 Text
              </button>

              <button
                onClick={() => handleCheckIn("Video")}
                className="bg-gray-100 p-4 rounded-xl hover:bg-gray-200"
              >
                🎥 Video
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}