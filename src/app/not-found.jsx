import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <Link href={"/"}>
            
            <button className='btn btn-primary'>Go back to Home
                </button>
            
                </Link>
            </div>
    );
};

export default NotFoundPage;