import React from 'react';
import { Gift, Star, Heart } from 'lucide-react';

const BirthdayStats = ({ totalBirthdays, upcomingCount, nextBirthdayDays }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-pink-100 rounded-full">
            <Gift className="w-6 h-6 text-pink-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{totalBirthdays}</p>
            <p className="text-gray-600">Total Birthdays</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-yellow-100 rounded-full">
            <Star className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{upcomingCount}</p>
            <p className="text-gray-600">This Week</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-purple-100 rounded-full">
            <Heart className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{nextBirthdayDays}</p>
            <p className="text-gray-600">Days Until Next</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayStats;