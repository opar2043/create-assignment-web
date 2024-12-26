import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8">
        <div className="w-1/2 mx-auto">
       
        </div>
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-700 mb-6">
          The page you're looking for doesn't exist or an error occurred.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
