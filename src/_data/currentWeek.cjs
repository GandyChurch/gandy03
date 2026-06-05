module.exports = function() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const pastDaysOfYear = (now - startOfYear) / 86400000;
  
  // Calculates the current ISO week number
  return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
};
