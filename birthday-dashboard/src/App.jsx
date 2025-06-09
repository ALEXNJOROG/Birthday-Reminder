import React, { useState } from 'react';
import Header from './components/Header';
import BirthdayStats from './components/BirthdayStats';
import UpcomingAlert from './components/UpcomingAlert';
import BirthdayForm from './components/BirthdayForm';
import BirthdayCard from './components/BirthdayCard';
import { sampleBirthdays, colors } from './data/sampleData';
import { getDaysUntilBirthday } from './utils/dateUtils';
import { Plus, Gift } from 'lucide-react';

function App() {
  const [birthdays, setBirthdays] = useState(sampleBirthdays);
  const [showAddForm, setShowAddForm] = useState(false);

  const addBirthday = (newBirthdayData) => {
    const birthday = {
      id: Date.now(),
      ...newBirthdayData,
      age: parseInt(newBirthdayData.age) || 0,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setBirthdays([...birthdays, birthday]);
    setShowAddForm(false);
  };

  const deleteBirthday = (id) => {
    setBirthdays(birthdays.filter(birthday => birthday.id !== id));
  };

  const sortedBirthdays = [...birthdays].sort((a, b) => 
    getDaysUntilBirthday(a.date) - getDaysUntilBirthday(b.date)
  );

  const upcomingBirthdays = sortedBirthdays.filter(birthday => 
    getDaysUntilBirthday(birthday.date) <= 7
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <BirthdayStats 
          totalBirthdays={birthdays.length}
          upcomingCount={upcomingBirthdays.length}
          nextBirthdayDays={sortedBirthdays.length > 0 ? getDaysUntilBirthday(sortedBirthdays[0].date) : 0}
        />

        <UpcomingAlert upcomingBirthdays={upcomingBirthdays} />

        {/* Add Birthday Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Plus className="w-5 h-5" />
            Add Birthday
          </button>
        </div>

        {showAddForm && (
          <BirthdayForm 
            onAddBirthday={addBirthday}
            onCancel={() => setShowAddForm(false)}
          />
        )}

        {/* Birthday List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedBirthdays.map((birthday) => (
            <BirthdayCard
              key={birthday.id}
              birthday={birthday}
              onDelete={deleteBirthday}
            />
          ))}
        </div>
        
        {birthdays.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No birthdays yet!</h3>
            <p className="text-gray-500">Add some birthdays to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;