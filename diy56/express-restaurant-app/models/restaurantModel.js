const fs = require('fs');

const readFile = () => {
  const data = fs.readFileSync('restaurant.json');
  return JSON.parse(data);
};

module.exports = {
  getAllRestaurants: () => readFile(),
};
