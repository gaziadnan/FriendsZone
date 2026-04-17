import { Plus } from "lucide-react";

const Banner = () => {
  return (
    <div className="w-full bg-[#F8FAFC] flex justify-center py-10">
      <div className="w-full max-w-[1110px] px-10 mt-10 text-center">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Friends to keep close in your life
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>

        {/* Button */}
        <button className="bg-[#244D3F] text-white px-5 py-2.5 rounded-md flex items-center gap-2 mx-auto hover:opacity-90 transition">
          <Plus size={18} />
          Add a Friend
        </button>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-10">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm py-8">
            <h2 className="text-3xl font-bold text-[#244D3F]">10</h2>
            <p className="text-gray-500 mt-2">Total Friends</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm py-8">
            <h2 className="text-3xl font-bold text-[#244D3F]">3</h2>
            <p className="text-gray-500 mt-2">On Track</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm py-8">
            <h2 className="text-3xl font-bold text-[#244D3F]">6</h2>
            <p className="text-gray-500 mt-2">Need Attention</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm py-8">
            <h2 className="text-3xl font-bold text-[#244D3F]">12</h2>
            <p className="text-gray-500 mt-2">Interactions This Month</p>
          </div>

        </div>
<hr className="border-[#e9e9e9b5] border-1 mt-12" />
      </div>
      
    </div>
  );
};

export default Banner;