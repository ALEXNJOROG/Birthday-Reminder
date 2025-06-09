import React from 'react';
import { Cake } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-white rounded-full shadow-lg">
          <Cake className="w-8 h-8 text-pink-500" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Birthday Reminder
        </h1>
      </div>
      <p className="text-gray-600 text-lg">Never forget that special day again! 🎉</p>
    </div>
  );
};

export default Header;