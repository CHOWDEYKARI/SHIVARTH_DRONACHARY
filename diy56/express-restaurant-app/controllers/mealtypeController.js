const mealtypeModel = require('../models/mealtypeModel');

module.exports = {
  getMealTypes: (req, res) => {
    const mealTypes = mealtypeModel.getAllMealTypes();
    res.render('index2', { mealTypes });
  },
};
