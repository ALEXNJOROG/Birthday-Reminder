import React from 'react';
import { Gift } from 'lucide-react';
import { formatDate, getDaysUntilBirthday } from '../utils/dateUtils';

const UpcomingAlert = ({ upcomingBirthdays }) => {
  if (upcomingBirthdays.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 mb-8 text-white shadow-lg">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Gift className="w-5 h-5" />
        Upcoming Birthdays This Week!
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {upcomingBirthdays.map(birthday => (
          <div key={birthday.id} className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
            <p className="font-semibold">{birthday.name}</p>
            <p className="text-sm opacity-90">
              {formatDate(birthday.date)} • {getDaysUntilBirthday(birthday.date)} days
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingAlert;