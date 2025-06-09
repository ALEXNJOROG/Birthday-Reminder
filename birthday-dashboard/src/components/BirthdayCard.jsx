import React from 'react';
import { Calendar, Trash2, Cake } from 'lucide-react';
import { formatDate, getDaysUntilBirthday } from '../utils/dateUtils';

const BirthdayCard = ({ birthday, onDelete }) => {
  const daysUntil = getDaysUntilBirthday(birthday.date);
  const isToday = daysUntil === 0;
  const isSoon = daysUntil <= 7;

  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
        isToday ? 'ring-4 ring-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50' : 
        isSoon ? 'ring-2 ring-pink-300' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${birthday.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
          {birthday.name.charAt(0)}
        </div>
        <button
          onClick={() => onDelete(birthday.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-2">{birthday.name}</h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(birthday.date)}</span>
        </div>
        {birthday.relationship && (
          <p className="text-sm text-gray-500">{birthday.relationship}</p>
        )}
        {birthday.age > 0 && (
          <p className="text-sm text-gray-500">
            Turning {birthday.age + Math.floor((new Date().getFullYear() - new Date(birthday.date).getFullYear()))}
          </p>
        )}
      </div>
      
      <div className={`text-center p-3 rounded-lg ${
        isToday ? 'bg-yellow-100 text-yellow-800' :
        isSoon ? 'bg-pink-100 text-pink-800' :
        'bg-gray-100 text-gray-600'
      }`}>
        {isToday ? (
          <div className="flex items-center justify-center gap-2">
            <Cake className="w-4 h-4" />
            <span className="font-bold">Today! 🎉</span>
          </div>
        ) : (
          <span className="font-semibold">
            {daysUntil} day{daysUntil !== 1 ? 's' : ''} to go
          </span>
        )}
      </div>
    </div>
  );
};

export default BirthdayCard;