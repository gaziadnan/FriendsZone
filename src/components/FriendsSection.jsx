import friends from "@/data/friends.json";
import FriendCard from "./FriendCard";

const FriendsSection = () => {
  return (
    <div className="w-full bg-[#F8FAFC] flex justify-center pb-20">
      
      {/* ✅ Fixed container */}
      <div className="w-full max-w-[1110px] px-4">
        
        {/* Title */}
        <h2 className="text-[20px] font-semibold text-gray-800 mb-8">
          Your Friends
        </h2>

        {/* ✅ Responsive + Exact Desktop Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-[repeat(4,259px)] 
          gap-6 
          lg:gap-[24px] 
          justify-center 
          lg:justify-between
        ">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default FriendsSection;