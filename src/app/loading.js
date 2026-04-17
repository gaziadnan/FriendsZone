export default function Loading() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen flex justify-center items-center">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-[#244D3F] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-500">Loading...</p>
      </div>
    </div>
  );
}