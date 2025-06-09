export const getDaysUntilBirthday = (dateString) => {
  const today = new Date();
  const birthday = new Date(dateString);
  const currentYear = today.getFullYear();
  
  // Set birthday to current year
  birthday.setFullYear(currentYear);
  
  // If birthday has passed this year, set to next year
  if (birthday < today) {
    birthday.setFullYear(currentYear + 1);
  }
  
  const diffTime = birthday - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric'
  });
};