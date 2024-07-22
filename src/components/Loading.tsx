// src/components/Loading.tsx
import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-80 z-50">
            <div className="flex flex-col items-center p-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
                {/* Logo */}
                <img
                    src="src/images/favicon-32x32.png"
                    alt="Loading"
                    className="w-32 h-32 mb-6 animate-pulse shadow-md rounded-full border border-blue-500"
                />
                {/* Spinner */}
                <div className="relative mb-6">
                    <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent border-solid rounded-full animate-spin"></div>
                </div>
                {/* Text */}
                <p className="text-white text-lg font-semibold">
                    Loading, please wait...
                </p>
            </div>
        </div>
    );
};

export default Loading;
