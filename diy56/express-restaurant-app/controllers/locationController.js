const locationModel = require('../models/locationModel');

module.exports = {
  getLocations: (req, res) => {
    const locations = locationModel.getAllLocations();
    res.render('index1', { locations });
  },
};
