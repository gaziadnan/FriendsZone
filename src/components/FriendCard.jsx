"use client";

import { useRouter } from "next/navigation";

const statusStyles = {
  overdue: "bg-red-500 text-white",
  "almost due": "bg-orange-400 text-white",
  "on-track": "bg-green-700 text-white",
};

const FriendCard = ({ friend }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/friend/${friend.id}`)}
      className="w-[259px] h-[254px] bg-white rounded-xl shadow-sm flex flex-col items-center justify-center cursor-pointer
      transition duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
    >
      {/* Profile Image */}
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-[70px] h-[70px] rounded-full object-cover mb-3"
      />

      {/* Name */}
      <h2 className="font-semibold text-gray-800">
        {friend.name}
      </h2>

      {/* Days */}
      <p className="text-sm text-gray-400 mt-1">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex gap-2 mt-3 flex-wrap justify-center px-2">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status */}
      <div className="mt-3">
        <span
          className={`text-xs px-3 py-1 rounded-full ${
            statusStyles[friend.status]
          }`}
        >
          {friend.status === "on-track"
            ? "On-Track"
            : friend.status === "almost due"
            ? "Almost Due"
            : "Overdue"}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;