import friends from "@/data/friends.json";
import FriendCard from "./FriendCard";

const FriendsSection = () => {
  return (
    <div className="w-full bg-[#F8FAFC] flex justify-center py-12">
      {/* Fixed Width Container */}
      <div className="w-full max-w-[1110px]">
        
        {/* Title */}
        <h2 className="text-[20px] font-semibold text-gray-800 mb-8">
          Your Friends
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6 justify-items-center">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default FriendsSection;