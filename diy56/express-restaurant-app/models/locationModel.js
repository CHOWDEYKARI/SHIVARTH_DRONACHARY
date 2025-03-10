const fs = require('fs');

const readFile = () => {
  const data = fs.readFileSync('location.json');
  return JSON.parse(data);
};

module.exports = {
  getAllLocations: () => readFile(),
};
