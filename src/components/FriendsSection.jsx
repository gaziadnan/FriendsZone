import friends from "@/data/friends.json";
import FriendCard from "./FriendCard";

const FriendsSection = () => {
  return (
    <div className="w-full bg-[#F8FAFC] pb-20">
      
      {/* ✅ CENTER CONTAINER */}
      <div className="max-w-[1110px] mx-auto px-10">
        
        {/* Title */}
        <h2 className="text-[20px] font-semibold text-gray-800 mb-8">
          Your Friends
        </h2>

        {/* ✅ RESPONSIVE GRID */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        ">
          {friends.map((friend) => (
            <div key={friend.id} className="flex justify-center">
              <FriendCard friend={friend} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FriendsSection;