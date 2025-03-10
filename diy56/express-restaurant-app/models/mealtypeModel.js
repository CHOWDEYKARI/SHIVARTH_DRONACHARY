const fs = require('fs');

const readFile = () => {
  const data = fs.readFileSync('mealtype.json');
  return JSON.parse(data);
};

module.exports = {
  getAllMealTypes: () => readFile(),
};
