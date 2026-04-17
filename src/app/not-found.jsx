import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="bg-[#F8FAFC] py-20 flex flex-col justify-center items-center text-center">
      
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        404
      </h1>

      <p className="text-gray-500 mb-6">
        Page not found
      </p>

      <Link href={"/"}>
                  
                  <button className="bg-[#244D3F] text-white px-6 py-2 rounded-lg">Go back to Home
                      </button>
                  
                      </Link>
    </div>
    );
};

export default NotFoundPage;