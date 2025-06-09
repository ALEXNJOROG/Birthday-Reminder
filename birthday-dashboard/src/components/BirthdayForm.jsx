import React, { useState } from 'react';

const BirthdayForm = ({ onAddBirthday, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    relationship: '',
    age: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.date) {
      onAddBirthday(formData);
      setFormData({ name: '', date: '', relationship: '', age: '' });
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 animate-in slide-in-from-top duration-300">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Add New Birthday</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => handleChange('date', e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
        />
        <input
          type="text"
          placeholder="Relationship (e.g., Friend, Family)"
          value={formData.relationship}
          onChange={(e) => handleChange('relationship', e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
        />
        <input
          type="number"
          placeholder="Age (optional)"
          value={formData.age}
          onChange={(e) => handleChange('age', e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
        />
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Add Birthday
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BirthdayForm;