import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <div className="max-w-md">
        <div className="flex justify-center mb-6">
          <AlertTriangle size={80} className="text-red-600" />
        </div>
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
        <p className="text-gray-700 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition-all duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
